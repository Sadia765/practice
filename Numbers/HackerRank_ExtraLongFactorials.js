/*
The factorial of some number n is n! = n*(n-1)*(n-2)*....*3*2*1

Calculate and print the factorial of a given integer. 
Notice factorials for n > 20 can't be stored in a 64-bit long variable. 
Big integers are used in these calculations. 
Use Big integers to solve this problem.
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

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    var fact = 1n
    for (var bigInt = BigInt(n); bigInt > 0; bigInt--) {
        fact = fact * bigInt;
    }
    console.log(fact.toString());
}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
