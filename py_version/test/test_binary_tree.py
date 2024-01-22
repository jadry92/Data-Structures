""" Test for the binary tree class """

import pytest
from py_version.structs.binary_tree import BinaryTree


@pytest.fixture
def tree():
    """Return a binary tree"""
    tree = BinaryTree()
    tree.add(5)
    tree.add(3)
    tree.add(7)
    tree.add(2)
    tree.add(4)
    tree.add(6)
    tree.add(8)
    return tree


def test_add(tree):
    """Test the add method"""
    assert tree.head.value == 5
    assert tree.head.left.value == 3
    assert tree.head.right.value == 7
    assert tree.head.left.left.value == 2
    assert tree.head.left.right.value == 4
    assert tree.head.right.left.value == 6
    assert tree.head.right.right.value == 8


def test_dfs(tree):
    """Test the dfs method"""
    assert tree.dfs() == "5 3 2 4 7 6 8"


def test_bfs(tree):
    """Test the bfs method"""
    assert tree.bfs() == "5 3 7 2 4 6 8"
