/*Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  var counter = 0;
  var totalPrimeSum = 0;
  var primesDict = {};
  for(var i = 2; i<=num; i++){
    
    for(var j = 2; j<=i; j++){
      //console.log(counter);
      if(j!=i && i%j==0){
        counter +=1;
      }
    } if(counter ==0){
      primesDict[i] = true;
    }
    counter = 0;
  }console.log(primesDict);
  for(var k = 2; k<=num; k++){
    if(k in primesDict){
      totalPrimeSum+=k;
    }
  }
  return totalPrimeSum;
}

//sumPrimes(10);
sumPrimes(977)
