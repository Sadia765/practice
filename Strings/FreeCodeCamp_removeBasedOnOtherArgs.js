//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
  // Remove all elements from the initial array that are of the same value as these arguments.

  function destroyer(arr) {
    // Remove all the values
    var argumentsDict = {};
    var newArr = []
    for(var i =1; i <arguments.length; i++ ){
      argumentsDict[arguments[i]] = true;
    }
    for(var j = 0; j< arr.length; j++){
      if(!(arr[j] in argumentsDict)){
        newArr.push(arr[j]);
      }
    }
    return newArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);