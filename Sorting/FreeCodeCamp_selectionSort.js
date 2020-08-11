// Write Function for Selection Sort.
//This code must be fixed. It gives and undefined as the last entry of the array.
function selectionSort(array) {
  // change code below this line
//https://www.youtube.com/watch?v=3hH8kTHFw2A
var minIndex = 0;
var replaceIndex;
var minPointer;// = array[minIndex];
var firstElmUnsortedArray;// = minPointer;
while(minIndex!= array.length-1 ){
  minPointer = array[minIndex];
  firstElmUnsortedArray = minPointer;
  for(var i = minIndex+1; i<array.length-1; i++){
    if(array[i]<minPointer){
      replaceIndex = i;
      minPointer = array[i];
    }
  }console.log(array); 
  temp = minPointer;
  array[replaceIndex] = array[minIndex];
  array[minIndex] = temp;
  minIndex++;
  
}
  return array;
  // change code above this line
}

selectionSort([1, 4, 2, 8]);
//selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
