//Title Case A Sentence
function titleCase(str) {
    var wantLowerCase = {'A':'a', 'B':'b', 'C':'c', 'D':'d', 'E':'e', 'F':'f', 'G':'g', 'H':'h', 'I':'i', 'J':'j', 'K':'k', 'L':'l', 'M':'m', 'N':'n', 'O':'o', 'P':'p', 'Q':'q', 'R':'r', 'S':'s', 'T':'t', 'U':'u', 'V':'v', 'W':'w', 'X':'x', 'Y':'y', 'Z':'z'};
    var wantUpperCase = {'a':'A', 'b':'B', 'c':'C', 'd':'D', 'e':'E', 'f':'F', 'g':'G', 'h':'H', 'i':'I', 'j':'J', 'k':'K', 'l':'L', 'm':'M', 'n':'N','o':'O', 'p':'P', 'q':'Q', 'r':'R', 's':'S','t':'T', 'u':'U', 'v':'V', 'w':'W', 'x':'X', 'y':'Y', 'z':'Z'} 
    
    var newStr = "";
    var listStr = str.split(" ");
    console.log(listStr);
    var newSubstring;
    for(var i = 0; i<listStr.length; i++){
        newSubstring = "";
      for(var j = 0; j<listStr[i].length; j++){
        if(j==0){
          if(listStr[i][j] in wantLowerCase){
            newSubstring+=listStr[i][j];
          }else{
            newSubstring+=wantUpperCase[listStr[i][j]];
          }
        }else if(!(listStr[i][j] in wantUpperCase)&&!(listStr[i][j] in wantLowerCase)){
          newSubstring+=listStr[i][j];
        }
        else{
          if(listStr[i][j] in wantUpperCase){
            newSubstring+=listStr[i][j];
          }else{
            newSubstring+=wantLowerCase[listStr[i][j]];
          }
  
        }
  
  
        }listStr[i] = newSubstring;
      }
      for(var k = 0; k<listStr.length; k++){
        if(k!=listStr.length-1){
          newStr+=listStr[k]+" ";
        }else{
          newStr+=listStr[k];
        }
      }
    
    return newStr;
  }