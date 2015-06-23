'use strict';

describe('Main', function () {
  var BooksApiApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    BooksApiApp = require('../../../src/scripts/components/BooksApiApp.jsx');
    component = BooksApiApp();
  });

  it('should create a new instance of BooksApiApp', function () {
    expect(component).toBeDefined();
  });
});
