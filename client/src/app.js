var React = require('react');
var ReactDOM = require('react-dom');
var ClothingBox = require('./components/ClothingBox');

window.onload = function(){
  ReactDOM.render(
    <ClothingBox />,
    document.getElementById('app')
  );
}
