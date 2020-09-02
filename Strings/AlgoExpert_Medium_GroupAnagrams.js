/*Group Anagrams
Write a function that takes in an array of strings
and groups anagrams together.
Anagrams are strings made up of exactly the
same letters, where order doesn't matter. For
example, "cinema" and "iceman" are
anagrams; similarly, "foo" and "ofo" are
anagrams.
Your function should return a list of anagram
groups in no particular order.*/

//Solution 1:

//O(w*n*log(n)) time | O(w*n) space 
//w is # of words, n is length of longest word
function groupAnagrams(words) {
    // Write your code here.
    var anagrams = {};
    for (var i = 0; i < words.length; i++) {
        var sorted = words[i].split('').sort().join('');
        if (sorted in anagrams) {
            anagrams[sorted].push(words[i]);
        }
        else {
            anagrams[sorted] = [words[i]];
        }
    }
    return Object.values(anagrams);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;

//Solution 2:

//O(w*n*log(n) + n*w*log(w)) time | O(w*n) space
//w is # of words, n is length of longest word
function groupAnagrams(words) {
    // Write your code here.
    if (words.length === 0) {
        return [];
    }
    var sorted = words.map(word => word.split('').sort().join(''));
    var indices = [...Array(words.length).keys()];
    indices.sort((a, b) => {
        if (sorted[a] < sorted[b]) {
            return -1;
        }
        if (sorted[a] > sorted[b]) {
            return 1;
        }
        return 0;
    });

    var anagrams = [];
    var currentGroup = [];
    var currentAnagram = sorted[indices[0]];
    for (var i = 0; i < indices.length; i++) {
        var word = words[indices[i]];
        var sortedWord = sorted[indices[i]];
        if (sortedWord === currentAnagram) {
            currentGroup.push(word);
            continue;
        }
        anagrams.push(currentGroup);
        currentGroup = [word];
        currentAnagram = sortedWord;
    }
    anagrams.push(currentGroup);
    return anagrams;
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;

