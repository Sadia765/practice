/*Powerset
Write a function that takes in an array of unique
integers and returns its powerset.
The powerset P(X) of a set X is the set of all
subsets of X . For example, the powerset of
[1,2] is [[], [1], [2], [1,2]] .
Note that the sets in the powerset do not need
to be in any particular order.*/

//Solution 1:

function powerset(array) {
    // Write your code here.

    var sets = [[]];
    for (var i = 0; i < array.length; i++) {
        var length = sets.length;
        for (var j = 0; j < length; j++) {
            sets.push(sets[j].concat(array[i]));
        }
    }
    return sets;
}

// Do not edit the line below.
exports.powerset = powerset;

//Solution 2:

function powerset(array, index = null) {
    // Write your code here.
    if (index === null) {
        index = array.length - 1;
    }
    if (index < 0) {
        return [[]];
    }
    var element = array[index];
    var sets = powerset(array, index - 1);
    var length = sets.length;
    for (var i = 0; i < length; i++) {
        var subset = sets[i];
        sets.push(subset.concat(element));
    }
    return sets;
}

// Do not edit the line below.
exports.powerset = powerset;
