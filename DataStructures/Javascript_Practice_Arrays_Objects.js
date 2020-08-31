// JS Practice

/*
Two different types of data structures:
 -Arrays []
 -Objects {}

*/

/*
ARRAYS

*ordered with index starting at 0
*signified by square brackets

How to loop over them?

What represents each element?


*/

/*
OBJECTS

*not ordered
*signified by curly brackets

How to loop over them?

What represents each element?


*/

/*
FUNCTIONS

*syntax is:
    function(){

    }
*ES6 has double arrow syntax:
    () => {

    }

*/

var arr1 = [1, 34, 3, 5, 27];

var arr1 = [1, 34, 3, 5, 27];
console.log(arr1);
console.log(arr1[1]);

// 1. Print each value to console
function printEachElement(arr){
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}
printEachElement(arr1);

// 2. Return how many numbers are even
function printNumEvenElements(arr){
  var j = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i]%2===0){
      j++;
    }
  }
  return j;
}
console.log(printNumEvenElements(arr1));
//Make a list of all even elements
function evenElementsList(arr){
  newArr = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i]%2===0){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(evenElementsList(arr1));

// 3. Add number 55 to the end and then print out the array
arr1.push(55);
console.log(arr1);

// 4. Remove that element now
arr1.pop();
console.log(arr1);

var carObj1 = {
    color: 'red',
    year: 1991,
    make: 'Honda',
    model: 'Accord'
};

// 1. Print each value to console
for (var prop1 in carObj1) {
    console.log(prop1, carObj1[prop1]);
  }
  console.log(carObj1['year']);
  console.log(carObj1.year);
// 2. Add isAutomatic property to obj
  carObj1.isAutomatic = true;
  carObj1['isTopSpeed'] = false;
  console.log(carObj1); 
// 3. Delete isAutomatic property
  

// NESTED DATA STRUCTURES

var nestedDataStructure = [{
    name: 'John',
    age: 10
}, {
    name: 'Don',
    age: 30
}, {
    name: 'Jim',
    age: 20
}, {
    name: 'Rob',
    age: 28
}, ];

// 1. Return new array with everyone's name that's at least than 20 y/o
function peopleAtLeast20(arrObj){
    newArrObj = []
    for(var i =0; i<arrObj.length; i++){
      if(arrObj[i]['age']>=20){
        newArrObj.push(arrObj[i]['name']);
      }
    }
    return newArrObj;
  }
  peopleAtLeast20(nestedDataStructure);
  

var nestedDataStructure = [{
    name: 'John',
    age: 10,
    classes: {
        math: 95,
        science: 67,
        socialStudies: 80
    }
}, {
    name: 'Don',
    age: 30,
    classes: {
        math: 70,
        science: 67,
        socialStudies: 98
    }
}, {
    name: 'Jim',
    age: 20,
    classes: {
        math: 95,
        science: 78,
        socialStudies: 80
    }
}, {
    name: 'Rob',
    age: 28,
    classes: {
        math: 55,
        science: 97,
        socialStudies: 90
    }
}, ];

// 1. Return new array with everyone's name that's at least than 20 y/o
function peopleAtLeast20(arrObj){
  newArrObj = []
  for(var i =0; i<arrObj.length; i++){
    if(arrObj[i]['age']>=20){
      newArrObj.push(arrObj[i]['name']);
    }
  }
  return newArrObj;
}
peopleAtLeast20(nestedDataStructure);

// 2. Return a new array with tuples of everyone's name and the name of their best subject
 
/*WAY ONE USES INEQUALITIES AND THE EXACT SUBEJECT NAMES IN THE GIVEN OBJECT. ISSUE? CAN ONLY USE THIS CODE ON OBJECTS THAT HAVE THESE AND ONLY THESE KEYS. */
//18 LINES
function nameAndBestSubjectInequalities(arrObj){
    newArr = [];
    for(var i= 0; i< arrObj.length; i++){
      classPlusScores = arrObj[i].classes; //Object!!
      var mathScore = classPlusScores['math'];
      var scienceScore = classPlusScores['science'];
      var socialStudiesScore = classPlusScores['socialStudies'];
      if(mathScore >= scienceScore && mathScore>= socialStudiesScore){
          newArr.push([arrObj[i].name, 'math']);
      }
      if(scienceScore>= mathScore && scienceScore >= socialStudiesScore){
          newArr.push([arrObj[i].name, 'science']);
        }
      if(socialStudiesScore>= mathScore && socialStudiesScore>= scienceScore){
          newArr.push([arrObj[i].name, 'socialStudies']);
      } 
    }
    return newArr
  }
  
  /*WAY TWO DOES NOT USE THE EXACT CLASS NAMES IN THE GIVEN OBJECT. ISSUE? THE FOR..IN FOR LOOP IS USED TWICE. SURELY WE CAN REDUCE THIS CODE SO THAT IT USES THIS FOR LOOP ONCE.*/
  //22 LINES
  function nameAndBestSubjectWOClassNames(arrObj){
    newArr = [];
    for(var i= 0; i< arrObj.length; i++){
      classPlusScores = arrObj[i].classes; //Object!!
      miniList = [];
      for (var prop1 in classPlusScores) {
        miniList.push(classPlusScores[prop1]);
    } 
      var maximum = 0; 
      for(var j = 0; j< miniList.length; j++){
      if(miniList[j]>= maximum){
        maximum = miniList[j];
      }
    }
      for (var prop1 in classPlusScores) {
        if(maximum === classPlusScores[prop1]){
          var bestSubject= prop1;
        }    
    } 
      newArr.push([arrObj[i].name, bestSubject]);
    }
    return newArr
  }
  
  /*WAY THREE IS A MORE EFFICIENT VERSION OF WAY TWO BECAUSE IT COMBINES THE TWO FOR...IN FOR LOOPS AND THE IF STATEMENT BETWEEN THEM. */
  //16 LINES
  function nameAndBestSubjectEfficient(arrObj){
    newArr = [];
    for(var i= 0; i< arrObj.length; i++){
      classPlusScores = arrObj[i].classes; //Object!!
      miniList = [];
      var maximum = 0;
      var bestSubject;
      for (var prop1 in classPlusScores) {
        if(classPlusScores[prop1]>= maximum){
          maximum = classPlusScores[prop1];
          bestSubject = prop1;
    }
    }
     newArr.push([arrObj[i].name, bestSubject]);
    }
    return newArr;
  }
  
  /* INDEED THEY ALL RETURN THE SAME INFORMATION: */
  
  nameAndBestSubjectInequalities(nestedDataStructure);
  nameAndBestSubjectWOClassNames(nestedDataStructure); 
  nameAndBestSubjectEfficient(nestedDataStructure);
