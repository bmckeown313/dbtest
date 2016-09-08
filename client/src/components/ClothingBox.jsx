var React = require('react');
var ClothingSelect = require('./ClothingSelect');
var ClothingList = require('./ClothingList');
var BasketButton = require('./BasketButton');
var Basket = require('./Basket');

var ClothingBox = React.createClass({

  getInitialState: function(){
    return({products: []});
  },

  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/products");
    request.onload = function() {
      if(request.status === 200){
        var sampleProducts = JSON.parse(request.responseText);
        this.setState({products: sampleProducts});
        console.log(sampleProducts);
        };
      }.bind(this);
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <h1>The clothing box</h1>
        <Basket products={this.state.products}/>
        <BasketButton />
        <ClothingSelect products={this.state.products}/>
        <ClothingList products={this.state.products}/>
      </div>
    )
  }

});

module.exports = ClothingBox;
