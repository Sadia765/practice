/*
A Discrete Math professor cancels class if less than k number of students are present at the 
beginnning of class. Given an array of integers representing the times that each student arrived,
return YES or NO, based on if the class should be canceled or not. 
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

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    /* k: the threshold number of students
    a: an array of integers representing arrival times
    */
    var OnTime = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            OnTime += 1;
        }
    }
    if (OnTime >= k) {
        return 'NO';
    }
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        let result = angryProfessor(k, a);

        ws.write(result + "\n");
    }

    ws.end();
}
