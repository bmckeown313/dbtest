var React = require('react');
var VoucherBox = require('./VoucherBox');

var Basket = React.createClass({

  render: function(){

    return(
      <div className="col-12" id="basket-trove">
        <h1>my trove</h1>

        <h3>total trove value:</h3>
        <p>£{this.props.totalBasketValue}</p>

        <h3>total items in trove:</h3>
        <p>{this.props.totalItemsInBasket()}</p>

        <VoucherBox availableVouchers={this.props.availableVouchers} applyAvailableVoucher={this.props.applyAvailableVoucher}
        />

      </div>
    )
  }

});

module.exports = Basket;


