/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/BooksList.css');

var Book = require('./Book');

var BooksList = React.createClass({

  bookClick: function (id) {
    this.props.onClick(id);
  },

  render: function () {
    var self = this;

    if (this.props.books.state !== 'empty') {

      var books = this.props.books.map(function(book){
        return <Book
          isbn={book.isbn}
          title={book.title}
          price={book.price}
          cover={book.cover}
          onClick={self.bookClick}
          canAddToCart={self.props.canAddToCart} />
      });

      if(!books.length){
        books = <p>Loading books...</p>;
      }
    } else {
      books = <p>No book has been added to your cart yet!</p>;
    }

    return (
      <div>
        <h1>{self.props.viewTitle}</h1>
        {books}
      </div>
    );
  }

});

module.exports = BooksList;
