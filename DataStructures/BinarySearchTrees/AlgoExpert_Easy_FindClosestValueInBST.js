/*Find Closest Value In BST
Write a function that takes in a Binary Search
Tree (BST) and a target integer value and
returns the closest value to that target value
contained in the BST.
You can assume that there will only be one
closest value.
Each BST node has an integer value , a
left child node, and a right child node. A
node is said to be a valid BST node if and
only if it satises the BST property: its value
is strictly greater than the values of every node
to its left; its value is less than or equal to
the values of every node to its right; and its
children nodes are either valid BST nodes
themselves or None / null.*/

//Solution 1:

function findClosestValueInBst(tree, target) {
    // Write your code here.
      var currentNode = tree;
      var closestSum = Math.abs(tree.value - target);
      var closestValue = currentNode.value;
      while(currentNode.right !=null && currentNode.left !=null){
          if(currentNode.right == null){
              currentNode = currentNode.left;
          }
          else if(currentNode.left == null){
              currentNode = currentNode.right;
          }
          else if(Math.abs(currentNode.left.value-target) > Math.abs(currentNode.right.value-target)){
              currentNode = currentNode.right;
          }
          else if(Math.abs(currentNode.left.value-target) < Math.abs(currentNode.right.value-target)){
              currentNode = currentNode.left;
          }
          else if(currentNode.value == target){
              //closestValue = curr
              return closestValue;
          }
          if(Math.abs(currentNode.value-target)<closestSum){
              closestSum = Math.abs(currentNode.value-target);
              closestValue = currentNode.value;
          }
      }
      return closestValue;
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  
//Solution 2:

function findClosestValueInBst(tree, target) {
    // Write your code here.
      var currentNode = tree;
      var closestSum = Math.abs(tree.value - target);
      var closestValue = currentNode.value;
      while(currentNode !=null){
          if(target>currentNode.value){
              currentNode = currentNode.right;
          }
          else if(target<currentNode.value){
              currentNode = currentNode.left;
          }
          else if(currentNode.value == target){
              closestSum = 0;
              closestValue = currentNode.value;
              return closestValue;
          }
          if(currentNode !=null && (Math.abs(currentNode.value-target)<closestSum)){
              closestSum = Math.abs(currentNode.value-target);
              closestValue = currentNode.value;
          }
      }
      return closestValue;
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  
//Solution 3:

function findClosestValueInBst(tree, target) {
    // Write your code here.
      return findClosestValueInBstHelper(tree, target, Infinity);
  }
  
  function findClosestValueInBstHelper(tree, target, closest){
      if(tree === null){
          return closest;
      }
      if(Math.abs(target - closest) > Math.abs(target - tree.value)){
          closest= tree.value;
      }
      if(target<tree.value){
          return findClosestValueInBstHelper(tree.left, target, closest);
      }
      else if(target>tree.value){
          return findClosestValueInBstHelper(tree.right, target, closest);
      }
      else{
          return closest;
      }
  }
  
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  