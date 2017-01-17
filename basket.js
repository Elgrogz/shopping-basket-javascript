var basket = {
  items: [],
  value: 0,
  addItem: function(item) {
    this.items.push(item);
  },
  removeItem: function(item) {
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

module.exports = basket;