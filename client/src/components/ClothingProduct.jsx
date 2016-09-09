var React = require('react');

var ClothingProduct = React.createClass({

  render: function(){
    return(
      <div>
        <li key={this.props.key}>
        <img src={this.props.imageUrl}></img> | 
          {this.props.productName} | {this.props.colour} | {this.props.department} | {this.props.category} | £{this.props.price} | {this.props.quantityInStock} | <button>add to cart</button>
        </li>
      </div>
    )
  }

});

module.exports = ClothingProduct;
