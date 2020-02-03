/*#1
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.*/
// WAY ONE!
var twoSum = function(nums, target) {
    targetindices = []
    for(var i=0; i<=nums.length; i++){
        for(var j = 0; j<=nums.length;j++){
            if(i !== j){
                if (i<=target && j<= target){
                    var potTarget = nums[i] + nums[j];
                    if(potTarget == target){
                        return i,j;
                    }
                }
            }
        }
    }
    
};

//WAY TWO! (FASTER THAN 97.82 % OF PEOPLE!)

var twoSum = function(nums, target) {
    indexNumber = {}
    for(var i=0; i<=nums.length; i++){
        var otherSummand = target - nums[i];
        if(otherSummand in indexNumber){
            return [indexNumber[otherSummand],i];
        }
        indexNumber[nums[i]] = i;          
    }
};