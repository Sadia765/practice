/*Search In Sorted Matrix
You're given a two-dimensional array (a matrix)
of distinct integers and a target integer. Each
row in the matrix is sorted, and each column is
also sorted; the matrix doesn't necessarily have
the same height and width.
Write a function that returns an array of the
row and column indices of the target integer if
it's contained in the matrix, otherwise
[-1, -1] .*/

//Solution 1:

//O(M*N) time, M # of arrays, N # of entries in each array| O(1) space
function searchInSortedMatrix(matrix, target) {
    // Write your code here.
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;

//Solution 2:

//O(M+N) time: M # of arrays, N # of entries in each array| O(1) space
function searchInSortedMatrix(matrix, target) {
    // Write your code here.
    var row = 0;
    var column = matrix[0].length - 1;
    while (row < matrix.length && column >= 0) {
        if (matrix[row][column] > target) {
            column -= 1;
        }
        else if (matrix[row][column] < target) {
            row += 1;
        }
        else {
            return [row, column];
        }
    }
    return [-1, -1];
}

function binarySearchHelp(array, target, left, right) {
    if (left > right) {
        return -1;
    }
    middle = Math.floor((left + right) / 2);
    if (target == array[middle]) {
        return middle;
    }
    else if (target > array[middle]) {
        return binarySearchHelp(array, target, middle + 1, right);
    }
    else {//target<array[middle]
        return binarySearchHelp(array, target, left, middle - 1);
    }
}
// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
