/*Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
*/
function uniteUnique(arr) {
  var disjointUnionArray = [];
  var presentNumsInDict = {};
  for(var i = 0; i<arguments.length; i++){
    for(var j =0; j<arguments[i].length; j++){
      if(!(arguments[i][j] in presentNumsInDict)){
        disjointUnionArray.push(arguments[i][j]);
        presentNumsInDict[arguments[i][j]] = true;
      }
    }
  }
  return disjointUnionArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
