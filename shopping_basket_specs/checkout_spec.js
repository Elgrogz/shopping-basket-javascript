var checkout = require("../checkout");
var basket = require("../basket");
var items = require("../items");
var assert = require("assert");

describe('Checkout', function() {

  beforeEach(function() {
    basket.items = items;
  });

  it('basket value can increase', function() {
    assert.equal(22, checkout.calculateBasketValue(basket.items));
  });


})