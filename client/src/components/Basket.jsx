var React = require('react');
var VoucherBox = require('./VoucherBox');

var Basket = React.createClass({

  render: function(){

    return(
      <div className="col-12">
        <h1>my trove</h1>

        <h4>total trove value:</h4>
        <p>£{this.props.totalBasketValue}</p>

        <h4>total items in trove:</h4>
        <p>{this.props.totalItemsInBasket()}</p>

        <VoucherBox availableVouchers={this.props.availableVouchers} applyAvailableVoucher={this.props.applyAvailableVoucher}
        />

      </div>
    )
  }

});

module.exports = Basket;


