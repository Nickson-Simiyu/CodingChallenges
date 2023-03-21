/*Given a linked list, delete the middle node. If the list is even length,
* delete the node at the start of the second half of the list.
/*You may assume the node class is:*/
class LLNode {
  constructor(value, next = null) {
     this.value = value;
     this.next = next;
   }
 }
function deleteMiddleNode(head) {
/* your code here */
  let slow = head;
  let fast = head;
  
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (prev === null) {
// the list has only one node
    return null;
  }

// delete the middle node
  prev.next = slow.next;

  return head;
}
