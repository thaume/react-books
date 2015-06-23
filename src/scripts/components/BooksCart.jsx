/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/BooksList.css');

var BookList = require('./BooksList');
var CartSummary = require('./CartSummary');

var BooksCart = React.createClass({

  getInitialState: function () {
    return {
      selectedBooks: JSON.parse(localStorage.getItem('selectedBooks')) || [],
      canAddToCart: false // In this route, user cannot add books to cart
    };
  },

  componentDidMount: function() {
    // If there's no book to show yet, show the 'no selected books' message
    if (!this.state.selectedBooks.length) {
      // Empty state, to manage empty responses
      var selectedBooks = { state: 'empty' };
      this.setState({ selectedBooks: selectedBooks });
    }
  },

  render: function () {
    var self = this;

    return (
      <div>
        <CartSummary books={self.state.selectedBooks} />
        <BookList
          viewTitle="Books in your cart"
          books={self.state.selectedBooks}
          canAddToCart={self.state.canAddToCart} />
      </div>
    );
  }
});

module.exports = BooksCart;
