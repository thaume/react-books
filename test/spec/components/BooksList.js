'use strict';

describe('BooksList', function () {
  var BooksList, component;

  beforeEach(function () {
    BooksList = require('../../../src/scripts/components/BooksList.jsx');
    component = BooksList();
  });

  it('should create a new instance of BooksList', function () {
    expect(component).toBeDefined();
  });
});
