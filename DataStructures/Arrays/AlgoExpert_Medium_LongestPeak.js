/*Longest Peak
Write a function that takes in an array of
integers and returns the length of the longest
peak in the array.
A peak is defined as adjacent integers in the
array that are strictly increasing until they
reach a tip (the highest value in the peak), at
which point they become strictly decreasing. At
least three integers are required to form a
peak.
For example, the integers 1, 4, 10, 2 form
a peak, but the integers 4, 0, 10 don't and
neither do the integers 1, 2, 2, 0 .
Similarly, the integers 1, 2, 3 don't form a
peak because there aren't any strictly
decreasing integers after the 3 .
*/

//Solution 1:

//O(n) time| O(1) Space
/*O(n) time b/c one while loop, and
with inner while loop, only see an element 2-3 times.
So this would be O(2n) or O(3n) time, but this simplifies to O(n) time.*/
function longestPeak(array) {
    // Write your code here.
    var maxPeakLen = 0;
    var currentPeakLen = 0;
    var i = 1;
    while (i < array.length - 1) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {//[2,3,4,3,2,1,1]
            var left = i - 2;
            while (array[left] < array[left + 1] && left >= 0) {
                left--;
            }
            var right = i + 2;
            while (array[right] < array[right - 1] && right < array.length) {
                right++;
            }
            i = right;
            currentPeakLen = right - left - 1;
            if (currentPeakLen > maxPeakLen) {
                maxPeakLen = currentPeakLen;
            }
        }
        else {
            i += 1;
        }
    }
    return maxPeakLen;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
