/*
Aerith wants to play a game by jumping between cumulus and thunderhead clouds. She starts with
energy e = 100. She starts at cloud 0, i.e. c[0], and uses 1 energy unit to take a jump of size
k. She lands on cloud c[(i+k) % n], where i is the current cloud index and n is the total number
of clouds. If Aerith lands on a thunderhead cloud, i.e. c[i] = 1, then her energy e decreases by 2.
Otherwise, her energy decreases by 1. Aerith ends her game when she is back to cloud 0. 

Given an array of 0's and 1's which represent cumulus clouds and thunderhead clouds, respectively,
find the value of e after the game ends. 
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
function jumpingOnClouds(c, k) {
    var e = 100;
    var i = 0;
    do {
        e = e - 1;
        if (c[i] == 1) {
            e = e - 2;
        }
        i = (i + k) % c.length;
    } while (i != 0)
    return e;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    ws.write(result + "\n");

    ws.end();
}
