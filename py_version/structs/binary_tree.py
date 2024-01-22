class Node:
    """This each node of the tree
    value: Int positive number
    """

    def __init__(self, value) -> None:
        self.value = value
        self.right: Node | None = None
        self.left: Node | None = None

    def add_node(self, node) -> None:
        if node.value > self.value:
            if self.right is None:
                self.right = node
            else:
                self.right.add_node(node)
        else:
            if self.left is None:
                self.left = node
            else:
                self.left.add_node(node)


class BinaryTree:
    def __init__(self) -> None:
        self.head = None

    def add(self, value: int) -> None:
        node = Node(value)
        if self.head is None:
            self.head = node
        else:
            self.head.add_node(node)

    def dfs(self) -> str:
        """Depth-first search"""
        values = []
        if self.head is None:
            return ""
        else:
            self._walk_dsf(self.head, values)
            return " ".join([str(v) for v in values])

    def _walk_dsf(self, node: Node | None, values: list) -> None:
        if node is None:
            return
        else:
            values.append(node.value)
            self._walk_dsf(node.left, values)
            self._walk_dsf(node.right, values)

    def bfs(self) -> str:
        """Breadth-first search"""
        values = []
        if self.head is None:
            return ""
        else:
            self._walk_bsf(self.head, values)
            return " ".join([str(v) for v in values])
