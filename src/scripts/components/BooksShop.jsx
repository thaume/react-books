/**
 * @jsx React.DOM
 */

'use strict';

var $ = require('jQuery');
var React = require('react/addons');
require('../../styles/BooksList.css');

var BookList = require('./BooksList');

var BooksList = React.createClass({

  getInitialState: function () {
    return {
      books: [],
      canAddToCart: true // In this route, user can add books to cart
    };
  },

  componentDidMount: function() {
    var self = this;
    var url = 'http://henri-potier.xebia.fr/books';

    $.getJSON(url, function(result){
      if (!result.length) {
        var books = <p>No books to load</p>;
        return self.setState({ books: books });
      }

      var books = result.map(function (book) {
        return {
          isbn: book.isbn,
          title: book.title,
          price: book.price,
          cover: book.cover
        };
      });

      // Update the component's state. This will trigger a render.
      self.setState({ books: books });
    });

  },

  bookClick: function (id) {
    var selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [],
      books = this.state.books;

    books.forEach(function (book) {
      if (book.isbn === id) {
        // Manage duplicates in localStorage 'selectedBooks'
        var isAlreadyInCart = selectedBooks.some(function (selectedBook) {
          return selectedBook.isbn === id;
        });
        if (!isAlreadyInCart) {
          selectedBooks.push(book);
          localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
          // Update parent components
          return this.props.addedBook(selectedBooks);
        }
        this.showPopup('Already added in your cart!');
      }
    }.bind(this));

    // Update the state and trigger a render
    this.setState({books: books });
  },

  showPopup: function (message) {
    // TODO make a real popup
    window.alert(message);
  },

  render: function () {
    var self = this;

    return (
      <BookList
        viewTitle="Books available in the shop"
        books={self.state.books}
        canAddToCart={self.state.canAddToCart}
        onClick={self.bookClick}/>
    );
  }
});

module.exports = BooksList;
