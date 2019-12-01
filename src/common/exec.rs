use std::fmt;
use std::future::Future;
use std::pin::Pin;

use crate::body::{Payload, Body};
use crate::proto::h2::server::H2Stream;
use crate::server::conn::spawn_all::{NewSvcTask, Watcher};
use crate::service::HttpService;

pub trait H2Exec<F, B: Payload>: Clone {
    fn execute_h2stream(&mut self, fut: H2Stream<F, B>) -> crate::Result<()>;
}

pub trait NewSvcExec<I, N, S: HttpService<Body>, E, W: Watcher<I, S, E>>: Clone {
    fn execute_new_svc(&mut self, fut: NewSvcTask<I, N, S, E, W>) -> crate::Result<()>;
}

type BoxFuture = Pin<Box<dyn Future<Output=()> + Send>>;

// Either the user provides an executor for background tasks, or we use
// `tokio::spawn`.
#[derive(Clone)]
pub enum Exec {
    Default,
}

// ===== impl Exec =====

impl Exec {
    pub(crate) fn execute<F>(&self, fut: F) -> crate::Result<()>
    where
        F: Future<Output=()> + Send + 'static,
    {
        match *self {
            Exec::Default => {
                #[cfg(feature = "tcp")]
                {
                    use std::error::Error as StdError;

                    struct TokioSpawnError;

                    impl fmt::Debug for TokioSpawnError {
                        fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
                            fmt::Debug::fmt("tokio::spawn failed (is a tokio runtime running this future?)", f)
                        }
                    }

                    impl fmt::Display for TokioSpawnError {
                        fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
                            fmt::Display::fmt("tokio::spawn failed (is a tokio runtime running this future?)", f)
                        }
                    }

                    impl StdError for TokioSpawnError {
                        fn description(&self) -> &str {
                            "tokio::spawn failed"
                        }
                    }

                    ::tokio::spawn(Box::pin(fut))
                        .map_err(|err| {
                            warn!("executor error: {:?}", err);
                            crate::Error::new_execute(TokioSpawnError)
                        })
                }
                #[cfg(not(feature = "tcp"))]
                {
                    // If no runtime, we need an executor!
                    panic!("executor must be set")
                }
            },
        }
    }
}

impl fmt::Debug for Exec {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("Exec")
            .finish()
    }
}


impl<F, B> H2Exec<F, B> for Exec
where
    H2Stream<F, B>: Future<Output = ()> + Send + 'static,
    B: Payload,
{
    fn execute_h2stream(&mut self, fut: H2Stream<F, B>) -> crate::Result<()> {
        self.execute(fut)
    }
}

impl<I, N, S, E, W> NewSvcExec<I, N, S, E, W> for Exec
where
    NewSvcTask<I, N, S, E, W>: Future<Output=()> + Send + 'static,
    S: HttpService<Body>,
    W: Watcher<I, S, E>,
{
    fn execute_new_svc(&mut self, fut: NewSvcTask<I, N, S, E, W>) -> crate::Result<()> {
        self.execute(fut)
    }
}

// ==== impl Executor =====
// ===== StdError impls =====

