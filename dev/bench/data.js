window.BENCHMARK_DATA = {
  "lastUpdate": 1605653888729,
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
      }
    ]
  }
}