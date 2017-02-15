/**
 * 206 - Reverse Linked List
 * @param {Node} head
 * @return {Node}
 */
function hasCycle(head) {
  var slow = head;
  var fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
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
// listHead.next.next.next.next = listHead.next;

console.log("\t linkedListCycle:", hasCycle(listHead));
