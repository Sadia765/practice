/*Balanced Brackets
Write a function that takes in a string made up
of brackets ( ( , [ , { , ) , ] , and } ) and
other optional characters. The function should
return a boolean representing whether the
string is balanced with regards to brackets.
A string is said to be balanced if it has as many
opening brackets of a certain type as it has
closing brackets of that type and if no bracket is
unmatched. Note that an opening bracket can't
match a corresponding closing bracket that
comes before it, and similarly, a closing bracket
can't match a corresponding opening bracket
that comes after it. Also, brackets can't overlap
each other as in [(]) .*/

//Solution 1:

//O(n) time | O(n) space
function balancedBrackets(string) {
    // Write your code here.
    var stack = [];
    var strArray = string.split('');
    var brackets = { ')': '(', ']': '[', '}': '{' };
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i] == '(' || strArray[i] == '[' || strArray[i] == '{') {
            stack.push(strArray[i]);
        }
        else if (stack.length != 0 && brackets[strArray[i]] == stack[stack.length - 1]) {
            stack.pop();
        }
        else {
            return false;
        }
    }
    return stack.length === 0;
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;

