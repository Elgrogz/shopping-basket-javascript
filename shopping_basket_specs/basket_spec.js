var basket = require("../basket");
var item1 = require("../item");
var item2 = require("../item");
var item3 = require("../item");
var assert = require("assert");

describe('Shopping Basket', function() {

  beforeEach(function() {
    basket.items = [];
    basket.value = 0;
    item1.name = "beans"; 
    item1.value = 2; 
    item2.name = "peas"; 
    item2.value = 4; 
    item3.name = "lentils"; 
    item3.value = 5; 
  });

  it('should be empty initially', function() {
    assert.equal(0, basket.items.length);
  });

  it('basket value should be 0 initially', function() {
    assert.equal(0, basket.value);
  });

  it('can add item to basket', function() {
    basket.addItem(item1);
    basket.addItem(item2);
    assert.equal(2, basket.items.length);
    // assert.equal("beans", basket[0].name)
  });

  it('can remove item from basket', function() {
    basket.addItem(item1);
    basket.addItem(item2);
    basket.removeItem(item2);
    assert.equal(1, basket.items.length);
  })

  // it('basket value increase', function() {
  //   basket.addItem(item1);
  //   basket.addItem(item2);
  //   basket.addItem(item3);
  //   assert.equal(11, basket.value);
  // });


})
