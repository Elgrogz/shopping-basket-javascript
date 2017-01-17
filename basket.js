var basket = {
  items: [],
  value: 0,
  calculateValue: function() {
    this.value = 0
    for (var i = 0; i < this.items.length; i++) {
      this.value += this.items[i].value;
    }
  },
  addItem: function(item) {
    this.items.push(item);
    this.calculateValue();
  },
  removeItem: function(item) {
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.calculateValue();
  }
  // empty: function() {
  //   this.items.clear();
  // }
}

module.exports = basket;