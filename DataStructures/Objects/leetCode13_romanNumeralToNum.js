//#13 Give a Roman Numeral return a number.

var romanToInt = function(s) {
    dictionary = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    var num = 0; 
    for (i=0; i<s.length; i++){
        var first = s[i];
        var second = s[i+1];
        if((first=='I' && (second=='V' || second=='X')) || (first =='X' && (second=='L'|| second== 'C')) || (first =='C' && (second=='D'|| second== 'M')) ){
            var inter = dictionary[second]-dictionary[first];
            num+=inter;
            i = i+1;
            //console.log(num, inter)
        } else{
            num+=dictionary[first];
        } 
        //console.log(num)
    }
    return num;
};