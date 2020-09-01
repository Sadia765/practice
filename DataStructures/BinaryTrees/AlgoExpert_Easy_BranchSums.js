/*Branch Sums
Write a function that takes in a Binary Tree and
returns a list of its branch sums ordered from
leftmost branch sum to rightmost branch sum.
A branch sum is the sum of all values in a
Binary Tree branch. A Binary Tree branch is a
path of nodes in a tree that starts at the root
node and ends at any leaf node.
Each BinaryTree node has an integer
value , a left child node, and a right
child node. Children nodes can either be
BinaryTree nodes themselves or None /
null .*/

//Solution 1: 

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      var currentNode = root;
      var branchSum = [];
      var pathStack = [currentNode];
      var sumArray = [currentNode.value];
      var nodesSeen = {};
      nodesSeen[currentNode.value] = true;
      var temp;
      
      if(pathStack.length == 0){
          return branchSum;
      }
      while(pathStack.length != 0){
          if(currentNode.right == null && currentNode.left == null){
              pathStack.pop();
              currentNode = pathStack[pathStack.length-1];
              branchSum.push(sumArray[sumArray.length-1]);
              sumArray.pop();
          }
          else if((currentNode.left.value in nodesSeen && currentNode.right.value in nodesSeen) || (currentNode.left.value in nodesSeen && currentNode.right == null) ||(currentNode.left == null && currentNode.right.value in nodesSeen)){
              pathStack.pop();
              sumArray.pop();
              currentNode = pathStack[pathStack.length-1];
          }
          if(currentNode.left != null && !(currentNode.left.value in nodesSeen)){
              currentNode = currentNode.left;
              nodesSeen[currentNode] = true;
              pathStack.push(currentNode);
              temp = sumArray[sumArray.length-1];
              sumArray.push(temp+currentNode.value);
          }
          else if (currentNode.right != null && !(currentNode.right.value in nodesSeen)){
              currentNode = currentNode.right;
              nodesSeen[currentNode] = true;
              pathStack.push(currentNode);
              temp = sumArray[sumArray.length-1];
              sumArray.push(temp+currentNode.value);
  
          }
      }
      
  }

  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  
//Solution 2:

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      var sums = [];
      branchSumsHelper(root, 0, sums);
      return sums;
  }
  
  function branchSumsHelper(currentNode, runningSum, sums){
      if(currentNode == null){
          return;
      }
      var newRunningSum = runningSum + currentNode.value;
      if(currentNode.right == null && currentNode.left == null){
          sums.push(newRunningSum);
          return;
      }
      branchSumsHelper(currentNode.left, newRunningSum, sums);
      branchSumsHelper(currentNode.right, newRunningSum, sums);
      
  }
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  
