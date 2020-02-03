//#26 Remove Duplicates from Sorted Array
 //Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


var removeDuplicates = function(nums) {
    var originalLength = nums.length;
    var end = originalLength-1
    var maxTerm = nums[end];
    if(nums[0] == maxTerm){
        nums.splice(0, end);
        return nums.length;
    }
    else{
        var min = nums[0];
        var temp = nums[end];
        var counter = 0;
        nums.pop();
        nums.unshift(temp);
        while(counter <= originalLength || min !=nums[0]){
            numsLength = nums.length;
            if(nums[numsLength-1]== nums[numsLength-2]){
                nums.pop();
                counter++;
            }else{
                //var temp = nums[numsLength-1];
                nums.unshift(nums[numsLength-1]);
                nums.pop();
                counter++;
            }
        }return numsLength;    
    } 
};