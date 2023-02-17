import { SinglyLinkedList } from './singly-linked-list';

class Queue {
  constructor() {
    this.data = new SinglyLinkedList();
  }
  // O(1)
  peek() {
    return this.data.head.data;
  }

  // O(1)
  enqueue(value) {
    this.data.append(value);
  }

  // O(1)
  dequeue() {
    return this.data.removeFirst();
  }
}

const queue = new Queue();

queue.enqueue('AAA');
queue.enqueue('BBB');
queue.enqueue('CCC');
console.log(queue.peek()); //AAA

queue.dequeue();
console.log(queue.dequeue());
// console.log(queue.peek()); //CCC
