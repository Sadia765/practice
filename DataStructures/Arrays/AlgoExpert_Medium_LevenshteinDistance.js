/*Levenshtein Distance
Write a function that takes in two strings and
returns the minimum number of edit
operations that need to be performed on the
rst string to obtain the second string.
There are three edit operations: insertion of a
character, deletion of a character, and
substitution of a character for another.*/

//Solution 1:

//O(nm) time| O(nm) space where n is length of str1 and m is length of str2 
function levenshteinDistance(str1, str2) {
    // Write your code here.
    var array = [];
    var row;
    for (var i = 0; i < str2.length + 1; i++) {
        row = [];
        for (var j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        array.push(row);
    }
    for (var i = 1; i < str2.length + 1; i++) {
        for (var j = 1; j < str1.length + 1; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                array[i][j] = array[i - 1][j - 1];
            }
            else {
                array[i][j] = 1 + Math.min(array[i - 1][j], array[i][j - 1], array[i - 1][j - 1]);
            }
        }
    }
    return array[str2.length][str1.length];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;

//Solution 2:

//O(nm) time | O(min(n,m)) space
function levenshteinDistance(str1, str2) {
    // Write your code here.
    var smaller = str1.length < str2.length ? str1 : str2;
    var bigger = str1.length >= str2.length ? str1 : str2;
    var evenArray = [];
    var oddArray = new Array(smaller.length + 1);
    for (var j = 0; j < smaller.length + 1; j++) {
        evenArray.push(j);
    }
    for (var i = 1; i < bigger.length + 1; i++) {
        var current, previous;
        if (i % 2 === 1) {
            current = oddArray;
            previous = evenArray;
        }
        else {
            current = evenArray;
            previous = oddArray;
        }
        current[0] = i;
        for (var j = 1; j < smaller.length + 1; j++) {
            if (bigger[i - 1] === smaller[j - 1]) {
                current[j] = previous[j - 1];
            }
            else {
                current[j] = 1 + Math.min(previous[j - 1], previous[j], current[j - 1]);
            }
        }
    }
    return bigger.length % 2 === 0 ? evenArray[smaller.length] : oddArray[smaller.length];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
