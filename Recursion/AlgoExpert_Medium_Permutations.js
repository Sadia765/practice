/*Permutations
Write a function that takes in an array of unique
integers and returns an array of all
permutations of those integers in no particular
order.
If the input array is empty, the function should
return an empty array.*/

//Solution 1:

//Upper Bound O(n!*n^2) time, n! leaves, for each leaf had a branch of n nodes, i.e. n calls to get them
//and for most calls, go into for loop and do slicing which takes O(n) time  
//O(n!*n) space, n! permutations, each of length n
function getPermutations(array) {
    // Write your code here.
      var perms = [];
      permHelper(array, [], perms);
      return perms;
  }
  
  function permHelper(array, current, perms){
      if(array.length === 0 && current.length !== 0){
          perms.push(current);
      }
      else{
          for(var i = 0; i < array.length; i++){
              var newArr = array.slice(0,i).concat(array.slice(i+1)); 
              var newPerm = current.concat([array[i]]);
              permHelper(newArr, newPerm, perms);
          }
      }
  }
  // Do not edit the line below.
  exports.getPermutations = getPermutations;
  
  //Solution 2:

  //O(n!*n) time | O(n!*n)
function getPermutations(array) {
    // Write your code here.
      var perms = [];
      permHelper(0, array, perms);
      return perms;
  }
  
  
  //O(n*n!) time, same # calls, i.e. n*n! calls, but each call only has swaps, i.e. O(1) operations.
  //O(n*n!) space, n! permutations where each is of length n.
  function permHelper(i, array, perms){
      if(i === array.length-1){
          perms.push(array.slice())
      }
      else{
          for(var j = i; j < array.length; j++){
              swap(i,j,array);
              permHelper(i+1, array, perms);
              swap(i,j,array);
          }		
      }
  }
  
  function swap(i, j, array){
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  
  // Do not edit the line below.
  exports.getPermutations = getPermutations;
  