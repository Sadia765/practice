/*Youngest Common
Ancestor
You're given three inputs, all of which are
instances of an AncestralTree class that
have an ancestor property pointing to their
youngest ancestor. The first input is the top
ancestor in an ancestral tree (i.e., the only
instance that has no ancestor--its ancestor
property points to None / null ), and the
other two inputs are descendants in the
ancestral tree.
Write a function that returns the youngest
common ancestor to the two descendants.
Note that a descendant is considered its own
ancestor. So in the simple ancestral tree below,
the youngest common ancestor to nodes A
and B is node A*/

//Solution 1:

//O(d) time, because doing at most d computations |O(1) time, nothing was saved.
// This is an input class. Do not edit.
class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // Write your code here.
      var depthDescOne = getDepth(descendantOne, topAncestor);
      var depthDescTwo = getDepth(descendantTwo, topAncestor);
      var level = Math.abs(depthDescOne - depthDescTwo);
      var start,end,max;
      
      if(depthDescOne > depthDescTwo){
          return backTrackTree(descendantOne, descendantTwo, depthDescOne-depthDescTwo);
      }
      else{ //depthDescOne <= depthDescTwo
          return backTrackTree(descendantTwo, descendantOne, depthDescTwo-depthDescOne);
      }
  }
  
  function getDepth(descendant, topAncestor){
      var depth = 0;
      while(descendant !== topAncestor){
          depth+=1;
          descendant = descendant.ancestor;
      }
      return depth;
  }
  
  function backTrackTree(lowDescendant, highDescendant, difference){
      while(difference > 0){
          lowDescendant = lowDescendant.ancestor;
          difference-=1;
      }
      while(lowDescendant !== highDescendant){
          lowDescendant = lowDescendant.ancestor;
          highDescendant = highDescendant.ancestor;
      }
      return highDescendant;
  }
  
  // Do not edit the line below.
  exports.AncestralTree = AncestralTree;
  exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
  