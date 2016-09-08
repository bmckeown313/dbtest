var React = require('react');

var ClothingProduct = React.createClass({

  render: function(){
    return(
      <div>
        <li key={this.props.key}>
          {this.props.productName} | {this.props.department} | {this.props.category} | £{this.props.price} | {this.props.quantityInStock}
          <button>add to cart</button>
        </li>
      </div>
    )
  }

});

module.exports = ClothingProduct;