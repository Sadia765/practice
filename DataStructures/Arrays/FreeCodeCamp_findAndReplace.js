//Find and Replace. Replace the second parameter with the third parameter in the given sentence(i.e. str).

function myReplace(str, before, after) {
  var arr = str.split(' ');
  for(var i = 0; i<str.length; i++){
    if(arr[i] == before){
      if(arr[i][0] == arr[i][0].toUpperCase()){
          arr[i] = after[0].toUpperCase()+after.split('').slice(1).join('');
      }
      else{
        arr[i] = after;
      }
    }
  }
  return arr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");