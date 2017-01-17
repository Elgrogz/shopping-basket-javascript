var basket = require("../basket");
var assert = require("assert");

describe('Shopping Basket', function() {

  beforeEach(function() {
    basket.items = [];
    basket.value = 0;
  });

  it('should be empty initially', function() {
    assert.equal(0, basket.items.length);
  });

  it('basket value should be 0 initially', function() {
    assert.equal(0, basket.value);
  });

  // it('can add items to basket', function() {
  //   assert.equal(1, basket.items.length);
  // });


})
