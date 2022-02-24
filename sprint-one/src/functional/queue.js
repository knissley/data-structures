var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //this is adding to the queue, which happens in the back of the queue

    //check if this is the first value added
    if (Object.keys(storage).length === 0) {
      storage['0'] = value;
    } else {
      //all
    }
  };

  someInstance.dequeue = function() {
    //this is removing from the queue, which happens from the front of the queue
  };

  someInstance.size = function() {
    //return the size of the queue
  };

  return someInstance;
};
