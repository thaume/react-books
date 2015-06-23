/** @jsx React.DOM */

var BooksApiApp = require('./BooksApiApp');
var React = require('react');
var Router = require('react-router');
var {DefaultRoute, Route, Routes} = Router;

var BooksShop = require('./BooksShop');
var BooksCart = require('./BooksCart');

Router.run(
  <Route name="app" path="/" handler={BooksApiApp}>
    <DefaultRoute name="shop" handler={BooksShop}/>
    <Route name="cart" handler={BooksCart}/>
  </Route>
, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});
