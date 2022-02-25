var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastPosition = 0;
  var frontPosition = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //process of adding to the queue, which happens in the back of the queue
    storage[lastPosition] = value;
    lastPosition++;
  };

  someInstance.dequeue = function() {
    //process of removing from the queue, which happens from the front of the queue

    /*
    storage: {} {}
       size: 0
    */
    if (someInstance.size() > 0) {
      let firstValue = storage[frontPosition];
      delete storage[frontPosition];
      frontPosition++;
      return firstValue;
    }
  };

  someInstance.size = function() {
    //return the size of the queue
    return lastPosition - frontPosition;
  };

  return someInstance;
};
