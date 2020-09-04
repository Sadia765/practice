/*Suffix Trie Construction
Write a SuffixTrie class for a Suffix-Trielike data structure. The class should have a
root property set to be the root node of the
trie and should support:
- Creating the trie from a string; this will
be done by calling the
populateSuffixTrieFrom method
upon class instantiation, which should
populate the root of the class.
- Searching for strings in the trie.
Note that every string added to the trie should
end with the special endSymbol character:
"*" .
If you're unfamiliar with Suffix Tries, we
recommend watching the Conceptual
Overview section of this question's video
explanation before starting to code.*/

//Solution 1:

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  //O(n^2) time | O(n^2) space
    populateSuffixTrieFrom(string) {
      // Write your code here.
          for(var i = 0; i<string.length; i++){
              this.insertSubstring(i,string);
          }
    }
      
      insertSubstring(i, string){
          var currentNode = this.root;
          for(var j = i; j<string.length; j++){
              //var character = string[j];
              if(!(string[j] in currentNode)){
                  currentNode[string[j]] = {};
              }
              currentNode = currentNode[string[j]];
          }
          currentNode[this.endSymbol] = true;
      }
  //O(m) time, m is length of string | O(1) space
    contains(string) {
      // Write your code here.
          var currentNode = this.root;
          for(var i = 0; i<string.length; i++){
              if(!(string[i] in currentNode)){
                  return false;
              }
              currentNode = currentNode[string[i]];
          }
          return this.endSymbol in currentNode;
      }
  }
  
  // Do not edit the line below.
  exports.SuffixTrie = SuffixTrie;
  