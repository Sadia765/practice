/*Max Subset Sum No
Adjacent
Write a function that takes in an array of
positive integers and returns the maximum
sum of non-adjacent elements in the array.
If a sum can't be generated, the function should
return 0 .*/

//Solution 1:

//O(n) time | O(n) space where n is number of elements in array.
function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    if (array.length === 0) {
        return 0;
    }
    var maximumSums = [];
    for (var i = 0; i < array.length; i++) {
        if (i === 0) {
            maximumSums.push(array[i]);
        }
        else if (i === 1) {
            maximumSums.push(Math.max(array[i - 1], array[i]));
        }
        else {
            maximumSums.push(Math.max(maximumSums[i - 1], maximumSums[i - 2] + array[i]));
        }
    }
    return maximumSums[maximumSums.length - 1];
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

//Solution 2:

//O(n) time | O(1) space where n is number of elements in array.
function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    if (array.length === 0) {
        return 0;
    }
    if (array.length === 1) {
        return array[0];
    }
    var second = array[0];
    var first = Math.max(array[0], array[1]);
    var temp;
    for (var i = 2; i < array.length; i++) {
        temp = Math.max(first, second + array[i]);
        second = first;
        first = temp;
    }
    return first;
}
// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

