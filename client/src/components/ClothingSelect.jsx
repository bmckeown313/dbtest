var React = require('react');

var ClothingSelect = React.createClass({

  render: function(){
    return(
      <div>
 
        <select>
          <option selected disabled>select clothing category</option>
          <option>footwear</option>
          <option>casualwear</option>
          <option>formalwear</option>
        </select>
        <br></br><br></br>
        <select>
          <option selected disabled>select department</option>
          <option>Menswear</option>
          <option>Womenswear</option>
        </select>

      </div>
    )
  }

});

module.exports = ClothingSelect;