/*
Laura plants a Utopian Tree with a height of 1 meter at the onset of Spring. 
If the Utopia tree goes through 2 growth cycles each year, 
doubling each Spring and increasing by 1 meter each Summer, 
how tall will Laura's Utopian Tree be after n growth cycles.
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

// Complete the utopianTree function below.
function utopianTree(n) {
    var i = 0;
    var height = 1;
    for (i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            height = height * 2;
        }
        else if (i % 2 == 0) {
            height += 1;
        }
    }
    return height;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = utopianTree(n);

        ws.write(result + "\n");
    }

    ws.end();
}
