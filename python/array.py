class Array:

    def __init__(self) -> None:
        self.pointer = {}
        self.length = 0

    def append(self, value) -> 'Array':
        self.pointer.append(value)
        return self

    def get(self, index) -> int | None:
        try:
            return self.pointer[index]
        except:
            return None

    def set(self, index, value) -> 'Array':
        self.pointer[index] = value
        return self
