/*
HackerLand Enterprise has a new viral advertising strategy: when they launch a new product,
they advertise it to exactly 5 people on social media. Each day, floor(recipients/2) of 
the recipients like the ad and each of these people will share it with 3 of their friends.
If no one receives the ad twice, find how many people like the ad by end of a given day, n. 
Count the launch day as day 1.
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

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    var arrLikes = [0, 2];
    var count = 1;
    while (count < n) {
        arrLikes[0] = arrLikes[0] + arrLikes[1];
        arrLikes[1] = Math.floor(arrLikes[1] * 3 / 2)
        count += 1;
    }
    return arrLikes[0] + arrLikes[1];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = viralAdvertising(n);

    ws.write(result + "\n");

    ws.end();
}
