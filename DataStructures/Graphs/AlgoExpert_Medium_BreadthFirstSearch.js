/*Breadth-first Search
You're given a Node class that has a name
and an array of optional children nodes.
When put together, nodes form an acyclic treelike structure.
Implement the breadthFirstSearch
method on the Node class, which takes in an
empty array, traverses the tree using the
Breadth-first Search approach (specically
navigating the tree from left to right), stores all
of the nodes' names in the input array, and
returns it.
If you're unfamiliar with Breadth-first Search,
we recommend watching the Conceptual
Overview section of this question's video
explanation before starting to code.*/

//Solution 1:

// Do not edit the class below except
// for the breadthFirstSearch method.
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
  
    breadthFirstSearch(array) {
      // Write your code here.
          var queue = [this];
          var current;
          while(queue.length > 0){
              current = queue.shift();
              array.push(current.name);
              for(var child of current.children){
                  queue.push(child);
              }
          }
          return array;
    }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  
