/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    //Note every string is 2 (hh)+1(:)+2(mm)+1(:)+2(ss)+2(AM/PM) = 10 elements 
    //make string into an array with each a character from s.
    var arr = s.split('');
    //if less than 12 and 'AM'
    if (arr[8] == 'A') {
        //12 AM->arr[0]=arr[1]=0 and then return
        if (arr[0] == 1 && arr[1] == 2) {
            arr[0] = 0;
            arr[1] = 0;
            return arr.slice(0, 8).join('');
        }
        //11 AM or 10 AM-> return as is
        //or It is between 1 and 9 AM->return as is. 
        else {
            return arr.slice(0, 8).join('');
        }

    }
    else if (arr[8] == 'P') {
        //12 PM ->return as is
        if (arr[0] == 1 && arr[1] == 2) {
            return arr.slice(0, 8).join('');
        }
        else {//otherwise take the 0 &1 st index->turn to number->add 12->then return
            var armyhh = (Number(arr.slice(0, 2).join('')) + 12).toString();
            return armyhh + arr.slice(2, 8).join('');
        }
        //11 or 10 PM -> add 


    }

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
