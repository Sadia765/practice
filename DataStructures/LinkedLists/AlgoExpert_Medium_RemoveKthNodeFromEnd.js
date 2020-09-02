/*Remove Kth Node From End
Write a function that takes in the head of a
Singly Linked List and an integer k and
removes the kth node from the end of the list.
The removal should be done in place, meaning
that the original data structure should be
mutated (no new structure should be created).
Furthermore, the input head of the linked list
should remain the head of the linked list after
the removal is done, even if the head is the
node that's supposed to be removed. In other
words, if the head is the node that's supposed
to be removed, your function should simply
mutate its value and next pointer.
Note that your function doesn't need to return
anything.
You can assume that the input Linked List will
always have at least two nodes and, more
specically, at least k nodes.
Each LinkedList node has an integer
value as well as a next node pointing to
the next node in the list or to None / null
if it's the tail of the list.*/

//Solution 1:

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    //make two pointers
    var pointer1 = head;
    var pointer2 = head;
    //make them k units apart
    var position = 1;
    while (position <= k) {
        pointer2 = pointer2.next;
        position += 1;
    }
    //if second pointer is already at null, the node to remove is first one
    //null-> head->head.next
    if (pointer2 == null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }
    //otherwise, move through linked list until next pointer is null for second pointer.
    while (pointer2.next != null) {
        pointer2 = pointer2.next;
        pointer1 = pointer1.next;
    }
    //now remove the first.next node
    //pointer1->pointer1.next (toRemove) ->pointer1.next.next	
    pointer1.next = pointer1.next.next;

}

// Do not edit the line below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;

//Solution 2:

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    // Write your code here.
      var currentNode = head;
      var currentPosition = 1;
      var desiredPosition;
      while(currentNode!=null){
          currentNode = currentNode.next;
          currentPosition+=1
      }
      desiredPosition = currentPosition-k+1;
      if(desiredPosition == 1){
      //edge case: remove head
      //null->head->head.next
          head = head.next;
          return;
      }
      currentPosition = 1;
      currentNode = head;
      //find the node, previous to which you need to remove, if not the head.
      while(currentPosition+1<desiredPosition){
          currentNode = currentNode.next;
          currentPosition+=1;
      }
      //If middle: currentNode->currentNode.next (to delete)->currentNode.next.next
      //If at end: currentNode->currentNode.next (to delete)->null
      if(currentNode.next.next == null){
          currentNode.next = null;
      }
      else{
          currentNode.next = currentNode.next.next;
      }
  }
  
  // Do not edit the line below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  
