/*Invert Binary Tree
Write a function that takes in a Binary Tree and
inverts it. In other words, the function should
swap every left node in the tree for its
corresponding right node.
Each BinaryTree node has an integer
value , a left child node, and a right
child node. Children nodes can either be
BinaryTree nodes themselves or None /
null .
*/

//Solution 1:

function invertBinaryTree(tree) {
    // Write your code here.
    if (tree === null) {
        return;
    }
    invert(tree);
    if (tree.left !== null) {
        invertBinaryTree(tree.left);
    }
    if (tree.right !== null) {
        invertBinaryTree(tree.right);
    }
    return tree;
}

function invert(tree) {
    var temp = tree.right;
    tree.right = tree.left;
    tree.left = temp;
    return tree;
}


// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
