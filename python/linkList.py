import unittest


class Node():
    """ This each node of the tree
        value: Int positive number
    """

    def __init__(self, value: int) -> None:
        self.value = value
        self.next: Node | None = None
        self.before: Node | None = None


class LinkList():

    def __init__(self, value: int) -> None:
        node = Node(value)
        self.head: Node = node
        self.tail: Node = self.head
        self.length = 1

    def append(self, value) -> None:
        node = Node(value)
        self.tail.next = node
        self.tail = node
        self.length += 1

    def prepend(self, value) -> None:
        node = Node(value)
        node.next = self.head
        self.head = node
        self.length += 1

    def getNode(self, index) -> Node | None:
        count = 0
        node = self.head
        while(index != count):
            node = node.next
            count += 1
        return node

    def getIndex(self, value: int) -> int | None:
        node = self.head
        for index in range(0, self.length):
            if node.value == value:
                return index
            else:
                node = node.next
        return None

    def insert(self, index: int, value: int) -> None:
        if (index >= self.length):
            self.append(value)
        node = Node(value)
        nodeIndex = self.getNode(index-1)
        oldNode = nodeIndex.next
        nodeIndex.next = node
        node.next = oldNode

        self.length += 1

    def remove(self, index) -> None:
        beforeNode = self.getNode(index-1)
        afterNode = self.getNode(index+1)
        beforeNode.next = afterNode

    def removeValue(self, value):
        index = self.getIndex(value)
        self.remove(index)


class DoubleLinkList():
    pass


class TestLinkList(unittest.TestCase):

    aLinkList = LinkList(0)

    def testAppend(self):
        pass

    def testPrepend(self):
        pass

    def testInsert(self):
        pass


if __name__ == "__main__":
    unittest.main()
