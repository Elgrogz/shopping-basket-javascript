var checkout = require("../checkout");
var basket = require("../basket");
var items = require("../items");
var customer = require("../customer")
var assert = require("assert");

describe('Checkout', function() {

  beforeEach(function() {
    basket.items = items;
  });

  it('can add customer', function() {
    checkout.addCustomer(customer);
    assert.equal("Gregor", checkout.customer["name"]);
    assert.equal(true, checkout.customer.hasDiscountCard);
  });

  // it('can calculate basket value', function() {
  //   assert.equal(22.0, checkout.calculateBasketValue(basket.items));
  // });

  it('can deduct 10% if over £20', function() {
    assert.equal(19.8, checkout.calculateBasketValue(basket.items));
  });

  it('can deduct 5% after other discounts if customer has loyalty card', function() {
    checkout.addCustomer(customer);
    assert.equal(18.8, checkout.calculateBasketValue(basket.items));
  });

})