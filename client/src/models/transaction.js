var _ = require('lodash');

var Transaction = function(params){
  this.shoppingBasket = params.shoppingBasket;
  this.stock = params.stock;
};

Transaction.prototype = {

  moveProductFromStockToBasket: function(product, quantity){
    if(this.stock.checkIfItemInStock(product, quantity)){
      this.shoppingBasket.addProduct(product);
      this.stock.removeItemFromStock(product, quantity);
    }
  }

};

module.exports = Transaction;








