window.BENCHMARK_DATA = {
  "lastUpdate": 1607994130229,
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
      }
    ]
  }
}