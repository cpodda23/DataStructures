import { DoublyLinkedList } from './doubly-linked-list';

class Queue {
  constructor() {
    this.data = new DoublyLinkedList();
  }
  // O(1)
  peek() {
    return this.data.head.data;
  }

  // O(1)
  push(value) {
    this.data.append(value);
  }

  // O(1)
  pop() {
    this.data.removeFirst();
  }
}

const queue = new Queue();

queue.push('AAA');
queue.push('BBB');
queue.push('CCC');
console.log(queue.peek()); //AAA

queue.pop();
queue.pop();
console.log(queue.peek()); //CCC
