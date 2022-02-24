var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //size
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //SMARTER WAY (thanks Sean!)

    //utilize the new size property to keep track of how long the stack is
    storage[size] = value;
    size++;

    //MY NAIVE WAY

    // //try to keep track of the size of the stack
    // //check if there is nothing in storage
    // if (Object.keys(storage).length === 0) {
    //   // if so the current value needs to be pushed to the first value
    //   storage['0'] = value;
    // } else {
    //   //else need to calculate the new number to use for the key
    //   //alias the keys array
    //   let keysArray = Object.keys(storage);
    //   //take the most recent value in the keys and add one for the new key
    //   let newKey = keysArray[keysArray.length - 1] + 1;
    //   storage[newKey] = value;
    // }
  };

  someInstance.pop = function() {
    if (size > 0) {
      let lastValue = storage[size - 1];
      delete storage[size];
      size--;
      return lastValue;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
