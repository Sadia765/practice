/*Kadane's Algorithm
Write a function that takes in a non-empty array
of integers and returns the maximum sum that
can be obtained by summing up all of the
integers in a non-empty subarray of the input
array. A subarray must only contain adjacent
numbers.*/

//Solution 1:

//O(N) time | O(1) space
function kadanesAlgorithm(array) {
    // Write your code here.
      var maxEndsHere=array[0];
      var maxSum = array[0];
      for(var i = 1;i<array.length; i++){
          maxEndsHere = Math.max(maxEndsHere+array[i], array[i]);
          maxSum = Math.max(maxEndsHere, maxSum);
      }
      return maxSum;
  }
  
  // Do not edit the line below.
  exports.kadanesAlgorithm = kadanesAlgorithm;
  