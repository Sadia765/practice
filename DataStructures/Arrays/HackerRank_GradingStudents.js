/*
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
A grade less than 40 is failing.

Write code that will round a students grade based on the following criteria.

If the difference between the grade and the next multiple of 5 is less than 3,
round  up to the next multiple of 5. 
That is, no grade less than 38 will need rounding, since it will remain a failing grade.
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    var temp;
    for (var i = 0; i < grades.length; i++) {
        temp = grades[i];
        if ((temp + 1) % 5 === 0 && (temp + 1) >= 40) {
            console.log('true');
            grades[i] = temp + 1;
        }
        else if ((temp + 2) % 5 === 0 && (temp + 2) >= 40) {
            grades[i] = temp + 2;
        }
    }
    return grades;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
