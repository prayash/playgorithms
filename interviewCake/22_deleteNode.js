/**
 * 22 - Delete Node - O(n) time / O(1) space
 * @param {Node} n - node to from Linked List
 * @return
 */
function deleteNode(n) {
  console.log('\t -> deleteNode:', '\n...before:', a);
  var nextNode = n.next;

  if (nextNode) {
    n.value = nextNode.value;
    n.next = nextNode.next;
  } else {
    console.log('Cannot delete the last node!');
  }

  console.log('...after:', a);
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');

a.next = b;
b.next = c;

deleteNode(b);
