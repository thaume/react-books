'use strict';

describe('BooksShop', function () {
  var BooksShop, component;

  beforeEach(function () {
    BooksShop = require('../../../src/scripts/components/BooksShop.jsx');
    component = BooksShop();
  });

  it('should create a new instance of BooksShop', function () {
    expect(component).toBeDefined();
  });
});
