import { SinglyLinkedList } from './singly-linked-list';
class Hashtable {
  constructor() {
    this.data = new Array();
  }

  hashFunction(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i);
    }
    return hash;
  }

  set(key, value) {
    let location = this.hashFunction(key);
    if (!this.data[location]) {
      this.data[location] = [];
    }
    // const linkedList = new SinglyLinkedList();
    //this.data[location].push(linkedList.append([key, value]));

    this.data[location].push([key, value]);
    return this.data;
  }

  get(key) {
    let location = this.hashFunction(key);
    if (!this.data[location]) return null;
    return this.data[location].find((bucket) => bucket[0] === key)[1];
  }
}

const hashTable = new Hashtable();

hashTable.set('name', 'Camilla');
hashTable.set('surname', 'Podda');
hashTable.set('age', 22);
console.log(hashTable);

console.log(hashTable.get('age'));
