/*Bubble Sort
Write a function that takes in an array of
integers and returns a sorted version of that
array. Use the Bubble Sort algorithm to sort the
array.
If you're unfamiliar with Bubble Sort, we
recommend watching the Conceptual Overview
section of this question's video explanation
before starting to code.*/

//Solution 1:

function bubbleSort(array) {
    // Write your code here.
    var swap = 0;
    var temp;
    //	 0,1,2,3,4,5,6  
    //	[5,2,8,5,6,3,9] 
    //	[2,5,5,6,3,8,9] 
    //	[2,5,5,3,6,8,9] 
    //	[2,5,3,5,6,8,9] 
    //	[2,3,5,5,6,8,9] 
    //	[2,3,5,5,6,8,9] 
    for (var i = 0; i < array.length; i++) {
        if (array[i + 1] < array[i]) {
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swap += 1;

        }
    }
    if (swap != 0) {
        bubbleSort(array);
    }
    return array;
}
// Do not edit the line below.
exports.bubbleSort = bubbleSort;

//Solution 2:

//O(n^2) time (because does multiple for loops, iterating through array)
//O(1) space (because no additional memory was used. All in place swaps.)
function bubbleSort(array) {
    // Write your code here.
    var isSorted = false;
    var counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (var i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
    }
    return array;
}

function swap(i, j, array) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;


