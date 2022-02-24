class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.currentSize = 0;
  }

  push(value) {
    this.storage[this.currentSize] = value;
    this.currentSize++;
  }

  pop(value) {
    // check if there's anything in the stack first
    if (this.currentSize > 0) {
      //if so, find the last value
      let lastValue = this.storage[this.currentSize - 1];
      //delete this property from storage
      delete this.storage[this.currentSize - 1];
      //decrement the current size
      this.currentSize--;
      //return the removed value
      return lastValue;
    }
  }

  size() {
    return this.currentSize;
  }

}