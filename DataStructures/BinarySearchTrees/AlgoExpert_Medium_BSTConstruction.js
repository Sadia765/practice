/*BST Construction
Write a BST class for a Binary Search Tree.
The class should support:
- Inserting values with the insert
method.
- Removing values with the remove
method; this method should only
remove the first instance of a given
value.
- Searching for values with the
contains method.
Note that you can't remove values from a
single-node tree. In other words, calling the
remove method on a single-node tree should
simply not do anything.
Each BST node has an integer value , a
left child node, and a right child node. A
node is said to be a valid BST node if and
only if it satises the BST property: its value
is strictly greater than the values of every node
to its left; its value is less than or equal to
the values of every node to its right; and its
children nodes are either valid BST nodes
themselves or None / null .
*/

//Solution 1:

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space	
    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        var currentNode = this;
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new BST(value);
                    break;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
            else {
                if (currentNode.right === null) {
                    currentNode.right = new BST(value);
                    break;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }

    contains(value) {
        // Write your code here.
        var currentNode = this;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else {
                return true;
            }
        }
        return false;
    }

    remove(value, parentNode = null) {
        // Write your code here.
        // Do not edit the return statement of this method.
        var currentNode = this;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else {
                //node to remove has two children nodes.
                if (currentNode.left !== null && currentNode.right !== null) {
                    currentNode.value = currentNode.right.getMinValue();
                    currentNode.right.remove(currentNode.value, currentNode);
                }
                else if (parentNode === null) {
                    if (currentNode.left !== null) {
                        currentNode.value = currentNode.left.value;
                        currentNode.right = currentNode.left.right;
                        currentNode.left = currentNode.left.left;
                    }
                    else if (currentNode.right !== null) {
                        currentNode.value = currentNode.right.value;
                        currentNode.left = currentNode.right.left;
                        currentNode.right = currentNode.right.right;
                    }
                    else {
                        //currentNode.value = null;
                    }
                }
                else if (parentNode.left === currentNode) {
                    if (currentNode.left !== null) {
                        parentNode.left = currentNode.left;
                    }
                    else {
                        parentNode.left = currentNode.right;
                    }
                }
                else if (parentNode.right === currentNode) {
                    if (currentNode.left !== null) {
                        parentNode.right = currentNode.left;
                    }
                    else {
                        parentNode.right = currentNode.right;
                    }
                }
                break;
            }
        }
        return this;
    }

    getMinValue() {
        var currentNode = this;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }
}

// Do not edit the line below.
exports.BST = BST;

