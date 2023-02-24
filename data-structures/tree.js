class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(value) {
    const subTree = new Tree(value);
    this.children.push(subTree);
    return subTree;
  }

  // Depth first traversal - pre-order
  dft(visitor) {
    visitor(this.value);

    if (this.children.length === 0) return;

    this.children.forEach((node) => node.dft(visitor));
  }

  // Depth first traversal - post-order
  dft(visitor) {
    if (this.children.length === 0) return visitor(this.value);

    this.children.forEach((node) => node.dft(visitor));
    visitor(this.value);
  }

  // Breadth first traversal
  bft(visitor) {
    const queue = [this];

    while (true) {
      const node = queue.shift();
      if (!node) return;
      visitor(node.value);
      if (node.children.length > 0) {
        node.children.forEach((n) => queue.push(n));
      }
    }
  }
}

const root = new Tree(2);

const seven = root.add(7);
root.add(5).add(9).add(4);
seven.add(2);
seven.add(10);
const six = seven.add(6);
six.add(5);
six.add(11);

root.bft((node) => console.log(node));

console.log(root);
