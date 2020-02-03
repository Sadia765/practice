//We'll pass you an array of two numbers. 
//Return the sum of those two numbers plus the sum of all the numbers between them. 
//The lowest number will not always come first.

function sumAll(arr) {
    //first let's find the minimum value in the 2 elment array. 
    var minimum;
    var maximum;
    var sum = 0;
    if( arr[0]<=arr[1]){
      minimum = arr[0];
      maximum = arr[1];
    }else{
      minimum = arr[1];
      maximum = arr[0];
    }
    //Now let's take the sum of all numbers between the minimum and maximum, inclusive.
  for(var i = minimum;i<=maximum; i++){
    sum+=i;
  }
    return sum;
  }
  
  sumAll([1, 4]);