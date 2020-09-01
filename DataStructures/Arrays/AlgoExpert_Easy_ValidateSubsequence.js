/*Validate Subsequence
Given two non-empty arrays of integers, write a
function that determines whether the second
array is a subsequence of the first one.
A subsequence of an array is a set of numbers
that aren't necessarily adjacent in the array but
that are in the same order as they appear in the
array. For instance, the numbers [1, 3, 4]
form a subsequence of the array
[1, 2, 3, 4] , and so do the numbers
[2, 4] . Note that a single number in an
array and the array itself are both valid
subsequences of the array. */

//Solutoin 1:

function isValidSubsequence(array, sequence) {
    // Write your code here.
    var arrayPointer = 0;
    var seqPointer = 0;
    //array = [5,1,22,25,6,-1,8,10]
    //sequence = [1,6,-1,10]
    //ap = sp = 0
    while (arrayPointer < array.length && seqPointer < sequence.length) {
        if (array[arrayPointer] == sequence[seqPointer]) {
            seqPointer += 1;
        }
        arrayPointer += 1;
    }
    return seqPointer === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

//Solutoin 2:

function isValidSubsequence(array, sequence) {
    // Write your code here.
    var seqPointer = 0;
    //array = [5,1,22,25,6,-1,8,10]
    //sequence = [1,6,-1,10]
    //ap = sp = 0
    for (var i = 0; i < array.length; i++) {
        if (seqPointer == sequence.length) {
            break;
        }
        if (sequence[seqPointer] == array[i]) {
            seqPointer += 1;
        }
    }
    return seqPointer === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
