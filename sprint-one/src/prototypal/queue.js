var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.firstPosition = 0;
  instance.lastPosition = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  //adding a new entry to the back of the queue
  this.storage[this.lastPosition] = value;
  this.lastPosition++;
};

queueMethods.dequeue = function() {
  //removing an entry from the front of the queue
  //first check if there is anything in the queue
  if (this.size() > 0 ) {
    let firstValue = this.storage[this.firstPosition];
    delete this.storage[this.firstPosition];
    this.firstPosition++;
    return firstValue;
  }
};

queueMethods.size = function() {
  return this.lastPosition - this.firstPosition;
};
