initSidebarItems({"trait":[["PyLayout","`T: PyLayout<U>` represents that `T` is a concrete representation of `U` in the Python heap. E.g., `PyCell` is a concrete representaion of all `pyclass`es, and `ffi::PyObject` is of `PyAny`."],["PySizedLayout","`T: PySizedLayout<U>` represents that `T` is not a instance of `PyVarObject`. In addition, that `T` is a concrete representaion of `U`."],["PyTypeInfo","Python type information. All Python native types (e.g., `PyDict`) and `#[pyclass]` structs implement this trait."],["PyTypeObject","Python object types that have a corresponding type object."]]});