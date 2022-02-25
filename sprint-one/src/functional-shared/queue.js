var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {};
  instance.storage = {};
  instance.lastPosition = 0;
  instance.firstPosition = 0;

  _.extend(instance, queueMethods);

  return instance;
};


//enqueue, dequeue, and size
var queueMethods = {
  enqueue: function(value) {
    //adding an item to the back of the queue
    this.storage[this.lastPosition] = value;
    this.lastPosition++;
  },
  dequeue: function() {
    //removing an item from the front of the queue
    //check if there is anything in the queue
    if (this.size() > 0 ) {
      let firstValue = this.storage[this.firstPosition];
      delete this.storage[this.firstPosition];
      this.firstPosition++;
      return firstValue;
    }
  },
  size: function() {
    return this.lastPosition - this.firstPosition;
  }
};


