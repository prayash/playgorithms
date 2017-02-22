/**
 * 24 - Reverse Linked List - O(n) time / O(1) space
 * @param {Node} head - head of from Linked List
 * @return {LinkedList} - reversed LinkedList
 */
function reverseLinkedList(head) {
  var current = head;
  var prev = null;
  var next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  console.log('\t -> reverseLinkedList:', prev);
  return prev;
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

reverseLinkedList(a);
