/*Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.*/
  function translatePigLatin(str) {
    if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u') {
      return str + 'way';
    }
    var arrLetters = str.split('');
    for (var i = 1; i < arrLetters.length; i++) {
      if (arrLetters[i] == 'a' || arrLetters[i] == 'e' || arrLetters[i] == 'i' || arrLetters[i] == 'o' || arrLetters[i] == 'u') {
        return arrLetters.slice(i).join('') + arrLetters.slice(0, i).join('') + 'ay';
      }
    }
    return str + 'ay';
  }
  
  translatePigLatin("consonant");

  function translatePigLatin(str) {
    var vowelsDict = {
      a: true, e: true, i: true, o: true, u: true
    };
    if (str[0] in vowelsDict) {
      return str + 'way';
    }
    var arrLetters = str.split('');
    for (var i = 1; i < arrLetters.length; i++) {
      if (arrLetters[i] in vowelsDict) {
        return arrLetters.slice(i).join('') + arrLetters.slice(0, i).join('') + 'ay';
      }
    }
    return str + 'ay';
  }
  
  translatePigLatin("consonant");
