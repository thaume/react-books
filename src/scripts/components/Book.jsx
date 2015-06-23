/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Book.css');

var Book = React.createClass({
  clickHandler: function () {
    this.props.onClick(this.props.isbn);
  },

  render: function () {
    var self = this;
    if (this.props.canAddToCart) {
      var button = <button className="book__add-cart" onClick={self.clickHandler}>Add to cart</button>;
    }

    return (
      <div className="book media cf">
        <img className="media__image" src={self.props.cover} />
        <div className="media__body">
          <h2>{self.props.title}</h2>
          <p>Prix: {self.props.price} euros</p>
          {button}
        </div>
      </div>
    );
  }
});

module.exports = Book;
