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


class QueueNode:
    def __init__(self, node: Node) -> None:
        self.node = node
        self.next: QueueNode | None = None


class Queue:
    """Queue implementation"""

    def __init__(self) -> None:
        self.head = None
        self.tail = None

    def add(self, bt_node: Node) -> None:
        if self.head == None and self.tail == None:
            self.head = QueueNode(bt_node)
            self.tail = self.head
        else:
            if self.tail != None:
                node = QueueNode(bt_node)
                self.tail.next = node
                self.tail = node

    def pop(self) -> Node | None:
        if self.head is None and self.tail is None:
            return None
        else:
            if self.head != None:
                node = self.head.node
                self.head = self.head.next
                return node


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
        queue = Queue()
        if self.head is None:
            return ""
        else:
            current = self.head
            while current:
                values.append(current.value)
                if current.left:
                    queue.add(current.left)
                if current.right:
                    queue.add(current.right)
                current = queue.pop()

            return " ".join([str(v) for v in values])
