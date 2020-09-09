/*
Given a sequence of n integers, p(1),p(2),p(3),....p(n) 
where each element is distinct and satisfies 1 <= p(x) <= n. 
For each x between 1 and n inclusive, find any integer y that satisfies p(p(y))  = x.
Print the value of y on a new line. 
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

// Complete the permutationEquation function below.
function permutationEquation(p) {
    var p1 = [];
    var p2 = [];
    for (var m = 0; m < p.length; m++) {
        p1[m] = p[m];
        p2[m] = p[m];
    }
    for (var i = 0; i < p.length; i++) {
        p1[p[i] - 1] = i + 1;
    }
    for (var j = 0; j < p.length; j++) {
        p2[p[j] - 1] = p1[j];
    }
    return p2;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = permutationEquation(p);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
