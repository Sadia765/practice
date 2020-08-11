//Return true if the string in the first element of the array
//contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  var dictionaryWord1= {};
  for(var i = 0; i<arr[0].length; i++){
    dictionaryWord1[arr[0][i].toLowerCase()] = true; 
  }
  for(var j = 0; j<arr[1].length; j++){
    if(!(arr[1][j].toLowerCase() in dictionaryWord1)){
      return false;
    }
  }
  return true;
  }
  
  mutation(["hello", "hey"]);