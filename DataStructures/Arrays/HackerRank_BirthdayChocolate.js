/*
Lily has a chocolate bar that she wants to share it with Ron for his birthday.
Each of the squares has an integer on it. She decides to share a contiguous segment 
of the bar selected such that the length of the segment matches Ron's birth month 
and the sum of the integers on the squares is equal to his birth day. 
You must determine how many ways she can divide the chocolate.

If you have a chocolate bar with squares s = [2,2,1,3,2], and Lily wants to find the segments
summing to Ron's birth day d = 4 with a length equalling his birth month m = 2, there will be two 
segments that meet her criteria, namely [2,2] and [1,3].
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

// Complete the birthday function below.
function birthday(s, d, m) {
    /*segments summing to d with a 
    length equalling m. */
    var sum = 0;
    var numWays = 0
    //find sum of first m elements in array s. 
    for (var i = 0; i < m; i++) {
        sum += s[i];
    }
    //Now let us shift through the array with chunks of m length.
    for (var j = m - 1; j < s.length; j++) {
        if (sum == d) {
            numWays += 1;
        }
        sum = sum - s[j + 1 - m] + s[j + 1];

    }
    return numWays;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
