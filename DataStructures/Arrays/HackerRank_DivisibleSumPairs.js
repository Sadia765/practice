/*
Given an array, ar, of n integers and a positive integer k, find the number of (i,j) pairs such that
i is less than j and ar[i] + ar[j] is divisible by k. 
*/

'use strict';

const fs = require('fs');

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

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    /*n: the integer length of array ar
    ar: an array of integers
    k: the integer to divide the pair sum by
    i<j*/
    var pairCounts = 0;
    for (var i = 0; i < ar.length; i++) {
        for (var j = i + 1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                pairCounts += 1;
            }
        }
    }
    return pairCounts;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = divisibleSumPairs(n, k, ar);

    ws.write(result + "\n");

    ws.end();
}
