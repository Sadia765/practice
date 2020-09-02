/*Three Number Sum
Write a function that takes in a non-empty array
of distinct integers and an integer representing
a target sum. The function should nd all
triplets in the array that sum up to the target
sum and return a two-dimensional array of all
these triplets. The numbers in each triplet
should be ordered in ascending order, and the
triplets themselves should be ordered in
ascending order with respect to the numbers
they hold.
If no three numbers sum up to the target sum,
the function should return an empty array.
*/

//Solution 1:

function threeNumberSum(array, targetSum) {
    // Write your code here.
    var triples = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            for (var k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] == targetSum) {
                    triples.push([array[i], array[j], array[k]].sort(function (a, b) { return a - b }));
                }
            }
        }
    }
    return triples.sort(function (c, d) {
        if (c[0] != d[0]) {
            return c[0] >= d[0];
        }
        else { //same first value.
            return c[1] >= d[1];
        }
    });

}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

//Solution 2:

function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort(function (a, b) { return a - b });
    var triples = [];
    var j;
    var k;
    var remaining;
    for (var i = 0; i < array.length - 2; i++) {
        j = i + 1;
        k = array.length - 1;
        remaining = targetSum - array[i];
        while (j < k) {
            if (array[j] + array[k] == remaining) {
                triples.push([array[i], array[j], array[k]]);
                j++;
                k--;
            }
            else if (array[j] + array[k] > remaining) {
                k--;
            }
            else if (array[j] + array[k] < remaining) {
                j++;
            }
        }
    }
    return triples;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
