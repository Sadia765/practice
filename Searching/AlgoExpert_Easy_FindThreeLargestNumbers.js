/*Find Three Largest Numbers
Write a function that takes in an array of at least
three integers and, without sorting the input
array, returns a sorted array of the three largest
integers in the input array.
The function should return duplicate integers if
necessary; for example, it should return
[10, 10, 12] for an input array of
[10, 5, 9, 10, 12] .*/

//Solution 1:

function findThreeLargestNumbers(array) {
    // Write your code here.
      var high = array [0]; //10->12
      var mid = array[1];//5 ->9 ->10->10
      var low = array [2];//9->5 ->9'->10
      var temp,temp1;
      //[10,5,9,10,12]->[10,9,5,10,12]
      for(var i = 1; i<array.length; i++){//loop to find high 
          if(array[i]>high){
              temp = high;
              temp1 = mid;
              high = array[i];
              mid = temp;
              low = temp1;
          }
          else if(array[i]>mid){// && i != 1){
              temp = mid;
              mid = array[i];			
              low = temp;
          }
          else if(array[i]>low && i != 1){
              low = array[i];
       }
      }
      
      return [low, mid, high];
          
  }
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  
//Solution 2:

function findThreeLargestNumbers(array) {
    // Write your code here.
      var high = array [0]; //10->12
      var mid = array[1];//5 ->9 ->10->10
      var low = array [2];//9->5 ->9'->10
      var temp,temp1;
      if(mid>high){
          temp = mid;
          mid = high;
          high = temp;
      }
      if(low>mid){
              temp = low;
              low = mid;
              mid = temp;
          if(mid>high){
              low = high;
              high = temp;
          }
      }
      for(var i = 3; i<array.length; i++){
          //array[i] can be larger than low and smaller than mid - replace low
          //array[i] can be larger than mid (& low) and smaller than high -replace mid with array[i] and low with original mid
          //array[i] can be larger than high- replace high, old high->mid and old mid becomes low
          if(array[i] > low){
              if(array[i] < mid){//high>mid>array[i]>low
                  low = array[i];
              }
              else if(array[i] > mid){
                  if(array[i]<high){ //high>array[i]>mid>low
                      temp = mid;
                      mid = array[i];
                      low = temp;
                  }
                  else if(array[i]>high){//array[i]>high>mid>low
                      temp = high;
                      temp1 = mid;
                      high = array[i];
                      mid = temp;
                      low = temp1					
                  }
                  
              } 
          }  	
      }
      return [low, mid, high];
  }
      
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  
//Solution 3:

function findThreeLargestNumbers(array) {
    // Write your code here.
      var threeLargest = [null, null, null];
      for(var i = 0; i<array.length; i++){
          update(threeLargest, array[i]);
      }
      return threeLargest;
  }
  
  function update(threeLargest, num){
      if(threeLargest[2] == null || num > threeLargest[2]){
          shift(threeLargest, num, 2);
      }
      else if(threeLargest[1] == null || num > threeLargest[1]){
          shift(threeLargest, num, 1);
      }
      else if(threeLargest[0] == null || num > threeLargest[0]){
          shift(threeLargest, num, 0);
      }
  }
  
  function shift(array, num, index){
      for(var j = 0; j<= index; j++){
          if(j == index){
              array[j] = num;
          }
          else{
              array[j] = array[j+1];
          }
      }
  }
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  