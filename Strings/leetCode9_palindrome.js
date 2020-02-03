//#9 Determine whether an integer is a palindrome. 
//An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function(x) {
    x = x.toString();
    var max = x.length-1;
    var midpoint = Math.floor(max/2);
    if(max%2===0){
       midpoint = Math.floor(max/2)-1;
       }
    if(x[0]==='-'){
        return false;
    }
    for(var i =0;i<=midpoint; i++){
        if(x[i] != x[max-i]){
            return false;
        }
    } return true;
};