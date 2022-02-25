var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastPosition = 0;
  this.firstPosition = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastPosition] = value;
  this.lastPosition++;
};

Queue.prototype.dequeue = function() {
  //first check if the queue has any values
  if (this.size() > 0 ) {
    let firstValue = this.storage[this.firstPosition];
    delete this.storage[this.firstPosition];
    this.firstPosition++;
    return firstValue;
  }
};

Queue.prototype.size = function(value) {
  return this.lastPosition - this.firstPosition;
};


