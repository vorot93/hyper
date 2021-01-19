window.BENCHMARK_DATA = {
  "lastUpdate": 1611078942312,
  "repoUrl": "https://github.com/vorot93/hyper",
  "entries": {
    "connect": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/vorot93/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605581876997,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 70138,
            "range": "± 20169",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "eb092a7b8cdcf16760027522f3ea2e818e138e21",
          "message": "chore(ci): check all feature combinations in CI",
          "timestamp": "2020-11-17T14:30:27-08:00",
          "tree_id": "857a77fb5849465e43aa3949ed1e99e109ca2e95",
          "url": "https://github.com/vorot93/hyper/commit/eb092a7b8cdcf16760027522f3ea2e818e138e21"
        },
        "date": 1605653876753,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 65053,
            "range": "± 8020",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/vorot93/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605682668628,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 53893,
            "range": "± 2379",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/vorot93/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605754667687,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 66096,
            "range": "± 6364",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/vorot93/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605841034302,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49196,
            "range": "± 1693",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/vorot93/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606244249350,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 59207,
            "range": "± 8618",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/vorot93/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606352418788,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48721,
            "range": "± 2991",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/vorot93/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606553980634,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46805,
            "range": "± 7382",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/vorot93/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606765965750,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 69467,
            "range": "± 18398",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/vorot93/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606874802517,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 42586,
            "range": "± 8640",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/vorot93/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607044198337,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50450,
            "range": "± 11656",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/vorot93/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607044669067,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47977,
            "range": "± 5054",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/vorot93/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607994122374,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 65191,
            "range": "± 11146",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/vorot93/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608068041264,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49053,
            "range": "± 2489",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/vorot93/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608087698476,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 67572,
            "range": "± 16981",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/vorot93/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608623375965,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49579,
            "range": "± 8226",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/vorot93/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608675823527,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45573,
            "range": "± 1169",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/vorot93/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608755749349,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 69140,
            "range": "± 7062",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/vorot93/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608776539062,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50086,
            "range": "± 1320",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/vorot93/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609212991491,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46082,
            "range": "± 1100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/vorot93/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609284688030,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46833,
            "range": "± 5102",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/vorot93/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610147887049,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50787,
            "range": "± 1519",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/vorot93/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610504288716,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49805,
            "range": "± 1197",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/vorot93/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610660700209,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51336,
            "range": "± 7124",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/vorot93/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610668708176,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 56826,
            "range": "± 8404",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/vorot93/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610745378265,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 44700,
            "range": "± 3988",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/vorot93/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610774288528,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49396,
            "range": "± 1009",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/vorot93/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611078816478,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 72859,
            "range": "± 11483",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/vorot93/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605581895132,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 84072,
            "range": "± 15797",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "eb092a7b8cdcf16760027522f3ea2e818e138e21",
          "message": "chore(ci): check all feature combinations in CI",
          "timestamp": "2020-11-17T14:30:27-08:00",
          "tree_id": "857a77fb5849465e43aa3949ed1e99e109ca2e95",
          "url": "https://github.com/vorot93/hyper/commit/eb092a7b8cdcf16760027522f3ea2e818e138e21"
        },
        "date": 1605653879107,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 66535,
            "range": "± 26944",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/vorot93/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605682696039,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 64972,
            "range": "± 11239",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/vorot93/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605754682649,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 73071,
            "range": "± 17413",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/vorot93/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605841084932,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 63033,
            "range": "± 22442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/vorot93/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606244270107,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 60800,
            "range": "± 18114",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/vorot93/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606352456751,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 71770,
            "range": "± 26854",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/vorot93/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606554003863,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56412,
            "range": "± 10847",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/vorot93/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606765970306,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57089,
            "range": "± 15100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/vorot93/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606874833255,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 63889,
            "range": "± 29971",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/vorot93/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607044205308,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58218,
            "range": "± 9629",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/vorot93/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607044671325,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54695,
            "range": "± 11775",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/vorot93/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607994098267,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 48011,
            "range": "± 2706",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/vorot93/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608068021015,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47136,
            "range": "± 2491",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/vorot93/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608087693172,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 51502,
            "range": "± 5979",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/vorot93/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608623399385,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 66447,
            "range": "± 12022",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/vorot93/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608675850354,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 48901,
            "range": "± 2166",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/vorot93/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608755753807,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 55456,
            "range": "± 6727",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/vorot93/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608776548753,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57934,
            "range": "± 12795",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/vorot93/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609213013047,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54412,
            "range": "± 3873",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/vorot93/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609284712557,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 65575,
            "range": "± 18355",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/vorot93/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610147867980,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46987,
            "range": "± 1825",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/vorot93/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610504278919,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 45933,
            "range": "± 8949",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/vorot93/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610660709379,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54686,
            "range": "± 3266",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/vorot93/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610668706893,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57313,
            "range": "± 12936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/vorot93/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610745417672,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58134,
            "range": "± 13219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/vorot93/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610774292075,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47890,
            "range": "± 5295",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/vorot93/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611078808222,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54827,
            "range": "± 4464",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/vorot93/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605582054163,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 83265,
            "range": "± 1628",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11769748,
            "range": "± 1037142",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31124,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 221611,
            "range": "± 6267",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52810027,
            "range": "± 2468813",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 77431508,
            "range": "± 1460788",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 76589005,
            "range": "± 1244556",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5860366,
            "range": "± 604704",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33974,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58351,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 192657,
            "range": "± 7140",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10720333,
            "range": "± 305403",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10923193,
            "range": "± 9191444",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10584668,
            "range": "± 9368718",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66959218,
            "range": "± 3918687",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 71789719,
            "range": "± 5832300",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7370810,
            "range": "± 705982",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 67880,
            "range": "± 2775",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 135500,
            "range": "± 12208",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "eb092a7b8cdcf16760027522f3ea2e818e138e21",
          "message": "chore(ci): check all feature combinations in CI",
          "timestamp": "2020-11-17T14:30:27-08:00",
          "tree_id": "857a77fb5849465e43aa3949ed1e99e109ca2e95",
          "url": "https://github.com/vorot93/hyper/commit/eb092a7b8cdcf16760027522f3ea2e818e138e21"
        },
        "date": 1605654041944,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 91345,
            "range": "± 7361",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 12464326,
            "range": "± 1138847",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 34234,
            "range": "± 3626",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 250266,
            "range": "± 14418",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52751710,
            "range": "± 1665727",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 80588429,
            "range": "± 4384902",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 80694607,
            "range": "± 1568025",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 6587682,
            "range": "± 739025",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37672,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 61211,
            "range": "± 1200",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 197224,
            "range": "± 3908",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11337705,
            "range": "± 137482",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11697531,
            "range": "± 9009771",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11066287,
            "range": "± 9105748",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 73395380,
            "range": "± 4990855",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 76869854,
            "range": "± 6138047",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7763601,
            "range": "± 707198",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 70040,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 141497,
            "range": "± 1411",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/vorot93/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605682828358,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 85095,
            "range": "± 9042",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 10120033,
            "range": "± 1012243",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32487,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 225370,
            "range": "± 5432",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52719090,
            "range": "± 2329866",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 74389849,
            "range": "± 2473530",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 75552733,
            "range": "± 3592766",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4878082,
            "range": "± 606089",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35911,
            "range": "± 2480",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58829,
            "range": "± 5950",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 194568,
            "range": "± 11566",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10893572,
            "range": "± 726142",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11017135,
            "range": "± 8575820",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10825716,
            "range": "± 9221545",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66498092,
            "range": "± 5239203",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68011468,
            "range": "± 6783707",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6970576,
            "range": "± 554774",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 68045,
            "range": "± 16289",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 136580,
            "range": "± 6670",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/vorot93/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605754829546,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76274,
            "range": "± 11541",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 9951250,
            "range": "± 890777",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 27102,
            "range": "± 5309",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 200713,
            "range": "± 43886",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52029855,
            "range": "± 2447243",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 72823512,
            "range": "± 3085384",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 73404170,
            "range": "± 2841146",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4992890,
            "range": "± 685144",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 30015,
            "range": "± 5910",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 51354,
            "range": "± 10586",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 168578,
            "range": "± 25972",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9409353,
            "range": "± 1399897",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10114455,
            "range": "± 9944880",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8947698,
            "range": "± 9845714",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58630872,
            "range": "± 5853260",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 62268609,
            "range": "± 8572637",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6317747,
            "range": "± 1011351",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60629,
            "range": "± 7264",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 121237,
            "range": "± 13861",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/vorot93/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605841262081,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 131871,
            "range": "± 17803",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8804644,
            "range": "± 1039324",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 39654,
            "range": "± 4198",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 255594,
            "range": "± 32848",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52015922,
            "range": "± 827097",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 82738004,
            "range": "± 5574109",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 84617345,
            "range": "± 3859244",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4494837,
            "range": "± 769254",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 44935,
            "range": "± 5865",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 82248,
            "range": "± 10830",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 207076,
            "range": "± 31800",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12998215,
            "range": "± 1794785",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13220345,
            "range": "± 9310402",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12543485,
            "range": "± 9317709",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 69007107,
            "range": "± 8093689",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68052854,
            "range": "± 7903214",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6901372,
            "range": "± 1010607",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 93821,
            "range": "± 15735",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 183227,
            "range": "± 23439",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/vorot93/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606244471285,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 124022,
            "range": "± 59637",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 10264982,
            "range": "± 1614533",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44057,
            "range": "± 10887",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 275421,
            "range": "± 33497",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52068175,
            "range": "± 2487585",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 64372563,
            "range": "± 4725946",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 64992523,
            "range": "± 5395990",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5498191,
            "range": "± 2077065",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 48632,
            "range": "± 5452",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 82092,
            "range": "± 14745",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 232681,
            "range": "± 30195",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 13017798,
            "range": "± 9354007",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13354498,
            "range": "± 9345370",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 13021015,
            "range": "± 9399790",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 74973853,
            "range": "± 8057748",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 99892795,
            "range": "± 20274874",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 8993374,
            "range": "± 2074896",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 93792,
            "range": "± 26601",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 180723,
            "range": "± 27241",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/vorot93/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606352528938,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 72894,
            "range": "± 696",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6758693,
            "range": "± 279333",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30786,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 230521,
            "range": "± 7988",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51999341,
            "range": "± 91357",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51382966,
            "range": "± 1040875",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54934315,
            "range": "± 2038269",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3592122,
            "range": "± 297557",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 34671,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 48741,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 151980,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8039340,
            "range": "± 8813542",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8152140,
            "range": "± 8905544",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7886179,
            "range": "± 8555855",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54993991,
            "range": "± 3657397",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68173640,
            "range": "± 12560944",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5847406,
            "range": "± 669316",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 54764,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 109465,
            "range": "± 1967",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/vorot93/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606554156296,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 79627,
            "range": "± 18507",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6988987,
            "range": "± 642178",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33422,
            "range": "± 3561",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 232449,
            "range": "± 45373",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52404515,
            "range": "± 2142546",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50711736,
            "range": "± 2096814",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54171082,
            "range": "± 1340736",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3862523,
            "range": "± 387417",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36979,
            "range": "± 1294",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52464,
            "range": "± 1675",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 172678,
            "range": "± 10913",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8617349,
            "range": "± 9315265",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8623329,
            "range": "± 9636139",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8777339,
            "range": "± 9536588",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56035416,
            "range": "± 3750718",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72750050,
            "range": "± 14747725",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6003035,
            "range": "± 763745",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 59484,
            "range": "± 4399",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 116182,
            "range": "± 2346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/vorot93/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606766147333,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 75998,
            "range": "± 2396",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 10457679,
            "range": "± 2065308",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31444,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 224149,
            "range": "± 8140",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52065603,
            "range": "± 2074298",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 79160911,
            "range": "± 3166586",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 80001511,
            "range": "± 4419579",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 8047385,
            "range": "± 1163902",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35543,
            "range": "± 1337",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52682,
            "range": "± 2388",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 172118,
            "range": "± 1538",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9164901,
            "range": "± 9532996",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9447959,
            "range": "± 9060050",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9077282,
            "range": "± 9539643",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 77931200,
            "range": "± 12063257",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 116194022,
            "range": "± 29051776",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 9967024,
            "range": "± 3471875",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 59245,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 114206,
            "range": "± 2486",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/vorot93/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606874978208,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 71098,
            "range": "± 6237",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6688876,
            "range": "± 412992",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29227,
            "range": "± 3149",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 204123,
            "range": "± 20506",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52789788,
            "range": "± 1631867",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50282172,
            "range": "± 2875629",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53060537,
            "range": "± 2173067",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3528887,
            "range": "± 452189",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33210,
            "range": "± 3031",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 49653,
            "range": "± 4782",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 162243,
            "range": "± 15647",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8051907,
            "range": "± 9471951",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8144427,
            "range": "± 9581201",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7885231,
            "range": "± 9671810",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53393741,
            "range": "± 5762698",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68713285,
            "range": "± 14250978",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5702363,
            "range": "± 922495",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 55943,
            "range": "± 6662",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 106851,
            "range": "± 8230",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/vorot93/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607044383443,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 128362,
            "range": "± 19799",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6383903,
            "range": "± 1181703",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 41912,
            "range": "± 11482",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 260354,
            "range": "± 64515",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52018589,
            "range": "± 1285860",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50983090,
            "range": "± 6152432",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57856597,
            "range": "± 7387518",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3487545,
            "range": "± 569066",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 47573,
            "range": "± 11458",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 73661,
            "range": "± 16694",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 177130,
            "range": "± 32304",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11230191,
            "range": "± 10118790",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11555852,
            "range": "± 9628429",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11135450,
            "range": "± 9644909",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64253408,
            "range": "± 7438779",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73689462,
            "range": "± 21643181",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5857149,
            "range": "± 1070377",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 84979,
            "range": "± 20596",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 161024,
            "range": "± 30036",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/vorot93/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607044839677,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 72949,
            "range": "± 8800",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7005167,
            "range": "± 448506",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29838,
            "range": "± 4672",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 204654,
            "range": "± 25411",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52793823,
            "range": "± 2034769",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48822966,
            "range": "± 2276669",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52526301,
            "range": "± 2369521",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3638100,
            "range": "± 629430",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33176,
            "range": "± 3590",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46707,
            "range": "± 9150",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 158458,
            "range": "± 21613",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8330338,
            "range": "± 9597619",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8508075,
            "range": "± 10086179",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11374404,
            "range": "± 5368912",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 52417510,
            "range": "± 4936937",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 65099392,
            "range": "± 13579568",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5572615,
            "range": "± 1025177",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 51924,
            "range": "± 8141",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 106902,
            "range": "± 17180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/vorot93/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607994268462,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76285,
            "range": "± 1853",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7245216,
            "range": "± 421595",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31960,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 223224,
            "range": "± 4291",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52780532,
            "range": "± 1731947",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50928687,
            "range": "± 1702514",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53942482,
            "range": "± 1289667",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3992966,
            "range": "± 389144",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35941,
            "range": "± 1280",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53207,
            "range": "± 2544",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 174307,
            "range": "± 4579",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8600935,
            "range": "± 9263818",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9179842,
            "range": "± 9617433",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8795833,
            "range": "± 9733978",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58357049,
            "range": "± 4668620",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72922649,
            "range": "± 14445942",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6156896,
            "range": "± 594228",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60306,
            "range": "± 12376",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 117652,
            "range": "± 3104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/vorot93/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608068203665,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78216,
            "range": "± 7882",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8220427,
            "range": "± 1127753",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33218,
            "range": "± 3634",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 229206,
            "range": "± 95622",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52805676,
            "range": "± 1646550",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54473525,
            "range": "± 1307621",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55887873,
            "range": "± 1347896",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5047311,
            "range": "± 1283689",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37987,
            "range": "± 5236",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54304,
            "range": "± 9637",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 175832,
            "range": "± 9416",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9077057,
            "range": "± 9407373",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9445439,
            "range": "± 9839998",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8720055,
            "range": "± 9251822",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62302969,
            "range": "± 5736484",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 82799628,
            "range": "± 16724512",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7069924,
            "range": "± 1117762",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60762,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 122117,
            "range": "± 18530",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/vorot93/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608087824728,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68625,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6144606,
            "range": "± 441564",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29293,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 209181,
            "range": "± 4894",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51137395,
            "range": "± 1623691",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 46859136,
            "range": "± 2921819",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50768658,
            "range": "± 1895596",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3157384,
            "range": "± 251819",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32808,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47061,
            "range": "± 1216",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147982,
            "range": "± 1760",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7564313,
            "range": "± 4506992",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7604658,
            "range": "± 40964",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7329540,
            "range": "± 8917041",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50285966,
            "range": "± 3879016",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 62931098,
            "range": "± 12385243",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5306495,
            "range": "± 677443",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52424,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 101993,
            "range": "± 1870",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/vorot93/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608623496458,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 69447,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6961194,
            "range": "± 637579",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29791,
            "range": "± 996",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 211140,
            "range": "± 4768",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51220842,
            "range": "± 1606004",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54048271,
            "range": "± 2828501",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57552773,
            "range": "± 1827089",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3646038,
            "range": "± 351378",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33131,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46630,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 149564,
            "range": "± 1617",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7543106,
            "range": "± 8846905",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7757395,
            "range": "± 8793003",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7443350,
            "range": "± 8733070",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53657713,
            "range": "± 3808377",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 65381092,
            "range": "± 13602871",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5583700,
            "range": "± 798584",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52624,
            "range": "± 862",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103930,
            "range": "± 2388",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/vorot93/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608676003107,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 72643,
            "range": "± 1823",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6508038,
            "range": "± 252094",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31369,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 219277,
            "range": "± 5136",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52786524,
            "range": "± 1603117",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 46075954,
            "range": "± 2037917",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50899047,
            "range": "± 1919780",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3347083,
            "range": "± 204620",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35258,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 49897,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 165731,
            "range": "± 4840",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8240200,
            "range": "± 9491587",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8282237,
            "range": "± 223841",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8029480,
            "range": "± 9262222",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54232062,
            "range": "± 3676969",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 67473930,
            "range": "± 13338457",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5680137,
            "range": "± 688705",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 56476,
            "range": "± 1984",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 109551,
            "range": "± 2902",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/vorot93/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608755871245,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68363,
            "range": "± 888",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6973799,
            "range": "± 521790",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29317,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 211217,
            "range": "± 1554",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51967783,
            "range": "± 1617463",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51575882,
            "range": "± 1284842",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53417151,
            "range": "± 1072175",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3863178,
            "range": "± 518106",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33085,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 45422,
            "range": "± 1397",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 148143,
            "range": "± 5345",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7592957,
            "range": "± 4377377",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7688382,
            "range": "± 9004031",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7379409,
            "range": "± 8864189",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54484278,
            "range": "± 3863799",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69042405,
            "range": "± 11680233",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5892813,
            "range": "± 786603",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 51728,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 101150,
            "range": "± 2072",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/vorot93/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608776670472,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68347,
            "range": "± 911",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8024781,
            "range": "± 329380",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28648,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 207700,
            "range": "± 5492",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52005016,
            "range": "± 509964",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 53293540,
            "range": "± 1337228",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55016242,
            "range": "± 1307305",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4298482,
            "range": "± 580863",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32623,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 45968,
            "range": "± 969",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147528,
            "range": "± 1770",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7684989,
            "range": "± 8873111",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7731256,
            "range": "± 8899018",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7425719,
            "range": "± 8661457",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54475583,
            "range": "± 3382351",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 71440241,
            "range": "± 15184560",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6203936,
            "range": "± 866697",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 51827,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 101550,
            "range": "± 2358",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/vorot93/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609213215428,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 125343,
            "range": "± 23968",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7002125,
            "range": "± 1300085",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 42388,
            "range": "± 9837",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 273127,
            "range": "± 64574",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52814585,
            "range": "± 2417025",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 58369621,
            "range": "± 6081671",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 62476716,
            "range": "± 4876012",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3974651,
            "range": "± 1024180",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 51395,
            "range": "± 9533",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 91356,
            "range": "± 22441",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 222084,
            "range": "± 38627",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12091721,
            "range": "± 10167931",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12038350,
            "range": "± 9785896",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12018619,
            "range": "± 9824381",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 69864389,
            "range": "± 9715044",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 81928562,
            "range": "± 15877632",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7178219,
            "range": "± 2217260",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 103712,
            "range": "± 34938",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 187801,
            "range": "± 52694",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/vorot93/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609284847081,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 75682,
            "range": "± 2445",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7122594,
            "range": "± 552658",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32199,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 223067,
            "range": "± 19352",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52793978,
            "range": "± 1614913",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50244768,
            "range": "± 2102929",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52935250,
            "range": "± 1517126",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3967683,
            "range": "± 432354",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36858,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53560,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 175429,
            "range": "± 8206",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8598853,
            "range": "± 9348402",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8729032,
            "range": "± 9308251",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8432039,
            "range": "± 9331464",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 57879320,
            "range": "± 5272067",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74626606,
            "range": "± 12680385",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6350410,
            "range": "± 620461",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60625,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115895,
            "range": "± 8580",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/vorot93/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610148009268,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68710,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7543354,
            "range": "± 975172",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29495,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 213525,
            "range": "± 6162",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51606365,
            "range": "± 1633058",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52656683,
            "range": "± 1815687",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56740064,
            "range": "± 1860578",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3954290,
            "range": "± 558808",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 28485,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 41539,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 132708,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 6846733,
            "range": "± 8940240",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 6893043,
            "range": "± 42513",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 6652602,
            "range": "± 9172509",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 48804507,
            "range": "± 3836983",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66012671,
            "range": "± 13425735",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5409022,
            "range": "± 903737",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 47690,
            "range": "± 3920",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 90912,
            "range": "± 1716",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/vorot93/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610504444082,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76709,
            "range": "± 15525",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7559965,
            "range": "± 574784",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32617,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 230928,
            "range": "± 4951",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52778937,
            "range": "± 1655586",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54820035,
            "range": "± 1614584",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55637155,
            "range": "± 796661",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4630783,
            "range": "± 560089",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36936,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53600,
            "range": "± 1960",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 176166,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8734321,
            "range": "± 9188737",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8812953,
            "range": "± 9457111",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8514461,
            "range": "± 9294038",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59552935,
            "range": "± 4488352",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 81795912,
            "range": "± 13918708",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6846476,
            "range": "± 1082200",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 59965,
            "range": "± 1744",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115275,
            "range": "± 3328",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/vorot93/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610660819377,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 67410,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6433931,
            "range": "± 436132",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28759,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 209829,
            "range": "± 4622",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51188995,
            "range": "± 1637354",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50843662,
            "range": "± 2249180",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52644424,
            "range": "± 1443504",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3734896,
            "range": "± 479213",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32111,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46456,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 146931,
            "range": "± 3012",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7625981,
            "range": "± 8470883",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7681670,
            "range": "± 98482",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7427494,
            "range": "± 9327277",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 48824946,
            "range": "± 3609820",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68147831,
            "range": "± 14757013",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5569195,
            "range": "± 719975",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 51965,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 101538,
            "range": "± 1853",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/vorot93/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610668863176,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 63457,
            "range": "± 7524",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6166536,
            "range": "± 425990",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28048,
            "range": "± 4259",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 196006,
            "range": "± 30366",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52025862,
            "range": "± 2447343",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 46916793,
            "range": "± 2100355",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51056874,
            "range": "± 1845926",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3362897,
            "range": "± 439766",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 31547,
            "range": "± 4454",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 45369,
            "range": "± 6379",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147260,
            "range": "± 20966",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8453330,
            "range": "± 5639237",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7654685,
            "range": "± 1127690",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7966288,
            "range": "± 10079712",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 51468955,
            "range": "± 4828825",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 65660005,
            "range": "± 12994116",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5366870,
            "range": "± 1114830",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52691,
            "range": "± 9775",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 96519,
            "range": "± 16811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/vorot93/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610745517617,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68365,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6150404,
            "range": "± 649485",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29319,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 210590,
            "range": "± 5728",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51167231,
            "range": "± 1638474",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47846753,
            "range": "± 2642398",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52005783,
            "range": "± 2123023",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3296747,
            "range": "± 424877",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32444,
            "range": "± 821",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47292,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 149133,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7582725,
            "range": "± 8647117",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7656040,
            "range": "± 41127",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7376529,
            "range": "± 8864038",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 51578428,
            "range": "± 3749924",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 64274742,
            "range": "± 11944738",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5369446,
            "range": "± 577249",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52456,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102805,
            "range": "± 938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/vorot93/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610774408815,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68021,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6603886,
            "range": "± 771639",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29368,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 208460,
            "range": "± 5824",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51993300,
            "range": "± 865336",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50756694,
            "range": "± 2104936",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51895719,
            "range": "± 1379048",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3893437,
            "range": "± 460107",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32430,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46741,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 148716,
            "range": "± 2280",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7729700,
            "range": "± 8781982",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7834159,
            "range": "± 8829867",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7571245,
            "range": "± 8929803",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53136672,
            "range": "± 3618146",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69732484,
            "range": "± 12089535",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5774760,
            "range": "± 838282",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52220,
            "range": "± 957",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102355,
            "range": "± 1988",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/vorot93/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611078935778,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 99590,
            "range": "± 17461",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5508111,
            "range": "± 944928",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 38024,
            "range": "± 4622",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 222255,
            "range": "± 45314",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51986093,
            "range": "± 2041766",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 43857173,
            "range": "± 6473945",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51266749,
            "range": "± 4972240",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3036228,
            "range": "± 347377",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 45928,
            "range": "± 7581",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 64044,
            "range": "± 11162",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 166290,
            "range": "± 31108",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9058043,
            "range": "± 9163471",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9877655,
            "range": "± 9245877",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9138243,
            "range": "± 9477411",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 51494130,
            "range": "± 6767964",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 63880567,
            "range": "± 14440620",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5233837,
            "range": "± 1044784",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 72384,
            "range": "± 12224",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 137637,
            "range": "± 20994",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}