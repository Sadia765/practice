//#20 Valid Parenthesis
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.*/

var isValid = function(s) {
    var openBracketDictionary = { ')' :'(', ']':'[', '}':'{'};
    parenthesisList = [];
    for(var i = 0; i<s.length; i++){
        if(s[i] == '(' ||s[i] == '[' || s[i] == '{'){
            parenthesisList.push(s[i]);
        }else if(openBracketDictionary[s[i]] == parenthesisList[parenthesisList.length-1]){
            parenthesisList.pop();
        }else{
            return false;
        }
    }if(parenthesisList.length == 0){
        return true;
    }else{
        return false;
    }
 };