var checkout = require("../checkout");
var basket = require("../basket");
var items = require("../items");
var assert = require("assert");

describe('Checkout', function() {

  beforeEach(function() {
    basket.items = items;
  });

  // it('can calculate basket value', function() {
  //   assert.equal(22.0, checkout.calculateBasketValue(basket.items));
  // });

  it('can deduct 10% if over £20', function() {
    assert.equal(19.8, checkout.calculateBasketValue(basket.items));
  });


})