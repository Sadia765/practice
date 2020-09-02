/*River Sizes
You're given a two-dimensional array (a matrix)
of potentially unequal height and width
containing only 0 s and 1 s. Each 0
represents land, and each 1 represents part
of a river. A river consists of any number of 1
s that are either horizontally or vertically
adjacent (but not diagonally adjacent). The
number of adjacent 1 s forming a river
determine its size.
Note that a river can twist. In other words, it
doesn't have to be a straight vertical line or a
straight horizontal line; it can be L-shaped, for
example.
Write a function that returns an array of the
sizes of all rivers represented in the input
matrix. The sizes don't need to be in any
particular order.*/

//Solution 1:

function riverSizes(matrix) {
    // Write your code here.
      var rivers = [];
      var visited = matrix.map(row => row.map(value =>false));
      for(var i = 0; i<matrix.length; i++){
          for(var j = 0; j<matrix[0].length;j++){
              if(visited[i][j]){
                  continue;
              }
              traverseRiver(i,j,matrix,visited, rivers);
          }
      }
              return rivers;
  }
  
  function traverseRiver(i,j,matrix,visited,rivers){
      var riverSize = 0;
      var indicesToTraverse = [[i,j]];
      while(indicesToTraverse.length !== 0){
          var currentIndex = indicesToTraverse.pop();
          var i = currentIndex[0];
          var j = currentIndex[1];
          if(visited[i][j]){
              continue;
          }
          visited[i][j] = true;
          if(matrix[i][j] === 0){
              continue;
          }
          riverSize+=1;
          var unvisitedIndices = getUnvisitedIndices(i,j,matrix,visited);
          for(var index of unvisitedIndices){
              indicesToTraverse.push(index);
          }
      }
      if(riverSize>0){
          rivers.push(riverSize);
      }
  }
  
  function getUnvisitedIndices(i,j,matrix,visited){
      unvisitedIndices = [];
      if(i>0 && !visited[i-1][j]){
          unvisitedIndices.push([i-1,j]);
      }
      if(i<matrix.length-1 && !visited[i+1][j]){
          unvisitedIndices.push([i+1,j]);
       }
      if(j>0 && !visited[i][j-1]){
          unvisitedIndices.push([i,j-1]);
      }
      if(j<matrix[0].length-1 && !visited[i][j+1]){
          unvisitedIndices.push([i,j+1]);		 
       }
      return unvisitedIndices;
  }
  // Do not edit the line below.
  exports.riverSizes = riverSizes;
  