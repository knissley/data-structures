class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.currentSize = 0;
  }

  enqueue(value) {
    this.storage[this.currentSize] = value;
    this.currentSize++;
  }

  dequeue() {
    if (this.currentSize > 0) {
      let firstValue = this.storage['0'];
      delete this.storage['0'];
      this.currentSize--;
      return firstValue;
    }
  }

  size() {
    return this.currentSize;
  }

}
