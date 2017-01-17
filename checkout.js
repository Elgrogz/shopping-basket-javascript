var checkout = {
  cost: 0,
  
  applyDiscount: function() {
    if (this.cost >= 20.0) {
      this.cost *= 0.9;
    }
  },

  calculateBasketValue: function(array) {
    this.cost = 0
    for (var i = 0; i < array.length; i++) {
      this.cost += array[i].value;
    }
    this.applyDiscount();
    return this.cost;
  }


}

module.exports = checkout;