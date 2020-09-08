/*
Sam's house is located in the inclusive range [s,t], i.e. starts at point s and ends at point t. 
There is an apple tree to the left of Sam's house, at point a, and 
an orange tree to the right of his house, at point b. 

Given two arrays of distances, d, where one represents how far each of the m apples
landed from the apple tree and the the other represents how far each of the n oranges
landed from the orange tree, find out how many apples and oranges landed on Sam's house. 
A negative d means the fruit landed to the left of its respective tree and a positive d means
the fruit landed to the right of its respective tree. 
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    /*
    s: integer, starting point of Sam's house location.
    t: integer, ending location of Sam's house location.
    a: integer, location of the Apple tree.
    b: integer, location of the Orange tree.
    apples: integer array, distances at which each apple falls from the tree.
    oranges: integer array, distances at which each orange falls from the tree.*/
    var numApplesInRange = 0;
    var numOrangesInRange = 0;
    for (var i = 0; i < apples.length; i++) {
        if ((apples[i] + a) >= s && (apples[i] + a) <= t) {
            numApplesInRange += 1;
        }
    }
    console.log(numApplesInRange);
    for (var i = 0; i < oranges.length; i++) {
        if ((oranges[i] + b) >= s && (oranges[i] + b) <= t) {
            numOrangesInRange += 1;
        }
    }
    console.log(numOrangesInRange);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
