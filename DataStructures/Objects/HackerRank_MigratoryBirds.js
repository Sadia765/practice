/*
There are five types of birds with the following ids 1,2,3,4,5. 
Given an array with the types of birds sighted,
find the type of bird sighted most. If there is a tie, choose the one with the lowest id number. 
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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var birdsDict = {};
    for (var i = 1; i <= 5; i++) {
        birdsDict[i] = 0;
    }
    for (var i = 0; i <= arr.length; i++) {
        birdsDict[arr[i]] += 1;
    }

    console.log(birdsDict);
    var max = birdsDict[5];
    var maxType = 5;
    for (var j in birdsDict) {
        if ((birdsDict[j] == max && j < maxType) || birdsDict[j] > max) {
            max = birdsDict[j];
            maxType = j;
        }
    }
    return maxType;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
