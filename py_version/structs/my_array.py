class MyArray:

    def __init__(self, size):
        self.size = size
        self.data = [None] * size

    def add(self, index, value):
        self.data[index] = value

    def get(self, index):
        return self.data[index]

    def push(self, value):
        self.data.append(value)
        self.size += 1

    def pop(self):
        self.data.pop()
        self.size -= 1

    def remove(self, index):
        self.data.pop(index)
        self.size -= 1


