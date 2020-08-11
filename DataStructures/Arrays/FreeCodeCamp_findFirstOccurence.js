//Find the first element in the array where the function evaluates to true and return that element. 
function findElement(arr, func) {
  let num = 0;
  for(let num = 0; num<arr.length; num++){
    if(func(arr[num])== true){
      return arr[num];
    }
  } 
}

findElement([1, 2, 3, 4], num => num % 2 === 0);