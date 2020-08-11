function nQueens(n, allBoards){
    var queens = [];
    if(n<=0){
      return null; 
    }
    function colPlacement(col){
      if( col>= n){
        return true;
      }
      var row = 0;
      while(row<n){
        queens.push([row,col]);
        if (isSafe([row,col]) && colPlacement(col+1)){
          return true;
        }
        queens.pop();
        row++;
      }
      return false;
    }
    function isSafe([row,col]){
      for(var i = 0; i<queens.length-1; i++){
        var rowdiff = Math.abs(queens[i][0] - row)
        var coldiff = Math.abs(queens[i][1]- col)
        if(row === queens[i][0]){
          return false;
        }
        if(rowdiff ===coldiff){
          return false;
        }
      }
      return true;
    }
    //calls all defined functions above!
    if(colPlacement(0)){
      return queens;
    }
    else{
      return null;
    }
  }
  console.log('n: -1', nQueens(-1));
  console.log('n: 1', nQueens(1));
  console.log('n: 4', nQueens(4));
  
  