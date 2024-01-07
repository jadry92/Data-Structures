
from py_version.structs.my_array import MyArray

def test_my_array():
    arr = MyArray(3)
    assert arr.size == 3
    assert arr.data == [None, None, None]

    arr.add(0, 1)
    arr.add(1, 2)
    arr.add(2, 3)
    assert arr.data == [1, 2, 3]
    assert arr.get(0) == 1
    assert arr.get(1) == 2
    assert arr.get(2) == 3
    arr.push(4)
    assert arr.data == [1, 2, 3, 4]
    assert arr.size == 4
    arr.pop()
    assert arr.data == [1, 2, 3]
    assert arr.size == 3
    arr.remove(1)
    assert arr.data == [1, 3]
    assert arr.size == 2
