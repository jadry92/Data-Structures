from py_version.structs.link_list import LinkList

def test_append():
    link_list = LinkList()
    link_list.append(1)
    link_list.append(2)
    link_list.append(3)
    assert link_list.size == 3
    assert link_list.head.value == 1
    assert link_list.tail.value == 3

def test_prepend():
    link_list = LinkList()
    link_list.prepend(1)
    link_list.prepend(2)
    link_list.prepend(3)
    assert link_list.size == 3
    assert link_list.head.value == 3
    assert link_list.tail.value == 1

def test_remove():
    link_list = LinkList()
    link_list.append(1)
    link_list.append(2)
    link_list.append(3)
    link_list.remove(2)
    assert link_list.size == 2
    assert link_list.head.value == 1
    assert link_list.tail.value == 2
    
def test_remove_head():
    link_list = LinkList()
    link_list.append(1)
    link_list.append(2)
    link_list.append(3)
    link_list.remove(0)
    assert link_list.size == 2
    assert link_list.head.value == 2
    assert link_list.tail.value == 3 

    assert link_list.remove(55) == None

def test_remove_value():
    link_list = LinkList()
    link_list.append(1)
    link_list.append(2)
    link_list.append(3)
    
    link_list.remove_value(2)
    assert link_list.size == 2
    assert link_list.head.value == 1
    assert link_list.tail.value == 3

    assert link_list.remove_value(0) == None


def test_insert():
    link_list = LinkList()
    link_list.append(1)
    link_list.append(2)
    link_list.append(3)
    link_list.insert(1, 4)
    assert link_list.size == 4
    assert link_list.head.value == 1
    assert link_list.tail.value == 3
    assert link_list.head.next.value == 4

def test_print_link_list():
    link_list = LinkList()
    link_list.append(1)
    link_list.append(2)
    link_list.append(3)
    link_list.print_link_list()
    assert "1 -> 2 -> 3 -> " == link_list.str_values 

def test_get_index():
    link_list = LinkList()
    link_list.append(1)
    link_list.append(2)
    link_list.append(3)
    assert link_list.get_index(1) == 0
    assert link_list.get_index(2) == 1
    assert link_list.get_index(3) == 2

def test_get_node():
    link_list = LinkList()
    link_list.append(1)
    link_list.append(2)
    link_list.append(3)
    assert link_list.get_node(0).value == 1
    assert link_list.get_node(1).value == 2
    assert link_list.get_node(2).value == 3
