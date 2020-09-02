/*Min Height BST
Write a function that takes in a non-empty
sorted array of distinct integers, constructs a
BST from the integers, and returns the root of
the BST.
The function should minimize the height of the
BST.
You've been provided with a BST class that
you'll have to use to construct the BST.
Each BST node has an integer value , a
left child node, and a right child node. A
node is said to be a valid BST node if and
only if it satises the BST property: its value
is strictly greater than the values of every node
to its left; its value is less than or equal to
the values of every node to its right; and its
children nodes are either valid BST nodes
themselves or None / null .
A BST is valid if and only if all of its nodes are
valid BST nodes.
Note that the BST class already has an
insert method which you can use if you
want.
*/

//Solution 1:

function minHeightBst(array) {
    // Write your code here.
      return makeMinHeightBst(array, null, 0, array.length-1);
  }
  
  function makeMinHeightBst(array, bst, left, right){
      if(right<left){
          return;
      }
      var middle = Math.floor((left+right)/2);
      if(bst === null){
          bst = new BST(array[middle]);
      }
      else{
          bst.insert(array[middle]);
      }	
      makeMinHeightBst(array, bst, left, middle-1);
      makeMinHeightBst(array, bst, middle+1, right);
      return bst;
  }
  
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;
  
//Solution 2:

function minHeightBst(array) {
    // Write your code here.
      return makeMinHeightBst(array, null, 0, array.length-1);
  }
  
  function makeMinHeightBst(array, bst, left, right){
      if(right<left){
          return;
      }
      var middle = Math.floor((left+right)/2);
      var newNode = new BST(array[middle]);
      if(bst === null){
          bst = newNode;
      }
      else{
          if(array[middle]<bst.value){
              bst.left = newNode;
              bst = newNode;
          }
          else{
              bst.right = newNode;
              bst = newNode;
          }
      }	
      makeMinHeightBst(array, bst, left, middle-1);
      makeMinHeightBst(array, bst, middle+1, right);
      return bst;
  }
  
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;
  
//Solution 3:

function minHeightBst(array) {
    // Write your code here.
      return makeMinHeightBst(array, 0, array.length-1);
  }
  
  function makeMinHeightBst(array, left, right){
      if(right<left){
          return null;
      }
      var middle = Math.floor((left+right)/2);
      var bst = new BST(array[middle]);
      bst.left = makeMinHeightBst(array, left, middle-1);
      bst.right = makeMinHeightBst(array, middle+1, right);
      return bst;
  }
  
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;
  
