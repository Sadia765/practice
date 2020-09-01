/*Insertion Sort
Write a function that takes in an array of
integers and returns a sorted version of that
array. Use the Insertion Sort algorithm to sort
the array.
If you're unfamiliar with Insertion Sort, we
recommend watching the Conceptual Overview
section of this question's video explanation
before starting to code.*/

//Solution 1:

function insertionSort(array) {
    // Write your code here.
    // 0,1,2,3,4,5,6
    //[8,5,2,9,5,6,3]
    //[5,8,2,9,5,6,3]
    //[2,5,8,9,5,6,3]
    //	var sortedlen = 1; //pointer +1
    var pointer = 0;
    var temp;
    while (pointer < array.length) {
        for (var i = pointer + 1; i >= 0; i--) {
            if (array[i] < array[i - 1]) {
                temp = array[i - 1];
                array[i - 1] = array[i]
                array[i] = temp;
            }
        }
        pointer += 1;
    }
    return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

//Solution 2:

function insertionSort(array) {
    // Write your code here.
    return insertElm(array, 0);
}

function insertElm(array, pointer) {
    var temp;
    for (var i = pointer + 1; i >= 0; i--) {
        if (array[i] < array[i - 1]) {
            temp = array[i - 1];
            array[i - 1] = array[i]
            array[i] = temp;
        }
    }
    if (pointer != array.length - 1) {
        insertElm(array, pointer + 1)
    }
    return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

//Solution 3:

function insertionSort(array) {
    // Write your code here.
    var j;
    for (var i = 1; i < array.length; i++) {
        j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j - 1, array);
            j -= 1;
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
exports.insertionSort = insertionSort;
