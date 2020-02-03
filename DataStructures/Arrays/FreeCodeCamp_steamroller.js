/*Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  function recursivelyFlatten(array){
    for(var i = 0; i<array.length; i++){
      //var isTrue = ; 
      if(!Array.isArray(array[i])){
        newArr.push(array[i]);
      }
      else if(Array.isArray(array[i])){
        recursivelyFlatten(array[i]);
      }
    }
  }
  recursivelyFlatten(arr);
  return newArr;
}
//steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
//steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4]