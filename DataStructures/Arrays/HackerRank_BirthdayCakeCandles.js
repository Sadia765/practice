/*
You are in charge of the cake for a child's birthday.
You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. 
Count how many candles are tallest.

If we have candles of height [4,4,1,3], the tallest is 4 units. 
There are two that are of this height, so we return 2.
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

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    //set max initially to first elm in ar
    var max = ar[0];
    var maxNum = 1;
    //iterate through ar, index i
    for (var i = 0; i < ar.length; i++) {
        //for each, check if ar[i]>max
        if (ar[i] > max) {
            max = ar[i];
            maxNum = 1;
        }
        else if (ar[i] === max && i != 0) {
            maxNum += 1;
        }
    }
    return maxNum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
