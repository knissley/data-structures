var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

Queue.prototype.dequeue = function() {
  //first check if the queue has any values
  if (this.currentSize > 0) {
    //if so, store the first value to be returned later
    let firstValue = this.storage['0'];
    //remove the first item in the queue
    delete this.storage['0'];
    //decrement the current size
    this.currentSize--;
    //return the removed value
    return firstValue;
  }
};

Queue.prototype.size = function(value) {
  return this.currentSize;
};


