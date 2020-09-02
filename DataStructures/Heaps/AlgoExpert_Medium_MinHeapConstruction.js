/*Min Heap Construction
Implement a MinHeap class that supports:
- Building a Min Heap from an input
array of integers.
- Inserting integers in the heap.
- Removing the heap's minimum / root
value.
- Peeking at the heap's minimum / root
value.
- Sifting integers up and down the heap,
which is to be used when inserting and
removing values.
Note that the heap should be represented in
the form of an array.
If you're unfamiliar with Min Heaps, we
recommend watching the Conceptual
Overview section of this question's video
explanation before starting to code.
*/

//Solution 1:

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
      //O(n) time | O(1) space
    buildHeap(array) {
      // Write your code here.
          var firstParent = Math.floor((array.length-2)/2);
        for(var i = array.length-1; i>=0; i--){
              this.siftDown(i, array.length-1, array);
          }
          return array;
      }
      
      //O(log(n)) time | O(1) space
    siftDown(current, end, heap) {
      // Write your code here.
          var childOne = 2*current + 1;
          var childTwo, toSwap;
          while(childOne <= end){
              childTwo = 2*current + 2 <= end ? 2*current + 2 : -1;
              if(childTwo != -1 && heap[childTwo] < heap[childOne]){
                  toSwap = childTwo; 
              }
              else{
                  toSwap = childOne;
              }
              if(heap[toSwap] < heap[current]){
                  this.swap(current, toSwap, heap);
                  current = toSwap;
                  childOne = 2*current + 1;
              }
              else{
                  return;
              }
          }
    }
      //O(log(n)) time | O(1) space
    siftUp(current, heap) {
      // Write your code here.
          var parent = Math.floor((current - 1)/2);
          //want all parents to have values less than their children.
          while(current > 0 && heap[parent] > heap[current]){
              this.swap(current, parent, heap);
              current = parent;
              parent = Math.floor((current-1)/2);
          }
    }
      //O(1) time | O(1) space
    peek() {
      // Write your code here.
          return this.heap[0];
    }
  
          //O(log(n)) time | O(1) space
    remove() {
      // Write your code here
          //Usually when remove from min heap, you remove root, so this is what we are doing here. 
          this.swap(0,this.heap.length-1, this.heap);
          var removeValue = this.heap.pop();
          this.siftDown(0,this.heap.length - 1, this.heap);
          return removeValue;	
    }
      //O(log(n)) time | O(1) space
    insert(value) {
      // Write your code here.
          this.heap.push(value);
          this.siftUp(this.heap.length-1, this.heap);
    }
      
      swap(i, j, heap){
          var temp = heap[i];
          heap[i] = heap[j];
          heap[j] = temp;
      }
  }
  
  // Do not edit the line below.
  exports.MinHeap = MinHeap;
  