/*Linked List Construction
Write a DoublyLinkedList class that has a
head and a tail , both of which point to
either a linked list Node or None / null .
The class should support:
- Setting the head and tail of the linked
list.
- Inserting nodes before and after other
nodes as well as at given positions (the
position of the head node is 1 ).
- Removing given nodes and removing
nodes with given values.
- Searching for nodes with given values.
Note that the setHead , setTail ,
insertBefore , insertAfter ,
insertAtPosition , and remove methods
all take in actual Node s as input parameters
—not integers (except for
insertAtPosition , which also takes in an
integer representing the position); this means
that you don't need to create any new Node s
in these methods. The input nodes can be
either stand-alone nodes or nodes that are
already in the linked list. If they're nodes that
are already in the linked list, the methods will
eectively be moving the nodes within the
linked list. You won't be told if the input nodes
are already in the linked list, so your code will
have to defensively handle this scenario.*/

//Solution 1:

// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.
          if (this.head == null){
              this.head = node;
              this.tail = node;
              return;
          }
          this.insertBefore(this.head, node);
    }
  
    setTail(node) {
      // Write your code here.
        if(this.tail == null){
              this.setHead(node);
          }
          this.insertAfter(this.tail, node);
      
      }
  
    insertBefore(node, nodeToInsert) {
      // Write your code here.
          if(nodeToInsert == this.head && nodeToInsert == this.tail){
              return;
          }	
          this.remove(nodeToInsert);
          //node.prev->nodeToInsert->node->node.next
          nodeToInsert.prev = node.prev;
          nodeToInsert.next = node;
          if(nodeToInsert.prev == null){
              this.head = nodeToInsert;
          }
          else{
              node.prev.next = nodeToInsert;			
          }
          node.prev = nodeToInsert;
    }
  
    insertAfter(node, nodeToInsert) {
      // Write your code here.
          if(nodeToInsert == this.head && nodeToInsert == this.tail){
              return;
          }
          this.remove(nodeToInsert);
          //node.prev ->node->nodeToInsert->node.next
          nodeToInsert.prev = node;
          nodeToInsert.next = node.next;
          if(node.next == null){
              this.tail = nodeToInsert;
          }
          else{
              node.next.prev = nodeToInsert;
          }
          node.next = nodeToInsert;
    }
  
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
          var currentPosition = 1;
          var currentNode = this.head;
          if(position == 1){
              this.setHead(nodeToInsert);
              return;
          }
          while(currentNode != null && currentPosition != position){
              currentNode = currentNode.next;
              currentPosition+=1;
          }
          if(currentNode == null){
              this.setTail(nodeToInsert);
          }
          else{
              this.insertBefore(currentNode, nodeToInsert);
          }
          
          
          
          
    }
  
    removeNodesWithValue(value) {
      // Write your code here.
          var currentNode = this.head;
          var nodeToRemove;
          while(currentNode != null){
              nodeToRemove = currentNode;
              currentNode = currentNode.next;
              if(nodeToRemove.value == value){
                  this.remove(nodeToRemove);
              }
          }
    }
  
    remove(node) {
      // Write your code here.
          if(node == this.head){
              this.head = this.head.next;
          }
          if(node == this.tail){
              this.tail = this.tail.prev;
          }
          this.removeNodeBindings(node);
          
    }
  
    containsNodeWithValue(value) {
      // Write your code here.
          var currentNode = this.head;
          while(currentNode != null && currentNode.value !=value){
              currentNode = currentNode.next;
          }
          if(currentNode == null){
              return false;
          }
          return true;
    }
  
  
      removeNodeBindings(node){
          //node.prev -> node -> node.next
          if (node.prev != null){
              node.prev.next = node.next;
          }
          if(node.next != null){
              node.next.prev = node.prev;
          }
          node.prev = null;
          node.next = null;
      }
  
  
  }
  
  
  // Do not edit the line below.
  exports.Node = Node;
  exports.DoublyLinkedList = DoublyLinkedList;
  