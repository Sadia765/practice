/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, 
and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
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

// Complete the plusMinus function below.
function plusMinus(arr) {
    var length = arr.length;
    var pos = 0;
    var zero = 0;
    var neg = 0;
    for (var i = 0; i < length; i++) {
        if (arr[i] === 0) {
            zero += 1;
        }
        else if (arr[i] < 0) {
            neg += 1;
        }
        else {
            pos += 1
        }
    }
    console.log((pos / length).toPrecision(6) + '\n' + (neg / length).toPrecision(6) + '\n' + (zero / length).toPrecision(6));

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
