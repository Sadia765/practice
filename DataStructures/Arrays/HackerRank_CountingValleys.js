/*
Gary is a hiker who goes up and down during his hikes, 
always starting and ending his hikes at sea level.

If the number of steps Gary takes is n and each step is either denoted as uphill, U, 
or a downhill, D, print the number of valleys he walks through. 

Each step up or down is a 1 unit change in altitude. 

A mountain is a sequence of consecutive steps above sea level, 
starting with a step up from sea level and ending with a step down to sea level.

A valley is a sequence of consecutive steps below sea level, 
starting with a step down from sea level and ending with a step up to sea level.
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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    var sArr=s.split('');
    var seaLevel = 0;
    var valley = 0;
    var counter = 0;
    var increment;
    while(counter!=n){
        if(sArr[counter]=='D'){
            increment =-1;
        }
        else if(sArr[counter]=='U'){
            increment = 1;
        }
        if(counter !=0 && seaLevel<0 && seaLevel+increment ==0){
            valley+=1;
        }
        seaLevel+=increment;
        counter+=1;
    }
    return valley;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
