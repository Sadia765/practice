//Repeat a string repeat a string. Repeat the given string, str, num number of times.
function repeatStringNumTimes(str, num) {
  // repeat after me
  var new_str = "";
  if(num<=0){
    return new_str;
  }else{
    for(var i = 0; i<num; i++){
      new_str +=str;
    } return new_str;
  }
  //return str;
}

repeatStringNumTimes("*", 3); //should return "***".
//repeatStringNumTimes("abc", 3); //should return "abcabcabc".
//repeatStringNumTimes("abc", 4); //should return "abcabcabcabc".
//repeatStringNumTimes("abc", 1); //should return "abc".
//repeatStringNumTimes("*", 8); //should return "********".
//repeatStringNumTimes("abc", 3);
