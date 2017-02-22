/**
 * 23 - Does This Linked List Have A Cycle?
 * @param {Node} head - head of Linked List
 * @return {Boolean}
 */
function hasCycle(head) {
  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      console.log('\t -> hasCycle:', true);
      return true;
    }
  }

  console.log('\t -> hasCycle:', false);
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

hasCycle(listHead);
