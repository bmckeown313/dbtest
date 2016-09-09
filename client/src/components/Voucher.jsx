var React = require('react');
var DiscountVoucher = require('../models/discount_voucher');

var Voucher = React.createClass({

  handleAddClick: function(){
   var selectedVoucher = new DiscountVoucher({
         "description": this.props.description,
         "discountValue": this.props.discountValue,
         "eligibleValue": this.props.eligibleValue,
         "specialItems": this.props.specialItems
       });

       this.props.applyAvailableVoucher(selectedVoucher);
  },

  render: function(){
    return(
      <div>
        <li> {this.props.voucher.description} <button className="add-product-button" onClick={this.handleAddClick}>apply</button>
        </li>
      </div>
    )
  }

});

module.exports = Voucher;
