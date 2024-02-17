export class LinkedListDrawer {
  constructor(p5, x=20, y=50) {
    this.p5 = p5;
    this.list = new LinkedList();
    this.x = x;
    this.y = y;
    this.mov_value = null;
    this.mov_count = 0;
  }

  generate_random(n) {
    const size = n < 6 ? 6 : n;
    for (let i = 0; i < size; i++) {
      this.list.add(Math.floor(this.p5.random(0, 10)));
    }
  }

  drawing(action_drawing) {
    if (action_drawing === 'none') {
      return this.draw_linked_list(this.x,this.y,this.list)
    }
    return false;
  }

  draw_linked_list(x, y, list) {
    let current = list.head;
    let i = 0;
    while (current) {
      if (i > 0) {
        this.draw_line_arror(x + (i * 50) - 15, y);
      }
      this.p5.fill(255);
      this.p5.stroke(0);
      this.p5.circle(x + i * 50 , y, 30);
      this.p5.fill(0);
      this.p5.textSize(20);
      this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
      this.p5.text(current.data, x + i * 50, y);
      current = current.next;
      i++;
    }
    return true;
  }


  draw_line_arror(x, y){
    const x2 = x - 10;
    const y2 = y + 7;
    const x3 = x - 10;
    const y3 = y - 7;
    this.p5.stroke(0);
    this.p5.line(x, y, x-20, y);
    this.p5.stroke(0);
    this.p5.triangle(x,y,x2,y2,x3,y3);
  }
  
}


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    } else if (idx === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i < idx) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
    }
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let current = this.head;
    let i = 0;
    while (i < idx) {
      current = current.next;
      i++;
    }
    return current;
  }
}
