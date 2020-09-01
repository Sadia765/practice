/*Nth Fibonacci
The Fibonacci sequence is dened as follows:
the first number of the sequence is 0 , the
second number is 1 , and the nth number is
the sum of the (n - 1)th and (n - 2)th numbers.
Write a function that takes in an integer n
and returns the nth Fibonacci number.
Important note: the Fibonacci sequence is
often defined with its first two numbers as
F0 = 0 and F1 = 1 . For the purpose of
this question, the first Fibonacci number is
F0 ; therefore, getNthFib(1) is equal to
F0 , getNthFib(2) is equal to F1 , etc..*/

//Solution 1:

function getNthFib(n) {
    // Write your code here.
      var lastTwoFibs = [0,1];
      if(n ==1 || n==2){
          return n-1;
      }
      var counter = 3;
      var nextFib;
      while(counter<=n){
          nextFib = lastTwoFibs[0]+lastTwoFibs[1];
          lastTwoFibs.shift();
          lastTwoFibs.push(nextFib);
          counter+=1;
      }	
      return lastTwoFibs[1];
      }
  
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  
//Solution 2:

function getNthFib(n) {
    // Write your code here.
      dictFib = {1:0, 2:1}
      if(n ==1 || n==2){
          return dictFib[n];
      }
      else{
          for(var i = 3; i<=n;i++){
              dictFib[i] = dictFib[i-1] + dictFib[i-2];
          }
          return dictFib[n];
      }
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  
//Solution 3:

function getNthFib(n) {
    // Write your code here.
      if(n ==1 || n==2){
          return n-1;
      }
      else{
          return getNthFib(n-1)+getNthFib(n-2);
      }
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  