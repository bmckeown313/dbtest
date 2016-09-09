var _ = require('lodash');

var Stock = function(){
  this.stock = [];
};

Stock.prototype = {

  addProduct: function(product){
    this.stock.push(product);
  },


  checkSpecialItemPresent: function(voucher){
    var matchedItems = [];
    _.forEach(voucher.specialItems, function(specialItem){
      matchedItems = _.filter(this.basket, _.matches(specialItem));
    }.bind(this));
      matchedItems = _.uniq(matchedItems);
    return (matchedItems.length === voucher.specialItems.length);
  },

  checkIfItemInStock: function(item, quantity){
    // var inStock = false;
    // _.forEach(this.stock, function(product){
    //   if(product.productName === item.productName && product.quantityInStock >= quantity){
    //     inStock = true;
    //   }
    // })
    // return inStock;
    return item.quantityInStock >= quantity;
  },

  countTotalItemsInStock: function(){
    var total =0;
    _.forEach(this.stock, function(product){
      total += product.quantityInStock;
    })
    return total;
  },

  countTotalProductsInStock: function(){
    return this.stock.length;
  },

  calculateTotalStockValue: function(){
    var total =0;
    _.forEach(this.stock, function(product){
      total += (product.price * product.quantityInStock);
    })
    return total;
  },

  removeItemFromStock: function(removedItem, quantity){
    for(var i = 0; i < this.stock.length; i++){
      if(this.stock[i].id === removedItem.id){
        this.stock[i].quantityInStock -= quantity;
      }
    }


    // if(this.checkIfItemInStock(removedItem, quantity)){
    //   var index = this.stock.indexOf(removedItem);
    //   this.stock[index].quantityInStock -= quantity;
    // };
  },


  // removeProduct: function(removedProduct){
  //   for(var i = 0; i < this.basket.length; i++){
  //     if(this.basket[i].id === removedProduct.id){
  //       this.basket.splice(i, 1)
  //       console.log("index", i);
  //     }
  //   }
  //   if(removedProduct.salePrice){
  //     this.value -= removedProduct.salePrice
  //   } else {
  //     this.value -= removedProduct.price
  //   };
  // },

  // removeProductFromStock: function(product, quantity){
  //   if(this.checkIfItemInStock(product, quantity)){
  //     var index = this.stock.indexOf(product);
  //     this.stock.splice(index, 1);
  //   };
  // },

  filterProductsByCategory(category){
    return _.filter(this.stock, function(product){
      return product.category === category;
    });
  },

  filterProductsByDepartment(department){
    return _.filter(this.stock, function(product){
      return product.department === department;
    });
  },

  filterProductsByInSale(){
    return _.filter(this.stock, function(product){
      return product.inSale === true;
    });
  },

  filterProductsByPrice(minPrice, maxPrice){
    return _.filter(this.stock, function(product){
      return (product.price >= minPrice && product.price <= maxPrice);
    });
  }

};

module.exports = Stock;

// -------------------
// additional methods
// -------------------

// countTotalItemsInStockByDepartment: function(department){
//   var total = 0;
//   _.forEach(this.stock, function(product){
//     if(product.department === department){
//       total += product.quantityInStock;
//     }
//   })
//   return total;
// }

// countTotalItemsInStockByCategory: function(category){
//   var total = 0;
//   _.forEach(this.stock, function(product){
//     if(product.category === category){
//       total += product.quantityInStock;
//     }
//   })
//   return total;
// }
