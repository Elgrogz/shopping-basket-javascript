var customer = require("../customer")
var basket = require("../basket");
var items = require("../items");
var assert = require("assert");

describe('Shopping Basket', function() {

  beforeEach(function() {
    customer.hasDiscountCard = true;
  });

  it('can have discount card', function() {
    assert.equal(true, customer.hasDiscountCard);
  });


});