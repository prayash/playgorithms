/**
 * 206 - Reverse Linked List
 * @param {Node} head
 * @return {Node}
 */
function reverseList(head) {
  var newHead = null;

  while (head !== null) {
    var next = head.next;
    // console.log(next.val);
    head.next = newHead;
    newHead = head;
    head = next;
    console.log(newHead.val);
  }

  return newHead;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var listHead = new ListNode(25);
listHead.next = new ListNode(33);
listHead.next.next = new ListNode(98);
listHead.next.next.next = new ListNode(111);

// console.log(reverseList(listHead));
reverseList(listHead);
