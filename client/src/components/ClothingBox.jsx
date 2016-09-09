var React = require('react');
var ClothingSelect = require('./ClothingSelect');
var ClothingList = require('./ClothingList');
var BasketButton = require('./BasketButton');
var Basket = require('./Basket');
var ShoppingBasket = require('../models/shopping_basket');
var Product = require('../models/product');

var ClothingBox = React.createClass({

  getInitialState: function(){
    return({products: [], selectedProduct: null, shoppingBasket: []});
  },

  setSelectedProduct: function(product){
    this.setState({selectedProduct: product});
  },

  addProductToBasket: function(selectedProduct){
    var shoppingBasket = new ShoppingBasket();
    for(var product of this.state.shoppingBasket){
      shoppingBasket.addProduct(new Product(product));
    }
    shoppingBasket.addProduct(selectedProduct);
    console.log(shoppingBasket);
    this.setState({shoppingBasket: shoppingBasket.basket});
  },

  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/products");
    request.onload = function() {
      if(request.status === 200){
        var sampleProducts = JSON.parse(request.responseText);
        this.setState({products: sampleProducts});
        console.log(sampleProducts);
        };
      }.bind(this);
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <h1 className="main-heading"> t r o v e </h1>
        <Basket products={this.state.products}/>
        <BasketButton />
        <ClothingSelect products={this.state.products}/>
        <ClothingList products={this.state.products} setSelectedProduct={this.setSelectedProduct} addProductToBasket={this.addProductToBasket}/>
      </div>
    )
  }

});

module.exports = ClothingBox;
