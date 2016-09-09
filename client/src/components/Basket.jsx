var React = require('react');
var VoucherBox = require('./VoucherBox');

var Basket = React.createClass({

  render: function(){
    return(
      <div>
        <h1>The basket</h1>

        <h4>Total basket value:</h4>
        <p>£{this.props.totalBasketValue}</p>

        <h4>Total items in basket:</h4>
        <p>{this.props.totalItemsInBasket()}</p>

        <h4>Items:</h4>
        <p></p>

        <VoucherBox availableVouchers={this.props.availableVouchers} applyAvailableVoucher={this.props.applyAvailableVoucher}
        />

      </div>
    )
  }

});

module.exports = Basket;



// addProductToBasket: function(selectedProduct){
//   var shoppingBasket = new ShoppingBasket();

//   for(var product of this.state.shoppingBasket){
//     shoppingBasket.addProduct(new Product(product));
//   }

//   this.setState({shoppingBasket: shoppingBasket.basket});

//   var stock = new Stock();

//   for(var product of this.state.shoppingBasket){
//     stock.addProduct(product);
//   }

//   var transaction = new Transaction({"shoppingBasket": shoppingBasket, "stock": stock});

//   transaction.moveProductFromStockToBasket(selectedProduct, 1);

//   // shoppingBasket.addProduct(selectedProduct);
  
// },