var assert = require('assert');
var Transaction = require('../transaction');
var Stock = require('../stock');
var Product = require('../product');
var ShoppingBasket = require('../shopping_basket');
var DiscountVoucher = require('../discount_voucher');

beforeEach(function(){

  stock = new Stock();

  shoppingBasket = new ShoppingBasket();

  transaction = new Transaction({
    "shoppingBasket": shoppingBasket,
    "stock":stock
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

describe('Transaction', function(){

  it('should move an in stock product from stock to the basket', function(){
    stock.addProduct(product3);
    transaction.moveProductFromStockToBasket(product3, 1);
    assert.equal(product3.quantityInStock, 8);
    assert.equal(shoppingBasket.value, 49.99);
    assert.equal(shoppingBasket.numberOfProducts(), 1);
  });

  it('should not be able to move an out of stock product from stock to the basket', function(){
    stock.addProduct(product2);
    transaction.moveProductFromStockToBasket(product2, 1);
    assert.equal(product2.quantityInStock, 0);
    assert.equal(shoppingBasket.value, 0);
    assert.equal(shoppingBasket.numberOfProducts(), 0);
  });

});













