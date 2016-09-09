var React = require('react');

var ClothingSelect = require('./ClothingSelect');
var ClothingList = require('./ClothingList');
var BasketButton = require('./BasketButton');
var Basket = require('./Basket');

var ShoppingBasket = require('../models/shopping_basket');
var Product = require('../models/product');
var Transaction = require('../models/transaction');
var DiscountVoucher = require('../models/discount_voucher');
var Stock = require('../models/stock');

var ClothingBox = React.createClass({

  getInitialState: function(){
    return({products: [], shoppingBasket: [], shoppingBasketValue: 0});
  },

  addProductToBasket: function(selectedProduct){
    var shoppingBasket = new ShoppingBasket();

    for(var product of this.state.shoppingBasket){
      shoppingBasket.addProduct(new Product(product));
    }

    var stock = new Stock();

    for(var product of this.state.products){
      stock.addProduct(new Product(product));
    }

    console.log("stock pre transaction:", stock);

    var transaction = new Transaction({"shoppingBasket": shoppingBasket, "stock": stock});

    transaction.moveProductFromStockToBasket(selectedProduct, 1);

    console.log("basket post transaction move:", shoppingBasket.basket)

    this.setState({shoppingBasket: shoppingBasket.basket, shoppingBasketValue: shoppingBasket.value});
  },

  removeProductFromBasket: function(selectedProduct){
    var shoppingBasket = new ShoppingBasket();

    for(var product of this.state.shoppingBasket){
      shoppingBasket.addProduct(new Product(product));
    }

    shoppingBasket.removeProduct(selectedProduct);
    console.log("basket value in remove product", shoppingBasket.value);
    this.setState({shoppingBasket: shoppingBasket.basket, shoppingBasketValue: shoppingBasket.value});
  },

  totalBasketValue: function(){
    var shoppingBasket = new ShoppingBasket();

    for(var product of this.state.shoppingBasket){
      shoppingBasket.addProduct(new Product(product));
    }

    return shoppingBasket.value;
  },

  totalItemsInBasket: function(){
    var shoppingBasket = new ShoppingBasket();

    for(var product of this.state.shoppingBasket){
      shoppingBasket.addProduct(new Product(product));
    }

    return shoppingBasket.numberOfProducts();
  },

  checkForAvailableVouchers: function(){
    var shoppingBasket = new ShoppingBasket();

    for(var product of this.state.shoppingBasket){
      shoppingBasket.addProduct(new Product(product));
    }

    var fivePoundVoucher = new DiscountVoucher({
      "description": "£5.00 off your order",
      "discountValue": 5, "eligibleValue": 5,
      "specialItems": []
    });

    var tenPoundVoucher = new DiscountVoucher({
      "description": "£10.00 off your order for spending over £50.00",
      "discountValue": 10,
      "eligibleValue": 50,
      "specialItems": []
    });

    var fifteenPoundVoucher = new DiscountVoucher({
      "description": "£15.00 off your order for spending over £75.00 and purchasing footwear",
      "discountValue": 15,
      "eligibleValue": 75,
      "specialItems": [{"category": "Footwear"}]
    });

    var availableVouchers = [fivePoundVoucher, tenPoundVoucher, fifteenPoundVoucher];
    var eligibleVouchers = [];

    for(var voucher of availableVouchers){
      if(shoppingBasket.checkEligibleForDiscountVoucher(voucher)){
        eligibleVouchers.push(voucher);
      }
    }

    return eligibleVouchers;
  },

  applyAvailableVoucher: function(availableVoucher){
    var shoppingBasket = new ShoppingBasket();
    for(var product of this.state.shoppingBasket){
      shoppingBasket.addProduct(new Product(product));
    }
    shoppingBasket.applyDiscountVoucher(availableVoucher);
    console.log(shoppingBasket.value);
    // this.totalBasketValue();
    this.setState({shoppingBasketValue: shoppingBasket.value});
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
        <Basket products={this.state.products} totalBasketValue={this.state.shoppingBasketValue} totalItemsInBasket={this.totalItemsInBasket} basket={this.state.shoppingBasket} availableVouchers={this.checkForAvailableVouchers()} applyAvailableVoucher={this.applyAvailableVoucher}/>
        <ClothingSelect products={this.state.products}/>
        <ClothingList products={this.state.products} setSelectedProduct={this.setSelectedProduct} addProductToBasket={this.addProductToBasket} removeProductFromBasket={this.removeProductFromBasket}/>
      </div>
    )
  }

});

module.exports = ClothingBox;
