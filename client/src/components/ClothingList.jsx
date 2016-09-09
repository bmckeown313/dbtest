var React = require('react');
var ClothingProduct = require('./ClothingProduct');

var ClothingList = React.createClass({

  render: function(){

    var clothingProductNodes = this.props.products.map(function(product, key){
      return <ClothingProduct
      key={key}
      product={product}
      id={product.id}
      productName={product.productName}
      colour={product.colour}
      department={product.department}
      category={product.category}
      price={product.price}
      quantityInStock={product.quantityInStock}
      imageUrl={product.imageUrl}
      addProductToBasket={this.props.addProductToBasket}
      removeProductFromBasket={this.props.removeProductFromBasket}
      />
    }.bind(this))

    return(
      <div className="col-12">
        <h1>treasures:</h1>
          {clothingProductNodes}
      </div>
    )
  }

});

module.exports = ClothingList;
