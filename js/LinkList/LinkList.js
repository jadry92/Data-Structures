class Node {
  constructor(value) {
    this.value = value
    this.next = undefined
    this.before = undefined
  }
}

class LinkList {
  constructor (value) {
    this.head = new Node(value)
    this.tail = this.head
  }
  
  add(value) {
    const node = new Node(value)
    this.tail.next = node
    this.tail = node
  }

  toString(){
    let node = this.head
    let sValue = ""
    while(node) {
      if (node.value){
        sValue += `${node.value} -> `
      }
      node = node.next
    }
    return sValue
  }
}

class DoubleLinkList {

}

module.exports = { LinkList , DoubleLinkList}