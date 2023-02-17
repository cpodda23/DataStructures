class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
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
    node.prev = this.tail;
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
    this.head.prev = node;
    this.head = node;
  }

  // O(1)
  removeLast() {
    if (!this.tail) {
      return;
    }

    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  }

  // O(1)
  removeFirst() {
    if (!this.head) {
      return;
    }

    const nextNode = this.head.next;
    this.head.next = null;
    this.head = nextNode;
    nextNode.prev = null;
  }
  // {} <-> {} <-> {}
  // O(n)
  remove(value) {
    if (!this.head) {
      return;
    }

    let node = this.head;

    if (node === null) return;

    while (node.data !== value) {
      node = node.next;
    }

    if (node.next === null) {
      return this.removeLast();
    }

    if (node.prev === null) {
      return this.removeFirst();
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  // O(n)
  find(value) {
    if (!this.head) {
      return;
    }
    let node = this.head;

    while (node && node.data !== value) {
      node = node.next;
    }

    return node?.data;
  }
  /*  toJSON() {
    return 'aaa';
  } */
}

const linkedList = new DoublyLinkedList();

linkedList.append(100);
linkedList.append(80);
linkedList.append(77);
linkedList.append(80);
linkedList.append(33);
linkedList.prepend(11);
linkedList.prepend(9);

// 9, 11, 100, 80, 77, 80,  33

linkedList.removeLast();
// 9, 11, 100, 80, 77, 80

linkedList.removeFirst();
// 11, 100, 80, 77, 80

linkedList.remove(80);
// 11, 100, 77, 80
console.log(linkedList);

const result = linkedList.find(100);
console.log(result);
