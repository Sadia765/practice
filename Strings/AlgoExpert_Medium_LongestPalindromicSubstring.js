/*Longest Palindromic Substring
Write a function that, given a string, returns its
longest palindromic substring.
A palindrome is defined as a string that's
written the same forward and backward. Note
that single-character strings are palindromes.
You can assume that there will only be one
longest palindromic substring.*/

//Solution 1:

//O(n^3) time |O(1) space
function longestPalindromicSubstring(string) {
    // Write your code here.
    var longestSubstr = '';
    for (var i = 0; i < string.length; i++) {
        for (var j = i; j < string.length; j++) {
            var currentSubstr = string.slice(i, j + 1);
            if (currentSubstr.length > longestSubstr.length && isPalindrome(currentSubstr)) {
                longestSubstr = currentSubstr;
            }
        }
    }
    return longestSubstr;
}


function isPalindrome(string) {
    // Write your code here.
    var str = string.split('');
    var pointer1 = 0;
    var pointer2 = str.length - 1;
    while (pointer1 < pointer2) {
        if (str[pointer1] != str[pointer2]) {
            return false;
        }
        pointer1 += 1;
        pointer2 -= 1;
    }
    return true;
}
// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;

//Solution 2:

//O(n^2) time |O(1) space
function longestPalindromicSubstring(string) {
    // Write your code here.
      var longestPalindrome = [0,1];
      var longest, even, odd;
      for(var i = 1; i<string.length; i++){
          even = longestPalindromicSubstringHelper(string, i-1,i);
          odd = longestPalindromicSubstringHelper(string, i-1, i+1);
          longest = even[1] - even[0] > odd[1] - odd[0] ? even : odd;
          longestPalindrome = longest[1] - longest[0] > longestPalindrome[1] - longestPalindrome[0] ? longest : longestPalindrome;
      }
      return string.slice(longestPalindrome[0], longestPalindrome[1]);
  }
  
  function longestPalindromicSubstringHelper(str, left, right){
      while(left>=0 && right<str.length){
          if(str[left] !== str[right]){
              break;
          }
          left-=1;
          right+=1;
      }
      return [left+1, right];
  }
      
  // Do not edit the line below.
  exports.longestPalindromicSubstring = longestPalindromicSubstring;
  