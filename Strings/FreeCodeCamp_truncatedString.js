//Return a truncated string with "..." ending if string is longer than num characters.
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncateStr = "";
  if(num<str.length){
    for( var i = 0; i <num;i++){
      truncateStr+=str[i];
  }return truncateStr+"...";
  }else{
    return str;
  }
  
}

//truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) 
//should return "A-tisket a-tasket A green and yellow basket".