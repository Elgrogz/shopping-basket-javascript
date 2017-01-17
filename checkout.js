var checkout = {
  cost: 0,
  calculateBasketValue: function(array) {
    this.cost = 0
    for (var i = 0; i < array.length; i++) {
      this.cost += array[i].value;
    }
    return this.cost;
  }
}

module.exports = checkout;