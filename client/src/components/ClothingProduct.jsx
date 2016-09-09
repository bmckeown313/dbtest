var React = require('react');
var Product = require('../models/product');

var ClothingProduct = React.createClass({

  handleClick: function(){
    var selectedProduct = new Product({
      "productName": this.props.productName,
      "colour": this.props.colour,
      "department": this.props.department,
      "category": this.props.category,
      "price": this.props.price,
      "salePrice": this.props.salePrice,
      "quantityInStock": this.props.quantityInStock
    });

    this.props.addProductToBasket(selectedProduct);

  },

  render: function(){
    return(
      <div>
        <li key={this.props.key}>
        <img src={this.props.imageUrl}></img> | 
          {this.props.productName} | {this.props.colour} | {this.props.department} | {this.props.category} | £{this.props.price} | {this.props.quantityInStock} | <button onClick={this.handleClick}>add to cart</button>
        </li>
      </div>
    )
  }

});

module.exports = ClothingProduct;
