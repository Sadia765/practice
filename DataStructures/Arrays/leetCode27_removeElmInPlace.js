//#27 Remove Element
//Given an array nums and a value val, remove all instances of that value in-place and return the new length.

var removeElement = function(nums, val) {
    originalLength = nums.length;
    var temp;
    var counter = 0;
    while(counter<=originalLength){
        var end = nums.length-1;
        if(nums[end] == val){
            nums.pop();
            counter++;
        }else{
            nums.unshift(nums[end]);
            nums.pop();
            counter++;
        }//counter++;
    }return nums.length;
};