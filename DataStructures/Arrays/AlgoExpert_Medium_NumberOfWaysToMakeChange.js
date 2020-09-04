/*Number Of Ways To Make Change
Given an array of distinct positive integers
representing coin denominations and a single
non-negative integer n representing a target
amount of money, write a function that returns
the number of ways to make change for that
target amount using the given coin
denominations.
Note that an unlimited amount of coins is at
your disposal.*/

//Solution 1:

//O(nd) time | O(n) space
function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
    var changeWays = new Array(n + 1).fill(0);
    changeWays[0] = 1;
    for (var i = 0; i < denoms.length; i++) {
        for (var j = 1; j < n + 1; j++) {
            if (denoms[i] <= j) {
                changeWays[j] += changeWays[j - denoms[i]];
            }
        }
    }
    return changeWays[n]

}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
