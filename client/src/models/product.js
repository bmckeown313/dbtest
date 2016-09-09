var Product = function(params){
  this.productName = params.productName;
  this.colour = params.colour;
  this.department = params.department;
  this.category = params.category;
  this.price = params.price;
  this.salePrice = params.salePrice;
  this.quantityInStock = params.quantityInStock;
  this.imageUrl = params.imageUrl;
};

module.exports = Product;