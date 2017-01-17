var basket = {
  items: [],
  value: 0,
  addItem: function(item) {
    this.items.push(item);
  }
}

module.exports = basket;