var checkout = {
  cost: 0,
  customer: null,

  addCustomer: function(customer) {
    this.customer = customer;
  },
  
  applyDiscountIfOverTwenty: function() {
    if (this.cost >= 20.0) {
      this.cost *= 0.9;
    }
  },

  applyDiscountIfCustomerHasCard: function() {
    if (this.customer != null && this.customer.hasDiscountCard) {
      this.cost *= 0.95;
    }
  },

  calculateBasketValue: function(basket) {
    this.cost = 0
    for (var i = 0; i < basket.length; i++) {
      this.cost += basket[i].value;
    }
    this.applyDiscountIfOverTwenty();
    this.applyDiscountIfCustomerHasCard();
    this.cost = Math.round(this.cost * 100) / 100;
    return this.cost;
  }

}

module.exports = checkout;