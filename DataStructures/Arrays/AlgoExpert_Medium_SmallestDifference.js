/* Smallest Difference
Write a function that takes in two non-empty
arrays of integers, finds the pair of numbers
(one from each array) whose absolute
difference is closest to zero, and returns an
array containing these two numbers, with the
number from the first array in the first position.
You can assume that there will only be one pair
of numbers with the smallest dierence.
*/

//Solution 1:

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    var min = Math.abs(arrayOne[0] - arrayTwo[0]);
    var absdiff, index1, index2;
    for (var i = 0; i < arrayOne.length; i++) {
        for (var j = 0; j < arrayTwo.length; j++) {
            absdiff = Math.abs(arrayOne[i] - arrayTwo[j]);
            if (min > absdiff) {
                min = absdiff;
                index1 = i;
                index2 = j;
            }
        }
    }
    return [arrayOne[index1], arrayTwo[index2]]
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

//Solution 2:

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort(function (a, b) { return a - b });
    arrayTwo.sort(function (a, b) { return a - b });
    var pointer1 = 0;
    var pointer2 = 0;
    var minDiff = Infinity;
    var currentDiff = Infinity;
    var minPair = [];
    var first, second;
    while (pointer1 < arrayOne.length && pointer2 < arrayTwo.length) {
        first = arrayOne[pointer1];
        second = arrayTwo[pointer2];
        currentDiff = Math.abs(first - second);
        if (first < second) {
            pointer1 += 1;
        }
        else if (first > second) {
            pointer2 += 1;
        }
        else {
            return [first, second];
        }
        if (currentDiff < minDiff) {
            minDiff = currentDiff;
            minPair = [first, second];
        }
    }
    return minPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

