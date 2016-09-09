var DiscountVoucher = function(params){
  this.description = params.description;
  this.discountValue = params.discountValue;
  this.eligibleValue = params.eligibleValue;
  this.specialItems = params.specialItems;
};

module.exports = DiscountVoucher;