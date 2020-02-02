/*DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/

function pairElement(str) {
  var pairDict = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};
  var newArray = [];
  for(var i = 0; i<str.length; i++){
    newArray.push([str[i], pairDict[str[i]]]);
  }
  return newArray;
}

pairElement("GCG");