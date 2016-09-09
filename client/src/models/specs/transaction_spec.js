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













