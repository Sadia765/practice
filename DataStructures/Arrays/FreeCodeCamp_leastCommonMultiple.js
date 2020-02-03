/*Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order. 
*/

function smallestCommons(arr) {
  var smallest = arr[0];
  var largest = arr[1];
  if (arr[0] > arr[1]) {
    smallest = arr[1];
    largest = arr[0];
  }
  var multiple;
  var multiplier = 1;
  var counter = 0;
  while (counter != largest - smallest + 1) {
    counter = 0;
    multiple = largest * multiplier;
    for (var i = smallest; i <= largest; i++) {
      if (multiple % i == 0) {
        counter += 1;
      }
      else {
        break;
      }
    }
    multiplier += 1;
  }
  return multiple;
}


smallestCommons([1, 5]);