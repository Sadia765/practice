/*
A staircase of size n = 4 looks like the following.

   #
  ##
 ###
####

That is, its height and base are both n. The last line does not precede with any spaces. 
Write a program that prints a size n staircase.
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

// Complete the staircase function below.
function staircase(n) {
    var staircaseStr = '';
    var lineStr;
    for (var i = 1; i <= n; i++) {
        lineStr = '';
        for (var j = 1; j <= n; j++) {
            if (j <= n - i) {
                lineStr += ' ';
            }
            else {//n>=j>n-i
                lineStr += '#';
            }
        }
        staircaseStr += lineStr;
        if (i < n) {
            staircaseStr += '\n';
        }
    }
    console.log(staircaseStr);
}
function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
