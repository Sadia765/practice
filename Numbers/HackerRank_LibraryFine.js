/*
Given the expected (d2,m2,y2) and actual (d1,m1,y1) return dates for a library book, 
write a program that calculates the fine (if any). 

- If the book is returned on or before the expected return date, there is no fine.
- If the book is returned after the expected return date but within the 
expected return month and year, the fine is 15 Hackos * (the number of days late).
- If the book is returned after the expected return month but within
the expected return year, the fine is 500 Hackos * (the number of months late).
- If the book is returned after the expected return year, there is a fixed fine of 10000 Hackos.

Charges are based only on the least precise measure of lateness. 
For example, whether a book is due January 1, 2017 or December 31, 2017, 
if it is returned January 1, 2018, that is a year late and the fine would be 10000 Hackos. 
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

// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 < y2) {
        return 0;
    }
    else if (y1 == y2) {
        if (m1 < m2) {
            return 0;
        }
        else if (m1 == m2) {
            if (d1 <= d2) {
                return 0;
            }
            else {//d1>d2
                return 15 * (d1 - d2);
            }
        }
        else {//returned on month m1, after m2 (month due)
            return 500 * (m1 - m2);
        }
    }
    else {//y1>y2
        return 10000;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const d1M1Y1 = readLine().split(' ');

    const d1 = parseInt(d1M1Y1[0], 10);

    const m1 = parseInt(d1M1Y1[1], 10);

    const y1 = parseInt(d1M1Y1[2], 10);

    const d2M2Y2 = readLine().split(' ');

    const d2 = parseInt(d2M2Y2[0], 10);

    const m2 = parseInt(d2M2Y2[1], 10);

    const y2 = parseInt(d2M2Y2[2], 10);

    let result = libraryFine(d1, m1, y1, d2, m2, y2);

    ws.write(result + "\n");

    ws.end();
}
