var assert = require('assert');
var ShoppingBasket = require('../shopping_basket');
var Product = require('../product');
var DiscountVoucher = require('../discount_voucher');

beforeEach(function(){

  shoppingBasket = new ShoppingBasket();

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

  product4 = new Product({
    "productName": "Fine Stripe Short Sleeve Shirt, Green",
    "department": "Men's",
    "category": "Casualwear",
    "price": 49.99,
    "salePrice": 39.99,
    "quantityInStock": 3
  });

  fiveVoucher = new DiscountVoucher({
    "discountValue": 5,
    "eligibleValue": 5,
    "specialItems": []
  });

  tenVoucher = new DiscountVoucher({
    "discountValue": 10,
    "eligibleValue": 50,
    "specialItems": []
  });

  fifteenVoucher = new DiscountVoucher({
    "discountValue": 15,
    "eligibleValue": 75,
    "specialItems": [{"category": "Footwear"}]
  });

});

describe('ShoppingBasket', function(){

  it('should begin with no products', function(){
    assert.equal(0, shoppingBasket.numberOfProducts());
  });

  it('should begin with a value of zero', function(){
    assert.equal(0, shoppingBasket.value);
  });

  it('should be able to receive a non sale product and add price to value', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(99.00, shoppingBasket.value);
    assert.equal(1, shoppingBasket.numberOfProducts());
  });

  it('should be able to receive a sale product and add sale price to value', function(){
    shoppingBasket.addProduct(product4);
    assert.equal(39.99, shoppingBasket.value);
    assert.equal(1, shoppingBasket.numberOfProducts());
  });

  it('should be able to remove a product and deduct from the value', function(){
    shoppingBasket.addProduct(product1);
    shoppingBasket.addProduct(product2);
    shoppingBasket.removeProduct(product1);
    // assert.equal(19.00, shoppingBasket.value);
    assert.equal(1, shoppingBasket.numberOfProducts());
  });

  it('should be able to empty', function(){
    shoppingBasket.addProduct(product1);
    shoppingBasket.addProduct(product2);
    shoppingBasket.addProduct(product3);
    shoppingBasket.emptyBasket();
    assert.equal(0, shoppingBasket.numberOfProducts());
    assert.equal(0, shoppingBasket.value);
  });

  it('should check if a basket contains the special items', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(shoppingBasket.checkSpecialItemPresent(fifteenVoucher), true);
  });

  it('should check if a basket does not contain the special items', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(shoppingBasket.checkSpecialItemPresent(fifteenVoucher), false);
  });

  it('should check if a basket meets the discount voucher threshold', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(shoppingBasket.checkEligibleDiscountValueReached(fiveVoucher), true);
  });

  it('should check if a basket does not meet the discount voucher threshold', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(shoppingBasket.checkEligibleDiscountValueReached(fifteenVoucher), false);
  });

  it('should check if a basket is eligible for a five pound discount voucher', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(shoppingBasket.checkEligibleForDiscountVoucher(fiveVoucher), true);
  });

  it('should check if a basket is eligible for a five pound discount voucher', function(){
    assert.equal(shoppingBasket.checkEligibleForDiscountVoucher(fiveVoucher), false);
  });

  it('should check if a basket is eligible for a ten pound discount voucher', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(shoppingBasket.checkEligibleForDiscountVoucher(tenVoucher), true);
  });

  it('should check if a basket is not eligible for a ten pound discount voucher', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(shoppingBasket.checkEligibleForDiscountVoucher(tenVoucher), false);
  });

  it('should check if a basket is eligible for a fifteen pound discount voucher', function(){
    shoppingBasket.addProduct(product1);
    assert.equal(shoppingBasket.checkEligibleForDiscountVoucher(fifteenVoucher), true);
  });

  it('should check if a basket is not eligible for a fifteen pound discount voucher', function(){
    shoppingBasket.addProduct(product3);
    assert.equal(shoppingBasket.checkEligibleForDiscountVoucher(fifteenVoucher), false);
  });

  it('should apply a discount to a basket', function(){
    shoppingBasket.addProduct(product1);
    shoppingBasket.applyDiscountVoucher(fifteenVoucher);
    assert.equal(shoppingBasket.value, 84.00);
  });

  it('should refuse to apply a discount to a basket', function(){
    shoppingBasket.addProduct(product3);
    shoppingBasket.applyDiscountVoucher(fifteenVoucher);
    assert.equal(shoppingBasket.value, 49.99);
  });

});










