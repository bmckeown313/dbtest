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


