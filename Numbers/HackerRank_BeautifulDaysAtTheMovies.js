/*
Given a range of numbered days, starting at i and ending at j, and a divisor k,
determine the number of days that are beautiful. 
A beautiful number is a number, x, within the range i and j, 
whose absolute value of the difference between x and its reverse
is divisible by k.
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

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    var numBeautifulDays = 0;
    for (var d = i; d <= j; d++) {
        if ((Math.abs(d - Number(d.toString().split('').reverse().join('')))) % k == 0) {
            numBeautifulDays += 1;
        }
    }
    return numBeautifulDays;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}
