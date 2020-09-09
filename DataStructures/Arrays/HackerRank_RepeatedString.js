/*
Given a string, s, to repeat infinitely many times, and an integer, n, find the number of a's in 
the first n letters of hte infinite string. 

For examples, if s = `abcac` and n = 10, then will consider the first 10 letters 
of the infinite string and return the number of a's in it.

12345678910 --letter number
abcacabcac  -- counting we get a's at the first, forth, sixth, and ninth letter, so there are 4 total.
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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    var sArr = s.split('');
    var acount = 0;
    if (n <= sArr.length) {
        for (var i = 0; i < n; i++) {
            if (sArr[i] == 'a') {
                acount += 1;
            }
        }
        return acount;
    }
    else {//otherwise n>sArr.length;
        for (var i = 0; i < sArr.length; i++) {
            if (sArr[i] == 'a') {
                acount += 1;
            }
        }
        acount = acount * Math.floor(n / sArr.length);
        for (var j = 0; j < (n % sArr.length); j++) {
            if (sArr[j] == 'a') {
                acount += 1;
            }
        }
        return acount;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
