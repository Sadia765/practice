/*Min Max Stack Construction
Write a MinMaxStack class for a Min Max
Stack. The class should support:
- Pushing and popping values on and off
the stack.
- Peeking at the value at the top of the
stack.
- Getting both the minimum and the
maximum values in the stack at any
given point in time.
All class methods, when considered
independently, should run in constant time
and with constant space.*/

//Solution 1:

// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor(){
		this.minMaxStack = []; //each value {"min": __, "max":___}
		this.stack = [];
	}
	
  peek() {
    // Write your code here.
		return this.stack[this.stack.length-1];
  }

  pop() {
		// Write your code here.
		this.minMaxStack.pop();
		return this.stack.pop();
  }

  push(number) {
    // Write your code here.
		var minMax = {"min": number, "max":number};
		if(this.minMaxStack.length){
			var lastMinMax = this.minMaxStack[this.minMaxStack.length -1];
			minMax.min = Math.min(lastMinMax.min, number);
			minMax.max = Math.max(lastMinMax.max, number);
		}
		this.minMaxStack.push(minMax);
    this.stack.push(number);
	}

  getMin() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length-1].min;
  }

  getMax() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length-1].max;
	}
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
