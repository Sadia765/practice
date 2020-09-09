/*
If n and d are integers and the remainder of n / d = 0, we say d is a divisor of n.
Given an integer, t, calculate which of its digits that it is composed of is a divisor of t.
Count the number of divisors occuring within the integer.

For example, for n = 111, the first, second, and third 1 are each a divisor of 111.
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

// Complete the findDigits function below.
function findDigits(n) {
    var numSatisfyingDigits = 0;
    var digitDict = {};
    var arDigits = n.toString().split('');
    arDigits.sort();
    for (var d = 0; d < arDigits.length; d++) {
        if (arDigits[d] in digitDict) {
            numSatisfyingDigits += 1;
        }
        else if (n % arDigits[d] == 0) {
            numSatisfyingDigits += 1;
            digitDict[arDigits[d]] = true;
        }
    }
    return numSatisfyingDigits;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = findDigits(n);

        ws.write(result + "\n");
    }

    ws.end();
}
