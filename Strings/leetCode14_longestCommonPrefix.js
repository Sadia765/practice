//#14 Longest commom prefix

 var longestCommonPrefix = function(strs) {
  var commonPrefix = "";
  if (strs.length != 0) {
    var shortest = strs[0];
    for (i = 1; i < strs.length; i++) {
      if (strs[i].length < shortest.length) {
        shortest = strs[i];
      }
    }
    for (var j = 0; j < shortest.length; j++) {
      var currentLetter = shortest[j];
      for (var k = 0; k < strs.length; k++){
        if( currentLetter !== strs[k][j]){
          return commonPrefix;
        }
      }
      commonPrefix+= currentLetter;
      // if (strs[0][j] == strs[1][j] && strs[1][j] == strs[2][j]) {
      //   commonPrefix += strs[0][j];
      // } else {
      //   return commonPrefix;
      // }
    }
  }
  return commonPrefix;
};