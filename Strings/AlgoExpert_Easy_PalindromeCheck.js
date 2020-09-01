/*Palindrome Check
Write a function that takes in a non-empty
string and that returns a boolean representing
whether the string is a palindrome.
A palindrome is defined as a string that's
written the same forward and backward. Note
that single-character strings are palindromes.*/

//Solution 1:

function isPalindrome(string) {
    // Write your code here.
      var str = string.split('');
      var pointer1 = 0;
      var pointer2 = str.length-1;
      while(pointer1<pointer2){
          if(str[pointer1] != str[pointer2]){
              return false;
          }
          pointer1+=1;
          pointer2-=1;
      }
      return true;
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  