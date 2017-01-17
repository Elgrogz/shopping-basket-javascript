var item = require("../item");
var assert = require("assert");

describe('Shopping Basket', function() {

  beforeEach(function() {
    item.name = "beans";
  });

  it('should have a name', function() {
    assert.equal("beans", item.name);
  });

})