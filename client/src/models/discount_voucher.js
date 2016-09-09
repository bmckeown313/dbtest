var DiscountVoucher = function(params){
  this.discountValue = params.discountValue;
  this.eligibleValue = params.eligibleValue;
  this.specialItems = params.specialItems;
};

module.exports = DiscountVoucher;