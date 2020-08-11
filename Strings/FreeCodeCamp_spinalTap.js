//Intermediate Algorithm Scripting: Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
  var spinalCase = function(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
      if (i == str.length - 1) {
        newStr += str[i].toLowerCase();
      }
      else if (str[i + 1] !== '-' && str[i + 1] !== '_' && str[i + 1] !== ' ') {
        if (str[i + 1] != str[i + 1].toUpperCase()) {
          newStr += str[i].toLowerCase();
        }
        else {
          newStr += str[i].toLowerCase() + '-';
        }
      }
      else if (str[i + 1] == ' ' || str[i + 1] == '_' || str[i + 1] == '-') {
        newStr += str[i].toLowerCase() + '-';
        i = i + 1;
      }
      else if (str[i + 1] == str[i + 1].toUpperCase()) {
        newStr += str[i].toLowerCase() + '-';
      }
      console.log(newStr);
    }
    return newStr;
  }
  spinalCase('This_i');
  spinalCase('This Is Spinal Tap');
  var b = 'I'
  console.log(b == b.toUpperCase());
  console.log('smaller case:', spinalCase('sI'));
  spinalCase("thisIsSpinalTap");
  spinalCase("AllThe-small Things")