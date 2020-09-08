/*
Anna and Brian are sharing a meal at a restaurant and they agree to split the bill equally. 
However, Briant decides to order something Anna is allergic to. They decide that Anna will not
have to pay for this item.
Given an array, bill, of integers that represent the cost of ordered items, the index, k, 
of the item that Anna is allergic to, and the amount, b, that Anna contributed to the bill, 
decide if Brian calculated Anna's price correctly. 

If it is correct, print Bon Appetit. Otherwise, print the amount that Brian owes Anna.
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    var actual = 0;
    var counter = 0;
    while(counter<bill.length){
        if(counter !=k){
            actual+=bill[counter];
        }
        counter++;
    }
    actual = actual/2;
    if(actual == b){
        console.log('Bon Appetit');
    }
    else{
        console.log(b-actual);
    }
}

function main() {
    const nk = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
