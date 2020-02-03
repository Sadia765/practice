/*Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/

function sumFibs(num) {
  var fibDict = {};
  var totalFibSum = 0;
  var currentFibNum;
  for(var i=1;i<=num; i++){
    if(i==1 || i==2){
      fibDict[i] = 1;
    }
    else{
      currentFibNum = fibDict[i-1]+fibDict[i-2];
      if(currentFibNum<=num){
        fibDict[i] = currentFibNum;
      }
    }
  } console.log(fibDict);
  for(var j = 1; j<=Object.keys(fibDict).length; j++){
    if(fibDict[j]%2==1){
      totalFibSum+=fibDict[j];
     }
   }
  return totalFibSum;
}

//sumFibs(1) //should return a number.
//sumFibs(1000) //should return 1785.
//sumFibs(4000000) //should return 4613732.
//sumFibs(4) //should return 5.
//sumFibs(75024) //should return 60696.
//sumFibs(75025) //should return 135721.