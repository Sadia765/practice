//First sort list and then get index of where to input num into array.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  if(arr.length ==0){
    return 0;
  }else{
    //First Let us sort Array. By inputing elements in new Array in order.
    
    var arr1 = [];
    var temp; 
    for( var j = 0; j<arr.length; j++){
      for( var k = 0; k<arr.length; k++){
        if(arr[k]>arr[k+1]){
          temp = arr[k+1];
          arr[k+1] = arr[k];
          arr[k] = temp; 
        }
      }
    }
    for(var i  =0 ; i<arr.length; i++){
      if(i == 0 && num<=arr[0]){
      //arr.unshift(num);
        return i;
      }else if(i==arr.length-1 && num>=arr[i]){
      //arr.push(num);
        return i+1;
      }else{
        if(num>=arr[i-1] && num<=arr[i]){
        //arr.splice(i,0,num);
          return i;
      }
    } 
  }
  }
  return num;
}

getIndexToIns([40, 60], 50);
