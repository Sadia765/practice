//#7 Given a 32-bit signed integer, reverse digits of an integer. 
//If negative, keep sign in front.
//If zero at end of number remove it from front. I.e. given 120, want output 21.
//If reverse is not a 32-bit integer, return zero. 

var reverse = function(x) {
    var x = x.toString()
    var length = x.length-1
    if(x[length]==='0'){
      length =length-1;
    }
    if(x[0]==='-'){
      var min = 1;
      var reverse = '-';
    }else if( x[0]!= '-'){
      var min = 0;
      var reverse = ''
    }
    for(length; length>=min; length--){
      reverse+=x[length];
    } 
    if(Number(reverse)> Math.pow(2,31)-1 ||Number(reverse)< -Math.pow(2,31)+1){
        return 0;
    }
    return reverse;
};