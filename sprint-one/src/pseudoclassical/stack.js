var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentSize = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

Stack.prototype.pop = function(value) {
  if (this.currentSize > 0) {
    let lastValue = this.storage[this.currentSize - 1];
    delete this.storage[this.currentSize - 1];
    this.currentSize--;
    return lastValue;
  }
};

Stack.prototype.size = function(value) {
  return this.currentSize;
};

// var newStack = new Stack();


