var React = require('react');
var Product = require('../models/product');

var ClothingProduct = React.createClass({

  handleAddClick: function(){
    var selectedProduct = new Product({
      "id": this.props.id,
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

  handleRemoveClick: function(){
    var selectedProduct = new Product({
      "id": this.props.id,
      "productName": this.props.productName,
      "colour": this.props.colour,
      "department": this.props.department,
      "category": this.props.category,
      "price": this.props.price,
      "salePrice": this.props.salePrice,
      "quantityInStock": this.props.quantityInStock
    });
    this.props.removeProductFromBasket(selectedProduct);
  },

  render: function(){
    return(
      <div className="col-12">
        <br></br>
        <img src={this.props.imageUrl}></img>
        <br></br>
        <p key={this.props.key}>
         {this.props.productName} | {this.props.colour} | {this.props.department} | {this.props.category} | £{this.props.price} | {this.props.quantityInStock} in stock
        </p>
        <button className="add-product-button" onClick={this.handleAddClick}>add to cart</button> <button className="remove-product-button" onClick={this.handleRemoveClick}>remove from cart</button>
        <br></br>
        <br></br>
      </div>
    )
  }

});

module.exports = ClothingProduct;
