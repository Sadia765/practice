/*Depth-rst Search
You're given a Node class that has a name
and an array of optional children nodes.
When put together, nodes form an acyclic treelike structure.
Implement the depthFirstSearch method
on the Node class, which takes in an empty
array, traverses the tree using the Depth-rst
Search approach (specically navigating the
tree from left to right), stores all of the nodes'
names in the input array, and returns it.
If you're unfamiliar with Depth-First Search, we
recommend watching the Conceptual Overview
section of this question's video explanation
before starting to code.*/

//Solution 1:

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
          array.push(this.name); //push root.
          //Given{A->[B->[E,F->[I,J]],C,D->[G->[K],H]]}
          for(var child of this.children){
              child.depthFirstSearch(array);
          }
          return array;
      }
  }
  
  // Do not edit the line below.
  exports.Node = Node;

  //Solution 2:

  // Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
          array.push(this.name);
          for(var i = 0; i<this.children.length; i++){
              this.children[i].depthFirstSearch(array);
          }
          return array;
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  