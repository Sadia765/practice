/*
Brie's Drawing teacher wants her to open her book to a certain page, 
which Brie can do from either the start or the end of the book. 

If Brie starts from the beginning, page 1 is always on the right side. 
So flipping page 1, will allow her to then see pages 2 and 3. 
Each page except the last page is printed on both sides. 

Given that the book has n pages and Brie wants to turn to page p, 
print the least number of page turns she needs to do to get to page p.
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
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    var begin = 2;
    var end = n-1;
    var beginTurned = 1;
    var endTurned = 1;
    if(n%2==1&& p%2==0){
        endTurned = 0;
    }
    if(p==1 ||p==n){
        return 0;
    }
    else if(n%2 ==1 && p==n-1){
        return 0;
    }
    while(begin+2<=p){
        begin+=2
        beginTurned+=1;
    }
    while(end-2>=p){
        end-=2;
        endTurned+=1; 
    }
    return Math.min(beginTurned, endTurned);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
