/**
 * 10 - Second Largest Item in Binary Search Tree - O(h) time / O(1) space
 * @param {Node} node - root node to begin traversal
 * @return {Int} - second largest value
*/
function findLargest(node) {
  var current = node;

  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function findSecondLargest(node) {
  var current = node;

  while (current) {
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}
