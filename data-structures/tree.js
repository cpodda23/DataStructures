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

  // Depth first traversal
  dft(visitor) {
    visitor(this.value);

    if (this.children.length === 0) return;

    this.children.forEach((node) => node.dft(visitor));
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

root.dft((node) => console.log(node));

console.log(root);
