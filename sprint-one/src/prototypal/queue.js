var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(Queue.queueMethods);
  instance.storage = {};
  instance.currentSize = 0;

  return instance;
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value) {
  //adding a new entry to the back of the queue
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

Queue.queueMethods.dequeue = function() {
  //removing an entry from the front of the queue
  //first check if there is anything in the queue
  if (this.currentSize > 0) {
    //if so, grab the first value, to be returned later
    let firstValue = this.storage['0'];
    // delete the first value in the queue
    delete this.storage['0'];
    //decrement the current size
    this.currentSize--;
    //return the first value
    return firstValue;
  }
};

Queue.queueMethods.size = function() {
  return this.currentSize;
};
