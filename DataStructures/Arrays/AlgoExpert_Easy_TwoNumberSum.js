/*Two Number Sum
Write a function that takes in a non-empty array
of distinct integers and an integer representing
a target sum. If any two numbers in the input
array sum up to the target sum, the function
should return them in an array, in any order. If
no two numbers sum up to the target sum, the
function should return an empty array.
Note that the target sum has to be obtained by
summing two different integers in the array.
Assume that there will be at most one
pair of numbers summing up to the target sum.
*/

//Solution 1:
function twoNumberSum(array, targetSum) {
    // Write your code here.
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == targetSum) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

//Solution 2:
function twoNumberSum(array, targetSum) {
    // Write your code here.
    var dictSum = {};
    var str;
    for (var i = 0; i < array.length; i++) {
        if (!(array[i] in dictSum)) {
            dictSum[array[i]] = 1;
        }
        else {
            dictSum[array[i]] += 1;
        }
    }

    for (var j = 0; j < array.length; j++) {
        //str = ;
        //console.log(str in dictSum); 
        if ((targetSum - array[j]).toString() in dictSum) {
            if (((targetSum - array[j]) == array[j]) && (dictSum[targetSum - array[j]] > 1)) {
                return [array[j], targetSum - array[j]];
            }
            else if ((targetSum - array[j]) != array[j]) {
                return [array[j], targetSum - array[j]];
            }
        }
    }
    return [];
}


// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

//Solution 3:
function twoNumberSum(array, targetSum) {
    // Write your code here.
    array.sort(function (a, b) { return a - b });
    var i = 0;
    var j = array.length - 1;
    while (j > -1 && i < array.length) {
        if (array[i] + array[j] > targetSum) {
            j--;
        }
        else if (array[i] + array[j] < targetSum) {
            i++;
        }
        else if (array[i] + array[j] == targetSum) {
            if (i != j) {
                return [array[i], array[j]];
            }
            else {
                i++;
                j--
            }
        }
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
