var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {};
  instance.storage = {};
  instance.currentSize = 0;

  _.extend(instance, queueMethods);

  return instance;
};


//enqueue, dequeue, and size
var queueMethods = {
  enqueue: function(value) {
    //adding an item to the back of the queue
    this.storage[this.currentSize] = value;
    this.currentSize++;
  },
  dequeue: function() {
    //removing an item from the front of the queue
    //check if there is anything in the queue
    if (this.currentSize > 0) {
      //if so, the first item needs to be removed
      //store the first value to be returned later
      let firstValue = this.storage['0'];
      delete this.storage['0'];
      this.currentSize--;
      return firstValue;
    }
  },
  size: function() {
    return this.currentSize;
  }
};


