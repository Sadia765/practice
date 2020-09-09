/*
Emma is playing a game that starts with consecutively numbered clouds.

Given an array of binary integers, c, with indices 0 <= i < n, where c[i] = 0 is a cumulus cloud and 
c[i] = 1 is a thunderhead, calculate the shortest path that Emma can take that avoids thunderheads.  

She can jump on any cumulus clouds that are equal to the current cloud number plus 1 or 2.
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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    var jumps = 0;
    var i = 0;
    while (i < c.length - 1) {
        if (c[i + 2] == 0) {
            i = i + 2;
        }
        else {//c[i+1] == 0
            i = i + 1;
        }
        jumps += 1;
    }
    return jumps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
