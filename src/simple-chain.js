const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (position > this.arr.length || position <= 0 || isNaN(position)) {
      this.arr = [];
      throw new Error;
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;