class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  append(value) {
    const node = new Node(value);

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.tail = this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  // O(n)
  removeLast() {
    if (!this.tail) {
      return;
    }

    let node = this.head;

    while (node.next.next) {
      node = node.next;
    }

    node.next = null;
    this.tail = node;
  }

  // O(1)
  removeFirst() {
    if (!this.head) {
      return;
    }

    const nextNode = this.head.next;
    this.head.next = null;
    this.head = nextNode;
  }

  remove(value) {
    if (!this.head) {
      return;
    }
    let node = this.head;
    console.log(node);
    while (node.next.data === value) {
      node.next = node.next.next;
    }
  }

  find(value) {}
  /*  toJSON() {
    return 'aaa';
  } */
}
const linkedList = new SinglyLinkedList();

linkedList.append(100);
linkedList.append(80);
linkedList.append(77);
linkedList.append(33);
linkedList.prepend(11);
linkedList.prepend(9);

// 9, 11, 100, 80, 77, 33

linkedList.removeLast();
// 9, 11, 100, 80, 77

linkedList.removeFirst();
// 11, 100, 80, 77

linkedList.remove(80);
console.log(linkedList);
// 11, 100, 77
const result = linkedList.find(100);
