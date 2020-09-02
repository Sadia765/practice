/*Move Element To End
You're given an array of integers and an integer.
Write a function that moves all instances of that
integer in the array to the end of the array and
returns the array.
The function should perform this in place (i.e., it
should mutate the input array) and doesn't
need to maintain the order of the other
integers.
*/

//Solution 1:

function moveElementToEnd(array, toMove) {
    // Write your code here.
      // 0,1,2,3,4,5,6,7
    //[12, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 5], 5 
      var left = 0;
      var right = array.length-1;
      while(left<right){
        while(left<right && array[right] == toMove){
            right-=1;
        }
          if(array[left] == toMove){
              swap(array, left, right);
          }
          left+=1; 	
      }
      return array;
  }
  
  function swap(array, i, j){
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  


