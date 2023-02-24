class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // O(n)
  add(v) {
    if (!this.value) {
      this.value = v;
      return;
    }
    if (v > this.value) {
      if (!this.right) {
        this.right = new BST(v);
      } else {
        this.right.add(v);
      }
    } else {
      if (!this.left) {
        this.left = new BST(v);
      } else {
        this.left.add(v);
      }
    }
  }

  // O(n)
  search(v) {
    if (v > this.value) {
      return this.right ? this.right.search(v) : null;
    }
    if (v < this.value) {
      return this.left ? this.left.search(v) : null;
    }
    return this.value;
  }
}

const bst = new BST();

const ns = [8, 10, 14, 3, 13, 1, 6, 7, 4];

ns.forEach((n) => bst.add(n));

console.log(bst);

console.log(bst.search(22)); // null
console.log(bst.search(6)); // 7
