/**
 * @jsx React.DOM
 */

'use strict';

var $ = require('jQuery');
var React = require('react/addons');
require('../../styles/CartSummary.css');

var CartSummary = React.createClass({

  getInitialState: function (){
    return {
      totalPrice: 0,
      offer: 0,
      totalAfterOffer: 0
    };
  },

  componentDidMount: function () {
    if (!this.props.books.length) {
      return;
    }
    // Recalculate price
    var totalPrice = this.props.books.map(function (book) {
      return book.price;
    }).reduce(function (a, b) {
      return a + b;
    }, 0);
    this.setState({ totalPrice: totalPrice });

    // Get commercial offers and render them
    this.getBestOffer(totalPrice);
  },

  getBestOffer: function (totalPrice) {
    if (!this.props.books.length) {
      return;
    }
    var self = this;
    var booksIds = this.props.books.map(function (book) {
      return book.isbn;
    }).join(',');

    var url = 'http://henri-potier.xebia.fr/books/' + booksIds + '/commercialOffers';

    $.getJSON(url, function(result){

      var offers = result.offers.map(function(offer) {
        // Ensure that values are numbers and won't return NaN after operations
        offer.value = parseInt(offer.value || '', 10);
        offer.sliceValue = parseInt(offer.sliceValue || '', 10);
        totalPrice = parseInt(totalPrice || '', 10);

        switch(offer.type) {
          case 'percentage':
            offer.afterOffer = (1 - (offer.value / 100)) * totalPrice;
            break;
          case 'minus':
            offer.afterOffer = totalPrice - offer.value;
            break;
          case 'slice':
            if (totalPrice > offer.sliceValue) {
              var factor = Math.floor(totalPrice / offer.sliceValue);
              offer.afterOffer = totalPrice - (factor * offer.value);
            } else {
              offer.afterOffer = totalPrice;
            }
            break;
          default:
            break;
        }
        return offer.afterOffer;
      });

      self.setState({
        totalAfterOffer: Math.min.apply(null, offers)
      });
    });
  },

  render: function () {
    var self = this;

    return (
      <div>
        <h2>Cart summary</h2>
        <p>Total price: {self.state.totalPrice}</p>
        <p>Total after best commercial offer: {self.state.totalAfterOffer}</p>
      </div>
    );
  }
});

module.exports = CartSummary;
