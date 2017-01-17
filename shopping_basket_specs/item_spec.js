var items = require("../items");
var assert = require("assert");

describe('Shopping Basket', function() {

  it('should have a name', function() {
    assert.equal("beans", items[0].name);
  });

  it('should have a value', function() {
    assert.equal(2, items[0].value);
  });

})