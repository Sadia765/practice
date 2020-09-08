/*
Maria plays college basketball and wants to go pro.
Each season she maintains a record of her play.
She tabulates the number of times she breaks her season record for most points and
least points in a game. Points scored in the first game establish her record for the season,
and she begins counting from there.
For example, assume her scores for the season are represented in the array scores = [12,24, 10, 24].
Scores are in the same order as the games played. She would tabulate her results as follows:

Game Score Minimum Maximum # Min Score Beaten # Max Score Beaten
0       12    12      12            0                  0
1       24    12      24            0                  1
2       10    10      24            1                  1  
3       24    10      24            1                  1      
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

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var min = scores[0];
    var max = scores[0];
    var breakMax = 0;
    var breakMin = 0;
    var score;
    for (var i = 1; i < scores.length; i++) {
        score = scores[i];
        if (score > max) {
            max = score;
            breakMax += 1;
        }
        else if (score < min) {
            min = score;
            breakMin += 1;
        }
    }
    return [breakMax, breakMin];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
