var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //process of adding to the queue, which happens in the back of the queue
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    //process of removing from the queue, which happens from the front of the queue
    if (size > 0) {
      let firstValue = storage['0'];
      delete storage['0'];
      size--;
      return firstValue;
    }
  };

  someInstance.size = function() {
    //return the size of the queue
    return size;
  };

  return someInstance;
};
