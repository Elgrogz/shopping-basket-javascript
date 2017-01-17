var basket = require("../basket");
var items = require("../items");
var assert = require("assert");

describe('Shopping Basket', function() {

  beforeEach(function() {
    basket.empty();
    basket.value = 0;
  });

  it('should be empty initially', function() {
    assert.equal(0, basket.items.length);
  });

  it('basket value should be 0 initially', function() {
    assert.equal(0, basket.value);
  });

  it('can add item to basket', function() {
    basket.addItem(items[0]);
    basket.addItem(items[1]);
    assert.equal(2, basket.items.length);
    assert.equal("beans", basket.items[0].name)
  });

  it('can remove item from basket', function() {
    basket.addItem(items[0]);
    basket.addItem(items[1]);
    basket.removeItem(basket.items[1]);
    assert.equal(1, basket.items.length);
  })

  it('can empty basket', function() {
    basket.addItem(items[0]);
    basket.addItem(items[1]);
    basket.empty();
    assert.equal(0, basket.items.length);
  });


})
