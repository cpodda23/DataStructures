import { SinglyLinkedList } from './singly-linked-list';

class Hashtable {
  constructor() {
    this.buckets = [];
    this.bucketSize = 10;
    this.size = 0;
  }

  hashFunction(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % this.bucketSize;
  }

  // O(1)
  set(key, value) {
    const idx = this.hashFunction(key);
    if (!this.buckets[idx]) {
      this.buckets[idx] = new SinglyLinkedList();
    }

    this.buckets[idx].append([key, value]);
    this.size += 1;
  }

  // O(n / k)
  get(key) {
    const idx = this.hashFunction(key);
    if (!this.buckets[idx]) return null;
    return this.buckets[idx].find((d) => d.at(0) === key)?.at(1);
  }

  // O(n / k)
  delete(key) {
    const idx = this.hashFunction(key);
    if (!this.buckets[idx]) return null;
    this.buckets[idx].remove((d) => d.at(0) === key);
    this.size -= 1;
  }
}

const hashTable = new Hashtable();

hashTable.set('name', 'Camilla');
hashTable.set('surname', 'Podda');
hashTable.set('city', 'Cagliari');
hashTable.set('abc', '123');
hashTable.set('def', '456');
hashTable.set('age', 22);

console.log(hashTable.size); // 5

console.log(hashTable.get('abc'));
console.log(hashTable);
