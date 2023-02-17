import { SinglyLinkedList } from './singly-linked-list';

class Stack {
  constructor() {
    this.data = new SinglyLinkedList();
  }

  // O(1)
  peek() {
    return this.data.head.data;
  }

  // O(1)
  push(value) {
    this.data.prepend(value);
  }

  // O(1)
  pop() {
    this.data.removeFirst();
  }
}

const stack = new Stack();

stack.push('AAA');
stack.push('BBB');
stack.push('CCC');
console.log(stack.peek()); // CCC

stack.pop();
stack.pop();
console.log(stack.peek()); // AAA
