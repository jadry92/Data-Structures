import pytest
from py_version.structs.min_heap import MinHeap


def setup_function():
    global heap
    heap = MinHeap()


def test_insert_and_get_min():
    heap.insert_key(3)
    heap.insert_key(2)
    assert heap.get_min() == 2
    heap.insert_key(1)
    assert heap.get_min() == 1


def test_extract_min():
    heap.insert_key(3)
    heap.insert_key(2)
    heap.insert_key(1)
    assert heap.extract_min() == 1
    assert heap.get_min() == 2


def test_decrease_key():
    heap.insert_key(3)
    heap.insert_key(2)
    heap.decrease_key(1, 1)
    assert heap.get_min() == 1
