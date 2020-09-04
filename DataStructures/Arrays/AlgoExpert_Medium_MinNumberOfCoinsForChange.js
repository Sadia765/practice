/*Min Number Of Coins For Change
Given an array of positive integers representing
coin denominations and a single non-negative
integer n representing a target amount of
money, write a function that returns the
smallest number of coins needed to make
change for (to sum up to) that target amount
using the given coin denominations.
Note that you have access to an unlimited
amount of coins. In other words, if the
denominations are [1, 5, 10] , you have
access to an unlimited amount of 1 s, 5 s,
and 10 s.
If it's impossible to make change for the target
amount, return -1 .*/

//Solution 1:

//O(n) space | O(nd) time, where d is the number of denominations we have.
function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
      var minCoins = new Array(n+1).fill(Infinity);
      minCoins[0] = 0;
      for(var i = 0; i < denoms.length; i++){
          for(var j = 0; j < n+1; j++){
              if(denoms[i] <= j){
                  minCoins[j] = Math.min(minCoins[j], minCoins[j - denoms[i]] + 1);
              }
          }
      }
      return minCoins[n] !== Infinity ? minCoins[n] : -1;
      
      
  }
  
  // Do not edit the line below.
  exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
  