var _ = require('lodash');

var Stock = function(){
  this.stock = [];
};

Stock.prototype = {

  addProduct: function(product){
    this.stock.push(product);
  },

  checkIfItemInStock: function(item, quantity){
    var inStock = false;
    _.forEach(this.stock, function(product){
      if(product.name === item.name && product.quantityInStock >= quantity){
        inStock = true;
      }
    })
    return inStock;
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

  removeItemFromStock: function(item, quantity){
    if(this.checkIfItemInStock(item, quantity)){
      var index = this.stock.indexOf(item);
      this.stock[index].quantityInStock -= quantity;
    };
  },

  removeProductFromStock: function(product, quantity){
    if(this.checkIfItemInStock(product, quantity)){
      var index = this.stock.indexOf(product);
      this.stock.splice(index, 1);
    };
  },

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
