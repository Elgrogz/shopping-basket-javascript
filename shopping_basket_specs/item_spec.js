var items = require("../items");
var assert = require("assert");

describe('Shopping Basket', function() {

  it('should have a name', function() {
    assert.equal("beans", items[0].name);
  });

  it('should have a value', function() {
    assert.equal(2, items[0].value);
  });

  it('can have bogof discount', function() {
    assert.equal(false, items[0].hasBogofDiscount);
    assert.equal(true, items[4].hasBogofDiscount);
  });

})