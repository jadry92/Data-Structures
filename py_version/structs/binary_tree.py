
from typing_extensions import Self


class Node():
    """ This each node of the tree
        value: Int positive number
    """

    def __init__(self, value) -> None:
        self.value = value
        self.right: Node | None = None
        self.left: Node | None = None


class BinaryTree():
    """
    """

    def __init__(self, node: Node) -> None:
        self.head = node

    def add(self, node: Node) -> None:

        if self.head.value > node.value:
            self.head.right = node
        else:
            self.head.left = node
