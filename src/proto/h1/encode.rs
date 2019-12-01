use std::fmt;

use bytes::{Buf};
use bytes::buf::{Chain, Take};
use iovec::IoVec;

use crate::common::StaticBuf;
use super::io::WriteBuf;

/// Encoders to handle different Transfer-Encodings.
#[derive(Debug, Clone, PartialEq)]
pub struct Encoder {
    kind: Kind,
    is_last: bool,
}

#[derive(Debug)]
pub struct EncodedBuf<B> {
    kind: BufKind<B>,
}

#[derive(Debug)]
pub struct NotEof;

#[derive(Debug, PartialEq, Clone)]
enum Kind {
    /// An Encoder for when Transfer-Encoding includes `chunked`.
    Chunked,
    /// An Encoder for when Content-Length is set.
    ///
    /// Enforces that the body is not longer than the Content-Length header.
    Length(u64),
    /// An Encoder for when neither Content-Length nore Chunked encoding is set.
    ///
    /// This is mostly only used with HTTP/1.0 with a length. This kind requires
    /// the connection to be closed when the body is finished.
    CloseDelimited,
}

#[derive(Debug)]
enum BufKind<B> {
    Exact(B),
    Limited(Take<B>),
    Chunked(Chain<Chain<ChunkSize, B>, StaticBuf>),
    ChunkedEnd(StaticBuf),
}

impl Encoder {
    fn new(kind: Kind) -> Encoder {
        Encoder {
            kind: kind,
            is_last: false,
        }
    }
    pub fn chunked() -> Encoder {
        Encoder::new(Kind::Chunked)
    }

    pub fn length(len: u64) -> Encoder {
        Encoder::new(Kind::Length(len))
    }

    pub fn close_delimited() -> Encoder {
        Encoder::new(Kind::CloseDelimited)
    }

    pub fn is_eof(&self) -> bool {
        match self.kind {
            Kind::Length(0) => true,
            _ => false
        }
    }

    pub fn set_last(mut self, is_last: bool) -> Self {
        self.is_last = is_last;
        self
    }

    pub fn is_last(&self) -> bool {
        self.is_last
    }

    pub fn end<B>(&self) -> Result<Option<EncodedBuf<B>>, NotEof> {
        match self.kind {
            Kind::Length(0) => Ok(None),
            Kind::Chunked => Ok(Some(EncodedBuf {
                kind: BufKind::ChunkedEnd(StaticBuf(b"0\r\n\r\n")),
            })),
            _ => Err(NotEof),
        }
    }

    pub fn encode<B>(&mut self, msg: B) -> EncodedBuf<B::Buf>
    where
        B: IntoBuf,
    {
        let msg = msg.into_buf();
        let len = msg.remaining();
        debug_assert!(len > 0, "encode() called with empty buf");

        let kind = match self.kind {
            Kind::Chunked => {
                trace!("encoding chunked {}B", len);
                let buf = ChunkSize::new(len)
                    .chain(msg)
                    .chain(StaticBuf(b"\r\n"));
                BufKind::Chunked(buf)
            },
            Kind::Length(ref mut remaining) => {
                trace!("sized write, len = {}", len);
                if len as u64 > *remaining {
                    let limit = *remaining as usize;
                    *remaining = 0;
                    BufKind::Limited(msg.take(limit))
                } else {
                    *remaining -= len as u64;
                    BufKind::Exact(msg)
                }
            },
            Kind::CloseDelimited => {
                trace!("close delimited write {}B", len);
                BufKind::Exact(msg)
            }
        };
        EncodedBuf {
            kind,
        }
    }

    pub(super) fn encode_and_end<B>(&self, msg: B, dst: &mut WriteBuf<EncodedBuf<B::Buf>>) -> bool
    where
        B: IntoBuf,
    {
        let msg = msg.into_buf();
        let len = msg.remaining();
        debug_assert!(len > 0, "encode() called with empty buf");

        match self.kind {
            Kind::Chunked => {
                trace!("encoding chunked {}B", len);
                let buf = ChunkSize::new(len)
                    .chain(msg)
                    .chain(StaticBuf(b"\r\n0\r\n\r\n"));
                dst.buffer(buf);
                !self.is_last
            },
            Kind::Length(remaining) => {
                use std::cmp::Ordering;

                trace!("sized write, len = {}", len);
                match (len as u64).cmp(&remaining) {
                    Ordering::Equal => {
                        dst.buffer(msg);
                        !self.is_last
                    },
                    Ordering::Greater => {
                        dst.buffer(msg.take(remaining as usize));
                        !self.is_last
                    },
                    Ordering::Less => {
                        dst.buffer(msg);
                        false
                    }
                }
            },
            Kind::CloseDelimited => {
                trace!("close delimited write {}B", len);
                dst.buffer(msg);
                false
            }
        }
    }

    /// Encodes the full body, without verifying the remaining length matches.
    ///
    /// This is used in conjunction with Payload::__hyper_full_data(), which
    /// means we can trust that the buf has the correct size (the buf itself
    /// was checked to make the headers).
    pub(super) fn danger_full_buf<B>(self, msg: B, dst: &mut WriteBuf<EncodedBuf<B::Buf>>)
    where
        B: IntoBuf,
    {
        let msg = msg.into_buf();
        debug_assert!(msg.remaining() > 0, "encode() called with empty buf");
        debug_assert!(match self.kind {
            Kind::Length(len) => len == msg.remaining() as u64,
            _ => true,
        }, "danger_full_buf length mismatches");

        match self.kind {
            Kind::Chunked => {
                let len = msg.remaining();
                trace!("encoding chunked {}B", len);
                let buf = ChunkSize::new(len)
                    .chain(msg)
                    .chain(StaticBuf(b"\r\n0\r\n\r\n"));
                dst.buffer(buf);
            },
            _ => {
                dst.buffer(msg);
            },
        }
    }
}

impl<B> Buf for EncodedBuf<B>
where
    B: Buf,
{
    #[inline]
    fn remaining(&self) -> usize {
        match self.kind {
            BufKind::Exact(ref b) => b.remaining(),
            BufKind::Limited(ref b) => b.remaining(),
            BufKind::Chunked(ref b) => b.remaining(),
            BufKind::ChunkedEnd(ref b) => b.remaining(),
        }
    }

    #[inline]
    fn bytes(&self) -> &[u8] {
        match self.kind {
            BufKind::Exact(ref b) => b.bytes(),
            BufKind::Limited(ref b) => b.bytes(),
            BufKind::Chunked(ref b) => b.bytes(),
            BufKind::ChunkedEnd(ref b) => b.bytes(),
        }
    }

    #[inline]
    fn advance(&mut self, cnt: usize) {
        match self.kind {
            BufKind::Exact(ref mut b) => b.advance(cnt),
            BufKind::Limited(ref mut b) => b.advance(cnt),
            BufKind::Chunked(ref mut b) => b.advance(cnt),
            BufKind::ChunkedEnd(ref mut b) => b.advance(cnt),
        }
    }

    #[inline]
    fn bytes_vec<'t>(&'t self, dst: &mut [&'t IoVec]) -> usize {
        match self.kind {
            BufKind::Exact(ref b) => b.bytes_vec(dst),
            BufKind::Limited(ref b) => b.bytes_vec(dst),
            BufKind::Chunked(ref b) => b.bytes_vec(dst),
            BufKind::ChunkedEnd(ref b) => b.bytes_vec(dst),
        }
    }
}


#[cfg(target_pointer_width = "32")]
const USIZE_BYTES: usize = 4;

#[cfg(target_pointer_width = "64")]
const USIZE_BYTES: usize = 8;

// each byte will become 2 hex
const CHUNK_SIZE_MAX_BYTES: usize = USIZE_BYTES * 2;

#[derive(Clone, Copy)]
struct ChunkSize {
    bytes: [u8; CHUNK_SIZE_MAX_BYTES + 2],
    pos: u8,
    len: u8,
}

impl ChunkSize {
    fn new(len: usize) -> ChunkSize {
        use std::fmt::Write;
        let mut size = ChunkSize {
            bytes: [0; CHUNK_SIZE_MAX_BYTES + 2],
            pos: 0,
            len: 0,
        };
        write!(&mut size, "{:X}\r\n", len)
            .expect("CHUNK_SIZE_MAX_BYTES should fit any usize");
        size
    }
}

impl Buf for ChunkSize {
    #[inline]
    fn remaining(&self) -> usize {
        (self.len - self.pos).into()
    }

    #[inline]
    fn bytes(&self) -> &[u8] {
        &self.bytes[self.pos.into() .. self.len.into()]
    }

    #[inline]
    fn advance(&mut self, cnt: usize) {
        assert!(cnt <= self.remaining());
        self.pos += cnt as u8; // just asserted cnt fits in u8
    }
}

impl fmt::Debug for ChunkSize {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("ChunkSize")
            .field("bytes", &&self.bytes[..self.len.into()])
            .field("pos", &self.pos)
            .finish()
    }
}

impl fmt::Write for ChunkSize {
    fn write_str(&mut self, num: &str) -> fmt::Result {
        use std::io::Write;
        (&mut self.bytes[self.len.into()..]).write(num.as_bytes())
            .expect("&mut [u8].write() cannot error");
        self.len += num.len() as u8; // safe because bytes is never bigger than 256
        Ok(())
    }
}

impl<B: Buf> From<B> for EncodedBuf<B> {
    fn from(buf: B) -> Self {
        EncodedBuf {
            kind: BufKind::Exact(buf),
        }
    }
}

impl<B: Buf> From<Take<B>> for EncodedBuf<B> {
    fn from(buf: Take<B>) -> Self {
        EncodedBuf {
            kind: BufKind::Limited(buf),
        }
    }
}

impl<B: Buf> From<Chain<Chain<ChunkSize, B>, StaticBuf>> for EncodedBuf<B> {
    fn from(buf: Chain<Chain<ChunkSize, B>, StaticBuf>) -> Self {
        EncodedBuf {
            kind: BufKind::Chunked(buf),
        }
    }
}

#[cfg(test)]
mod tests {
    use bytes::{BufMut};

    use super::super::io::Cursor;
    use super::Encoder;

    #[test]
    fn chunked() {
        let mut encoder = Encoder::chunked();
        let mut dst = Vec::new();

        let msg1 = b"foo bar".as_ref();
        let buf1 = encoder.encode(msg1);
        dst.put(buf1);
        assert_eq!(dst, b"7\r\nfoo bar\r\n");

        let msg2 = b"baz quux herp".as_ref();
        let buf2 = encoder.encode(msg2);
        dst.put(buf2);

        assert_eq!(dst, b"7\r\nfoo bar\r\nD\r\nbaz quux herp\r\n");

        let end = encoder.end::<Cursor<Vec<u8>>>().unwrap().unwrap();
        dst.put(end);

        assert_eq!(dst, b"7\r\nfoo bar\r\nD\r\nbaz quux herp\r\n0\r\n\r\n".as_ref());
    }

    #[test]
    fn length() {
        let max_len = 8;
        let mut encoder = Encoder::length(max_len as u64);
        let mut dst = Vec::new();


        let msg1 = b"foo bar".as_ref();
        let buf1 = encoder.encode(msg1);
        dst.put(buf1);


        assert_eq!(dst, b"foo bar");
        assert!(!encoder.is_eof());
        encoder.end::<()>().unwrap_err();

        let msg2 = b"baz".as_ref();
        let buf2 = encoder.encode(msg2);
        dst.put(buf2);

        assert_eq!(dst.len(), max_len);
        assert_eq!(dst, b"foo barb");
        assert!(encoder.is_eof());
        assert!(encoder.end::<()>().unwrap().is_none());
    }

    #[test]
    fn eof() {
        let mut encoder = Encoder::close_delimited();
        let mut dst = Vec::new();


        let msg1 = b"foo bar".as_ref();
        let buf1 = encoder.encode(msg1);
        dst.put(buf1);


        assert_eq!(dst, b"foo bar");
        assert!(!encoder.is_eof());
        encoder.end::<()>().unwrap_err();

        let msg2 = b"baz".as_ref();
        let buf2 = encoder.encode(msg2);
        dst.put(buf2);

        assert_eq!(dst, b"foo barbaz");
        assert!(!encoder.is_eof());
        encoder.end::<()>().unwrap_err();
    }
}
