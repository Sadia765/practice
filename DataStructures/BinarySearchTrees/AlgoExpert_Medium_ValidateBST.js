/*Validate BST
Write a function that takes in a potentially
invalid Binary Search Tree (BST) and returns a
boolean representing whether the BST is valid.
Each BST node has an integer value , a
left child node, and a right child node. A
node is said to be a valid BST node if and only
if it satises the BST property: its value is
strictly greater than the values of every node to
its left; its value is less than or equal to the
values of every node to its right; and its children
nodes are either valid BST nodes themselves
or None / null .
A BST is valid if and only if all of its nodes are
valid BST nodes.
*/

//Solution 1:

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  //O(n) time |O(d) space, n is number of nodes in tree, and d is depth of tree.
  function validateBst(tree, minValue = null, maxValue = null) {
    // Write your code here.
      return validateBstHelper(tree, -Infinity, Infinity);
  }
  
  function validateBstHelper(tree, minValue, maxValue){
      if(tree === null){
          return true;
      }
      if(tree.value<minValue || tree.value>=maxValue){
          return false;
      }
      return validateBstHelper(tree.left, minValue, tree.value) && validateBstHelper(tree.right, tree.value, maxValue);
  }
  /*
  valid:
                2
              /		\
           1		 3	
          / \   / \
       0 1.5 2.5 4
  invalid:
                  2
              /		\
           1		 3	
          / \   / \
       0   4 2.5 5
      / \
           3
          2
              /		\
           1		 3	
          / \   / \
       0   4 2.5 5
  */
  
  
  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;
  
//Solution 2:

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  //O(n) time |O(d) space, n is number of nodes in tree, and d is depth of tree.
  function validateBst(tree, minValue = null, maxValue = null) {
    // Write your code here.
      return validateBstHelper(tree, -Infinity, Infinity);
  }
  
  function validateBstHelper(tree, minValue, maxValue){
      if(tree === null){
          return true;
      }
      if(tree.value>=minValue && tree.value<maxValue){
          return validateBstHelper(tree.left, minValue, tree.value) && validateBstHelper(tree.right, tree.value, maxValue);
      }
      else{
          return false;
      }
  }
  
  
  
  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;
  


