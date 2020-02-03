 //Wherefore Art Thou
/*Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument).
Each name and value pair of the source object has to be present in the object from the collection
 if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument),
 because it contains the name and its value, that was passed on as the second argument.*/

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    for(var j = 0; j<collection.length; j++){
      var count = 0;
      //for every object in collection
      for(var key in source){
        //check if key is in an obeject, e.g. collection[j], and if its value corresponds to the given dictionary's value at key.   
        if(key in collection[j] && source[key] == collection[j][key]){
          //console.log(key, source[key])
          count++;
          }
      }
      if(count == Object.keys(source).length){
        arr.push(collection[j]);
      }
    }  
    return arr;
  }