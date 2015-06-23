'use strict';

describe('CartSummary', function () {
  var CartSummary, component;

  beforeEach(function () {
    CartSummary = require('../../../src/scripts/components/CartSummary.jsx');
    component = CartSummary();
  });

  it('should create a new instance of CartSummary', function () {
    expect(component).toBeDefined();
  });
});
