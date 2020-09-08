/*
Given two arrays, find all integers x that satisfy these conditions:
- Each element of the first array is a factor this integer x.
- This integer x is a factor of each element in the second array.
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    var values = [];
    var end = Math.max(a.length, b.length);
    var counta = 0;
    var countb = 0;
    for (var k = a[a.length - 1]; k <= b[0]; k++) {
        for (var i = 0; i < end; i++) {
            if (i < a.length && k % a[i] === 0) {
                counta += 1;
            }
            if (i < b.length && b[i] % k === 0) {
                countb += 1;
            }
        }
        if (counta === a.length && countb === b.length) {
            values.push(k);
        }
        counta = 0;
        countb = 0;
    }
    return values.length;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}

