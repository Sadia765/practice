/*
When you select a contiguous block of text in a PDF viewer, 
the selection is highlights each word, separately, with a blue rectangle.

Given a heights array (in mm), h, of all the letters in the alphabet and 
a string, word, that is to be highlighted, find the highlighted area of the string.
Each letter is 1 mm wide. 
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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    var alphabet = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25 };
    var wordAr = word.split('');
    var maxHeight = h[alphabet[wordAr[0]]];
    var seen = {};
    seen[wordAr[0]] = true;
    for (var i = 1; i < wordAr.length; i++) {
        if (!(wordAr[i] in seen)) {
            seen[wordAr[i]] = true;
            if (h[alphabet[wordAr[i]]] > maxHeight) {
                maxHeight = h[alphabet[wordAr[i]]];
            }
        }
    }
    return wordAr.length * maxHeight;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    let result = designerPdfViewer(h, word);

    ws.write(result + "\n");

    ws.end();
}
