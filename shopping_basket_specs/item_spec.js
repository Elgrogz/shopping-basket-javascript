var item = require("../item");
var assert = require("assert");

describe('Shopping Basket', function() {

  beforeEach(function() {
    item.name = "beans";
    item.value = 2;
  });

  it('should have a name', function() {
    assert.equal("beans", item.name);
  });

  it('should have a value', function() {
    assert.equal(2, item.value);
  });

})