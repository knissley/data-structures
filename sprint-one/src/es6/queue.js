class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.firstPosition = 0;
    this.lastPosition = 0;
  }

  enqueue(value) {
    this.storage[this.lastPosition] = value;
    this.lastPosition++;
  }

  dequeue() {
    if (this.size() > 0) {
      let firstValue = this.storage[this.firstPosition];
      delete this.storage[this.firstPosition];
      this.firstPosition++;
      return firstValue;
    }
  }

  size() {
    return this.lastPosition - this.firstPosition;
  }

}
