'use strict';

describe('Book', function () {
  var Book, component;

  beforeEach(function () {
    Book = require('../../../src/scripts/components/Book.jsx');
    component = Book();
  });

  it('should create a new instance of Book', function () {
    expect(component).toBeDefined();
  });
});
