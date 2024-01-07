"""
Link List implementation in python
"""

class Node():
    """ This each node of the tree
        value: Int positive number
    """

    def __init__(self, value):
        self.value = value 
        self.next: None | Node = None


class LinkList():

    def __init__(self):
        self.head: None | Node = None
        self.tail: None | Node = None
        self.size = 0

    def append(self, value):
        node = Node(value)

        if self.head == None and self.tail == None:
            self.head = node
            self.tail = node
            self.size += 1
            return
        
        self.tail.next = node
        self.tail = node
        self.size += 1

    def prepend(self, value):
        node = Node(value)
        if self.head == None:
            self.head = node
            self.tail = node
            self.size += 1
            return

        node.next = self.head
        self.head = node
        self.size += 1

    def get_node(self, index):
        count = 0
        node = self.head
        while(index != count):
            if node == None:
                return None
            node = node.next
            count += 1
        return node

    def get_index(self, value: int) -> int | None:
        if self.head == None:
            return None
        node = self.head
        for index in range(0, self.size):
            if node.value == value:
                return index
            else:
                node = node.next
        return None

    def insert(self, index: int, value: int) -> None:
        if (index >= self.size):
            self.append(value)
        node = Node(value)
        nodeIndex = self.get_node(index-1)
        oldNode = nodeIndex.next
        nodeIndex.next = node
        node.next = oldNode

        self.size += 1

    def remove(self, index) -> None:
        if self.head == None:
            print("There is no elements to remove")
            return

        if index == 0:
            self.head = self.head.next
            self.size -= 1
            return

        if index == self.size-1:
            self.tail = self.get_node(index-1)
            self.size -= 1
            return

        beforeNode = self.get_node(index-1)
        afterNode = self.get_node(index+1)
        if beforeNode == None or afterNode == None:
            return None

        self.size -= 1
        beforeNode.next = afterNode

    def remove_value(self, value):
        index = self.get_index(value)
        if index != None:
            self.remove(index)
        else: 
            print("Value not found")

    def print_link_list(self):
        node = self.head
        self.str_values = ""
        while(node != None):
            self.str_values += str(node.value) + " -> "
            node = node.next
        print(self.str_values)
