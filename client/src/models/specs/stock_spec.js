var assert = require('assert');
var Stock = require('../stock');
var Product = require('../product');

beforeEach(function(){

  stock = new Stock();

  product1 = new Product({
    "id": 0,
    "productName": "Almond toe, patent, court shoes",
    "colour": "Black",
    "department": "Women's",
    "category": "Footwear",
    "price": 99.00,
    "salePrice": null,
    "quantityInStock": 5,
    "imageUrl": "http://images.asos-media.com/inv/media/6/1/3/4/6674316/black/image1xl.jpg"
  });

  product2 = new Product({
    "id": 4,
    "productName": "Flip flops",
    "colour": "Blue",
    "department": "Men's",
    "category": "Footwear",
    "price": 19.00,
    "salePrice": null,
    "quantityInStock": 0,
    "imageUrl": "http://images.asos-media.com/inv/media/3/3/3/9/6689333/blue/image1xxl.jpg"
  });

  product3 = new Product({
    "id": 7,
    "productName": "Fine stripe short sleeve shirt",
    "colour": "Grey",
    "department": "Men's",
    "category": "Casualwear",
    "price": 49.99,
    "salePrice": null,
    "quantityInStock": 9,
    "imageUrl": "http://images.asos-media.com/inv/media/9/0/5/7/6507509/image3xxl.jpg"
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
    stock.removeItemFromStock(product1, 1);
    assert.equal(stock.countTotalItemsInStock(), 4);
    // assert.equal(stock.calculateTotalStockValue(), 297);
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










