/**
 * 10 - Second Largest Item in Binary Search Tree - O(h) time / O(1) space
 * @param {Node} node - root node to begin traversal
 * @return {Int} - second largest value
 *        ( 5 )
         /     \
       (3)     (8)
      /  \     /  \
    (1)  (4) (7)  (15)
                  /
                (10)
                /  \
              (9)  (11)
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

// Tree construction
var rootNode = new BSTNode(5); rootNode.insertLeft(3); rootNode.insertRight(8);
rootNode.left.insertLeft(1); rootNode.left.insertRight(4);
rootNode.right.insertLeft(7); rootNode.right.insertRight(15);
var node10 = new BSTNode(10); node10.insertLeft(9); node10.insertRight(12);
rootNode.right.right.left = node10;

function findLargest(node) {
  var current = node;

  // If there is no right, then we're at the max, otherwise continue down the tree
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function findSecondLargest(node) {
  var current = node;

  while (current) {

    // If there's a left subtree but not right, find the largest of the left
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    // We are at second largest if we're at the parent of a node which doesn't have any children!
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}

console.log("\t -> findSecondLargest:", findLargest(rootNode));
console.log("\t -> findSecondLargest:", findSecondLargest(rootNode));
