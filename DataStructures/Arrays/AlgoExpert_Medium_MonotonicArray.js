/*Monotonic Array
Write a function that takes in an array of
integers and returns a boolean representing
whether the array is monotonic.
An array is said to be monotonic if its elements,
from left to right, are entirely non-increasing or
entirely non-decreasing.
Note that empty arrays and arrays of one
element are monotonic.
*/

//Solution 1:

function isMonotonic(array) {
    // Write your code here.
      //[-1,-5, -10, -1100, -1100, -1101, -1102, -9001]
      if(isNonInc(array)){
          return true;
      }
      return isNonDec(array);
  }
  
  function isNonInc(array){//not inc->dec
      for(var i = 1; i<array.length; i++){
          //if at some point inc, return false		[2,3]
          if(array[i] > array[i-1]){
              return false;
          }
      }
      return true;
  }
  
  function isNonDec(array){//not dec->inc
      for(var i = 1; i<array.length; i++){
          //if at some point dec, return false	[3,2]	
          if(array[i] < array[i-1]){
              return false;
          }
      }
      return true;
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  
//Solution 2:

function isMonotonic(array) {
    // Write your code here.
      //[-1,-5, -10, -1100, -1100, -1101, -1102, -9001]
      if(array.length<=2){
          return true;
      }
      var direction = array[1] - array[0];
      for(var i = 2; i<array.length; i++){
          if(direction == 0){
              direction = array[i] - array[i-1]
          }
          if(notMonotonic(direction, array[i-1], array[i])){
              return false;
          }
      }
      return true;
  }
  
  function notMonotonic(direction, previousNum, currentNum){
      var difference = currentNum - previousNum;
      if(direction > 0){
          return difference < 0;	
      }
      return difference > 0;
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  
//Solution 3:

function isMonotonic(array) {
    // Write your code here.
      isNonDec = true;
      isNonInc = true;
      for(var i = 1; i<array.length; i++){
          if(array[i] < array[i-1]){//[2,3]
              isNonDec = false;
          }
          if(array[i] > array[i-1]){//[3,2]
              isNonInc = false;
          }
      }
      return isNonInc || isNonDec;
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  
