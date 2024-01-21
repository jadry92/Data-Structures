""" Doble Link List """

class Node():
    """ This each node of the tree
        value: Int positive number
    """

    def __init__(self, value):
        self.value = value 
        self.next: None | Node = None
        self.before: None | Node = None


class DobleLinkList():

    def __init__(self):
        self.head: None | Node = None
        self.tail: None | Node = None
        self.size = 0

    def __len__(self):
        return self.size

    def __str__(self):
        str_val = ""
        current_node = self.head
        
        if not current_node:
            return str_val
        
        while current_node:
            str_val += f"{current_node.value} -> "
            current_node = current_node.next

        return str_val

    def append(self, value):
        node = Node(value)

        if self.head == None or self.tail == None:
            self.head = node
            self.tail = node
            self.size += 1
            return
        
        self.tail.next = node
        node.before = self.tail
        self.tail = node
        self.size += 1

    def prepend(self, value):
        node = Node(value)

        if self.head == None or self.tail == None:
            self.head = node
            self.tail = node
            self.size += 1
            return

        node.next = self.head
        self.head.before = node
        self.head = node
        self.size += 1

    def get_node(self, index):

        if index >= self.size:
            return None

        if self.head == None or self.tail == None:
            return None

        if index == 0:
            return self.head

        if index == self.size-1:
            return self.tail      

        count = 0
        node = self.head
        while(index != count):
            if node == None:
                return None
            node = node.next
            count += 1
        return node

    def get_index(self, value: int) -> int | None:

        if self.head == None or self.tail == None:
            return None


        node = self.head
        index = 0
        while(node != None):
            if node.value == value:
                return index
            else:
                node = node.next
                index += 1
        return None

    def insert(self, index: int, value: int) -> None:
        if self.head == None or self.tail == None:
            self.append(value)
            return
        
        if index <= 0:
            self.prepend(value)
            return
        
        if index >= self.size:
            self.append(value)
            return
        
        new_node = Node(value)
        node_before = self.get_node(index-1)
        node_after = self.get_node(index)

        if node_before == None or node_after == None:
            return None
        
        new_node.next = node_after
        new_node.before = node_before
        node_before.next = new_node
        node_after.before = new_node
 
        self.size += 1

    def remove(self, index) -> None:
        if self.head == None or self.tail == None:
            print("There is no elements to remove")
            return

        if index == 0:
            self.head = self.head.next
            self.head.before = None
            self.size -= 1
            return

        if index == self.size-1:
            self.tail = self.get_node(index-1)
            self.tail.next = None
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

