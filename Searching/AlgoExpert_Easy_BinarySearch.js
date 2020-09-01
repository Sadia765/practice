/*Binary Search
Write a function that takes in a sorted array of
integers as well as a target integer. The function
should use the Binary Search algorithm to
determine if the target integer is contained in
the array and should return its index if it is,
otherwise -1 .
If you're unfamiliar with Binary Search, we
recommend watching the Conceptual Overview
section of this question's video explanation
before starting to code.*/

//Solution 1:

function binarySearch(array, target) {
    // Write your code here.
      var pointer = Math.ceil(array.length/2);
      var beginPointer;
      var temp;
      if(target<array[pointer]){
          beginPointer = 0;
      }
      else{
          beginPointer = array.length-1;
      }
      while(Math.abs(beginPointer-pointer)>0){
          if(target == array[pointer]){//same
              return pointer;
          }
          else if(target < array[pointer]){//move left<-
              temp  = pointer;
              pointer = pointer - Math.floor(Math.abs(pointer-beginPointer)/2);
        beginPointer = temp;			
          }
          else if(target > array[pointer]){//move right->
              temp  = pointer;
              pointer = pointer + Math.floor(Math.abs(pointer-beginPointer)/2);
              beginPointer = temp;
          }
      }
  //  console.log(pointer);
      //	Edge case? where pointer+1 is the last elm in array.
    if(array[pointer+1] == target){
      return pointer+1;
    }
      return -1;
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  
//Solution 2:

function binarySearch(array, target) {
    // Write your code here.
      return binarySearchHelp(array, target, 0, array.length-1);
  }
  
  function binarySearchHelp(array, target, left, right){
      if(left > right){
          return -1;
      }
      middle = Math.floor((left+right)/2);
      if(target ==  array[middle]){
          return middle;
      }
      else if(target > array[middle]){
          return binarySearchHelp(array, target, middle+1, right);
      }
      else{//target<array[middle]
          return binarySearchHelp(array,target, left, middle-1);
      }
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  
//Solution 3:

function binarySearch(array, target) {
    // Write your code here.
      var left = 0;
      var right = array.length-1;
      while(left<=right){
          middle = Math.floor((left+right)/2);
          if(target ==  array[middle]){
              return middle;
          }
          else if(target > array[middle]){
              left = middle+1;
          }
          else{//target<array[middle]
              right = middle-1;
          }
      }
      return -1;
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  