class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(v) {}

  search(v) {}
}

const bst = new BST();

const ns = [8, 10, 14, 3, 13, 1, 6, 7, 4];

ns.forEach((n) => bst.add(n));

console.log(bst);

console.log(bst.search(22)); // null
console.log(bst.search(7)); // 7
