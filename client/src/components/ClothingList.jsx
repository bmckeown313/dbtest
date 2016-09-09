var React = require('react');
var ClothingProduct = require('./ClothingProduct');

var ClothingList = React.createClass({

  render: function(){

    var clothingProductNodes = this.props.products.map(function(product, key){
      return <ClothingProduct
      key={key}
      product={product}
      productName={product.productName}
      colour={product.colour}
      department={product.department}
      category={product.category}
      price={product.price}
      quantityInStock={product.quantityInStock}
      imageUrl={product.imageUrl}
      addProductToBasket={this.props.addProductToBasket}
      />
    }.bind(this))

    return(
      <div>
        <h1>The clothing list</h1>
        <ul>
          {clothingProductNodes}
        </ul>
      </div>
    )
  }

});

module.exports = ClothingList;
