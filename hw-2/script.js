function createCounter(initialValue) {
  return {
    objValue: initialValue,
    increment(value = 1) {
      this.objValue += value;
      console.log(this.objValue);
      return this;
    },

    decrement(value = 1) {
      this.objValue -= value;
      console.log(this.objValue);
      return this;
    },

    showValue() {
      console.log(this.objValue);
      return this;
    },

    discard() {
      this.objValue = initialValue;
      console.log(this.objValue);
      return this;
    },
  };
}

const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.increment(3); // 5
counter.showValue(); // 5
counter.decrement(); // 4
counter.decrement(10); // -6
counter.discard(); // 0

counter.increment().increment(20).decrement(3).showValue();

// module.exports = createCounter;

console.log(counter);
