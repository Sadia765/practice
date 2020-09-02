/* Spiral Traverse
Write a function that takes in an n x m twodimensional array (that can be square-shaped
when n == m) and returns a one-dimensional
array of all the array's elements in spiral order.
Spiral order starts at the top left corner of the
two-dimensional array, goes to the right, and
proceeds in a spiral pattern all the way until
every element has been visited.
*/

//Solution 1:

function spiralTraverse(array) {
    // Write your code here.
      var top = 0;
      var bottom = array.length-1;
      var left = 0;
      var right = array[0].length-1;
      var spiral = [];
    while(top<=bottom && left<=right){
      //console.log(spiral);
      //console.log('top:', top, 'bottom:',bottom,'left:', left, 'right:', right);
        for(var j = left; j<=right;j++){//iterate over columns
            spiral.push(array[top][j]);	
        }
        for(var i = top+1; i<=bottom; i++){//iterate over rows
            spiral.push(array[i][right]);
        }
      if(top!=bottom){
        for(var j = right-1; j>= left; j--){//iterate over columns
              spiral.push(array[bottom][j]);
          }
      }
      if(left!=right){
        for(var i = bottom-1; i>= top+1; i--){//iterate over rows
            spiral.push(array[i][left])
          }
      }
        top+=1;
        right-=1;
        bottom-=1;
        left+=1;
      
    }
    
       return spiral;
  }
  
  // Do not edit the line below.
  exports.spiralTraverse = spiralTraverse;
  
//Solution 2:

function spiralTraverse(array) {
    // Write your code here.
      var spiral = [];
      spiralHelper(array, 0, array.length-1, 0, array[0].length-1, spiral);
      return spiral;	
  }
  
  function spiralHelper(array, top, bottom, left, right, spiral){
      if(top > bottom || left > right){
          return;
      }
      for(var j = left; j<=right;j++){//iterate over columns
           spiral.push(array[top][j]);	
       }
      for(var i = top+1; i<=bottom; i++){//iterate over rows
        spiral.push(array[i][right]);
      }
    if(top!=bottom){
        for(var j = right-1; j>= left; j--){//iterate over columns
              spiral.push(array[bottom][j]);
         }
    }
    if(left!=right){
        for(var i = bottom-1; i>= top+1; i--){//iterate over rows
          spiral.push(array[i][left])
        }
    }
      spiralHelper(array, top+1, bottom-1, left+1, right-1, spiral);
  }
  // Do not edit the line below.
  exports.spiralTraverse = spiralTraverse;
  

