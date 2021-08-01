window.BENCHMARK_DATA = {
  "lastUpdate": 1627801693126,
  "repoUrl": "https://github.com/birkenfeld/pyo3",
  "entries": {
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "distinct": true,
          "id": "aa48e5be7aae23bbe11486ccbeeb4681a330521a",
          "message": "some more docstring proofreading",
          "timestamp": "2021-08-01T09:05:30+02:00",
          "tree_id": "87be2b1d8bb47e5c0ac9b3ce847fb3bb126a3e7a",
          "url": "https://github.com/birkenfeld/pyo3/commit/aa48e5be7aae23bbe11486ccbeeb4681a330521a"
        },
        "date": 1627801688142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8748715.578731054,
            "unit": "iter/sec",
            "range": "stddev: 3.7165585018419875e-9",
            "extra": "mean: 114.30249286313754 nsec\nrounds: 78119"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8987617.398327107,
            "unit": "iter/sec",
            "range": "stddev: 3.997485537716283e-9",
            "extra": "mean: 111.2641933541724 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3635832.3127403143,
            "unit": "iter/sec",
            "range": "stddev: 1.7847895114961444e-8",
            "extra": "mean: 275.0401872217938 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2238837.225319527,
            "unit": "iter/sec",
            "range": "stddev: 2.5191204513353413e-8",
            "extra": "mean: 446.6604309996285 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3271282.4706162885,
            "unit": "iter/sec",
            "range": "stddev: 1.641459591177256e-8",
            "extra": "mean: 305.6905079228216 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2051408.3063765562,
            "unit": "iter/sec",
            "range": "stddev: 2.820094405351336e-8",
            "extra": "mean: 487.46999653384916 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1937544.4674857608,
            "unit": "iter/sec",
            "range": "stddev: 2.4823820870343383e-8",
            "extra": "mean: 516.1171868729632 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1715344.3584499646,
            "unit": "iter/sec",
            "range": "stddev: 2.0466384935725426e-8",
            "extra": "mean: 582.9733225715711 nsec\nrounds: 83327"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1953652.2547981413,
            "unit": "iter/sec",
            "range": "stddev: 2.0537233875626085e-8",
            "extra": "mean: 511.8618206205262 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1691517.712373379,
            "unit": "iter/sec",
            "range": "stddev: 3.2798959044185307e-8",
            "extra": "mean: 591.1850598345594 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1875556.3929019445,
            "unit": "iter/sec",
            "range": "stddev: 9.000739059799919e-8",
            "extra": "mean: 533.175117412895 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5092510.255398235,
            "unit": "iter/sec",
            "range": "stddev: 5.092116055285372e-9",
            "extra": "mean: 196.366811228388 nsec\nrounds: 48307"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 3981878.919019866,
            "unit": "iter/sec",
            "range": "stddev: 1.3799893071083429e-8",
            "extra": "mean: 251.13772174866966 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8252371.90347911,
            "unit": "iter/sec",
            "range": "stddev: 6.273534103238877e-9",
            "extra": "mean: 121.17728232517403 nsec\nrounds: 72459"
          }
        ]
      }
    ]
  }
}