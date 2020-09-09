/*
Monica want to buy a keyboard and a USB drive from her favorite electronics store.

Given two arrays, keyboards and drives, representing the costs of the different types of keyboards
and USB drives, respectively, calculate and print the maximum amount that Monica can spend 
while staying in her budget, b.  

If she cannot afford a keyboard and a USB return -1.
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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    var max = -1;
    var temp;
    for(var i = keyboards.length-1; i>=0; i--){
        for(var j = drives.length-1; j>=0; j--){
            temp = keyboards[i] + drives[j];
            if( temp <=b && temp > max){
                max = keyboards[i] + drives[j];
            }
        }       
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bnm = readLine().split(' ');

    const b = parseInt(bnm[0], 10);

    const n = parseInt(bnm[1], 10);

    const m = parseInt(bnm[2], 10);

    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    /*
     * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
     */

    let moneySpent = getMoneySpent(keyboards, drives, b);

    ws.write(moneySpent + "\n");

    ws.end();
}
