/*Selection Sort
Write a function that takes in an array of
integers and returns a sorted version of that
array. Use the Selection Sort algorithm to sort
the array.
If you're unfamiliar with Selection Sort, we
recommend watching the Conceptual Overview
section of this question's video explanation
before starting to code.*/

//Solution 1:

function selectionSort(array) {
    // Write your code here.
    // 0,1,2,3,4,5,6
    //[8,5,2,9,5,6,3]
    //[2,5,8,9,5,6,3]
    //[2,3,8,9,5,6,5]
    //[2,3,5,9,8,6,5]
    //[2,3,5,5,8,6,9]
    //[2,3,5,5,6,8,9]
    //[2,3,5,5,6,8,9]
    var lastSortedIndex = -1;
    var minIndex = lastSortedIndex + 1;
    while (lastSortedIndex < array.length - 1) {
        minIndex = lastSortedIndex + 1;
        for (var i = lastSortedIndex + 1; i < array.length; i++) {
            if (array[i] < array[minIndex]) {
                minIndex = i;
            }
        }
        temp = array[minIndex];
        array[minIndex] = array[lastSortedIndex + 1];
        array[lastSortedIndex + 1] = temp;
        lastSortedIndex += 1;

    }
    return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;

//Solution 2:

function selectionSort(array) {
    // Write your code here.
    // 0,1,2,3,4,5,6
    //[8,5,2,9,5,6,3]
    //[2,5,8,9,5,6,3]
    //[2,3,8,9,5,6,5]
    //[2,3,5,9,8,6,5]
    //[2,3,5,5,8,6,9]
    //[2,3,5,5,6,8,9]
    //[2,3,5,5,6,8,9]
    var firstIndex = 0;
    var minIndex;
    while (firstIndex < array.length - 1) {
        minIndex = firstIndex;
        for (var i = firstIndex + 1; i < array.length; i++) {
            if (array[i] < array[minIndex]) {
                minIndex = i;
            }
        }
        swap(firstIndex, minIndex, array);
        firstIndex += 1;
    }
    return array;
}

function swap(i, j, array) {
    var temp;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
