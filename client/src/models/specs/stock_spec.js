var assert = require('assert');
var Stock = require('../stock');
var Product = require('../product');

beforeEach(function(){

  stock = new Stock();

  product1 = new Product({
    "productName": "Almond Toe Court Shoes, Patent Black",
    "department": "Women's",
    "category": "Footwear",
    "price": 99.00,
    "salePrice": null,
    "quantityInStock": 5
  });

  product2 = new Product({
    "productName": "Flip Flops, Blue",
    "department": "Men's",
    "category": "Footwear",
    "price": 19.00,
    "salePrice": null,
    "quantityInStock": 0
  });

  product3 = new Product({
    "productName": "Fine Stripe Short Sleeve Shirt, Grey",
    "department": "Men's",
    "category": "Casualwear",
    "price": 49.99,
    "salePrice": null,
    "quantityInStock": 9
  });

});

describe('Stock', function(){

  it('should be able to count the number of items in stock', function(){
    stock.addProduct(product1);
    assert.equal(stock.countTotalItemsInStock(), 5);
  });

  it('should be able to count the number of products in stock', function(){
    stock.addProduct(product1);
    assert.equal(stock.countTotalProductsInStock(), 1);
  });

  it('should begin with no stock', function(){
    assert.equal(stock.countTotalItemsInStock(), 0);
    assert.equal(stock.calculateTotalStockValue(), 0);
  });

  it('should be able to populate stock', function(){
    stock.addProduct(product1);
    assert.equal(stock.countTotalItemsInStock(), 5);
    assert.equal(stock.calculateTotalStockValue(), 495);
  });

  it('should be able to check if an item is in stock', function(){
    stock.addProduct(product1);
    assert.equal(stock.checkIfItemInStock(product1, 4), true);
  });

  it('should be able to check if an item is not in stock', function(){
    stock.addProduct(product2);
    assert.equal(stock.checkIfItemInStock(product2, 1), false);
  });

  it('should be able to remove an item from the stock', function(){
    stock.addProduct(product1);
    stock.removeItemFromStock(product1, 2);
    assert.equal(stock.countTotalItemsInStock(), 3);
    assert.equal(stock.calculateTotalStockValue(), 297);
  });

  it('should be able to remove a product from the stock', function(){
    stock.addProduct(product1);
    stock.addProduct(product3);
    stock.removeProductFromStock(product3, 1);
    assert.equal(stock.countTotalProductsInStock(), 1);
    assert.equal(stock.calculateTotalStockValue(), 495);
  });

  it('should be able to filter products by category', function(){
    stock.addProduct(product1);
    stock.addProduct(product3);
    assert.deepEqual(stock.filterProductsByCategory("Footwear"), [product1]);
  });

  it('should be able to filter products by department', function(){
    stock.addProduct(product1);
    stock.addProduct(product3);
    assert.deepEqual(stock.filterProductsByDepartment("Men's"), [product3]);
  });

  it('should be able to filter products by price', function(){
    stock.addProduct(product1);
    stock.addProduct(product3);
    assert.deepEqual(stock.filterProductsByPrice(80, 100), [product1]);
  });

});










