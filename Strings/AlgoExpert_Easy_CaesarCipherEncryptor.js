/*Caesar Cipher Encryptor
Given a non-empty string of lowercase letters
and a non-negative integer representing a key,
write a function that returns a new string
obtained by shifting every letter in the input
string by k positions in the alphabet, where k is
the key.
Note that letters should "wrap" around the
alphabet; in other words, the letter z shifted
by one returns the letter a .*/

//Solution 1:

function caesarCipherEncryptor(string, key) {
    // Write your code here.
      var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var strArr = string.split('');
      for(var i =0; i<strArr.length; i++){
          strArr[i] = alphabet[(alphabet.indexOf(strArr[i])+key) % alphabet.length];
      }
      return strArr.join('');
      
      
  }
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
  