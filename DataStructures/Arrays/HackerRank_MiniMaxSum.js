/*
Given an Array of five integers, 
find the minimum and maximum sum that can be obtained using four of the five integers.

For example, given an array arr = [1,3,5,7,9], the
minimum sum is 1+3+5+7 = 16 and the 
maximum sum is 3+5+7+9 = 24
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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var totalSum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    var minimum = totalSum - arr[0];
    var maximum = totalSum - arr[arr.length - 1];
    for (var i = 0; i < arr.length; i++) {
        if (totalSum - arr[i] < minimum) {
            minimum = totalSum - arr[i];
        }
        else if (totalSum - arr[i] > maximum) {
            maximum = totalSum - arr[i];
        }
    }
    console.log(minimum + ' ' + maximum);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
