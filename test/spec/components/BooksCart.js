'use strict';

describe('BooksCart', function () {
  var BooksCart, component;

  beforeEach(function () {
    BooksCart = require('../../../src/scripts/components/BooksCart.jsx');
    component = BooksCart();
  });

  it('should create a new instance of BooksCart', function () {
    expect(component).toBeDefined();
  });
});
