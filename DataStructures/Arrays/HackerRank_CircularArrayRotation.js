/*
Given an array of integers, a, an integer, k, 
rotate array a k times, and report the indices of 
array a which are the entries of the given queries array.
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

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    /*a: an array of integers to rotate
    k: an integer, the rotation count
    queries: an array of integers, the indices to report
    */
    //1. Rotate array a k times.
    var temp;
    var arrInts = [];
    for (var i = 0; i < k; i++) {
        temp = a.pop();
        a.unshift(temp);
    }
    //2. Make an array with elements  a[queries[i]] for all i between 0 and queries.length-1.
    for (var j = 0; j < queries.length; j++) {
        arrInts.push(a[queries[j]]);
    }
    return arrInts;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nkq = readLine().split(' ');

    const n = parseInt(nkq[0], 10);

    const k = parseInt(nkq[1], 10);

    const q = parseInt(nkq[2], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let queries = [];

    for (let i = 0; i < q; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    const result = circularArrayRotation(a, k, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
