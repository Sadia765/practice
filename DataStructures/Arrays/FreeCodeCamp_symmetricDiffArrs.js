/*Compare two arrays and return a new array 
  with any items only found in one of the two given arrays,
   but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
    var newArr = [];
    var dictarr1 = [];
    var dictarr2 = []
    for(var i =0; i<arr1.length; i++){
      //newArr.push(arr1[i]);
      dictarr1[arr1[i]] = true;
    }
    for(var j = 0; j<arr2.length; j++){
      //newArr.push(arr2[j]);
      dictarr2[arr2[j]] = true;
    }
    for(var k = 0; k<arr1.length; k++){
      //, arr2.length); k++){
      if(!(arr1[k] in dictarr2)){
        newArr.push(arr1[k]);
        console.log(newArr);
      }
    }
  for(var l = 0; l<arr2.length; l++){
    if(!(arr2[l] in dictarr1)){
        newArr.push(arr2[l]);
      }
  }
    
    // Same, same; but different.
    return newArr;
  }