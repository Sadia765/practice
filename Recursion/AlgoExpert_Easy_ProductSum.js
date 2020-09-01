/*Product Sum
Write a function that takes in a "special" array
and returns its product sum.
A "special" array is a non-empty array that
contains either integers or other "special"
arrays. The product sum of a "special" array is
the sum of its elements, where "special" arrays
inside it are summed themselves and then
multiplied by their level of depth.
The depth of a "special" array is how far nested
it is. For instance, the depth of [] is 1 ; the
depth of the inner array in [[]] is 2 ; the
depth of the innermost array in [[[]]] is 3 .
Therefore, the product sum of [x, y] is
x + y ; the product sum of [x, [y, z]] is
x + 2 * (y + z) ; the product sum of
[x, [y, [z]]] is x + 2 * (y + 3z) .*/

//Solution 1:

function productSum(array, level = 1) {
    // Write your code here.
      var sum = 0;
      for(var i = 0; i<array.length; i++){
          if(typeof array[i] == "number"){
              sum = sum + array[i];
          }
          else{
              sum += productSum(array[i], level+1);
          }
      }
      return sum*level;
  }
  
  // Do not edit the line below.
  exports.productSum = productSum;

//Solution 2:

function productSum(array, level = 1) {
    // Write your code here.
      var sum = 0;
      for(var i = 0; i<array.length; i++){
          if(Array.isArray(array[i])){
              sum += productSum(array[i], level+1);
          }
          else{
              sum = sum + array[i];
          }
      }
      return sum*level;	
  }
  
  // Do not edit the line below.
  exports.productSum = productSum;
  