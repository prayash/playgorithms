/**
 * 8 - Balanced Binary Tree
 * @param {Node} node - root node to begin traversal
 * @return {Int} - second largest value
*/
class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BSTNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BSTNode(value);
    return this.right;
  }
}
