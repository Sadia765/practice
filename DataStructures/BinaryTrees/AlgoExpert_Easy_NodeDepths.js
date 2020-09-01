/*Node Depths
The distance between a node in a Binary Tree
and the tree's root is called the node's depth.
Write a function that takes in a Binary Tree and
returns the sum of its nodes' depths.
Each BinaryTree node has an integer
value , a left child node, and a right
child node. Children nodes can either be
BinaryTree nodes themselves or None /
null .*/

//Solution 1: 

function nodeDepths(root) {
    // Write your code here.
      var sumDepths = 0;
      function nodeDepthHelper(currentNode, currentDepth){
          sumDepths+=currentDepth;
          if(currentNode.right !=null){
              nodeDepthHelper(currentNode.right, currentDepth+1);
          }
          if(currentNode.left !=null){
              nodeDepthHelper(currentNode.left, currentDepth+1);
          }
      }
      nodeDepthHelper(root,0);
      return sumDepths;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  
//Solution 2:

function nodeDepths(root) {
    // Write your code here.
      var sumDepths = 0;
      var stack = [{node:root, depth:0}];
      while(stack.length>0){
          var {node, depth} = stack.pop();
          if(node === null){
              continue;
          }
          sumDepths +=depth;
          stack.push({node:node.left, depth: depth+1});
          stack.push({node: node.right, depth: depth+1});
      }
      return sumDepths;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  
//Solution 3:

function nodeDepths(root, depth = 0) {
    // Write your code here.
      if(root === null){
          return 0;
      }
      return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  
