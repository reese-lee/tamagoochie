import React from 'react';
import PropTypes from 'prop-types'

function Form (props) {
  let _name = null;
  let _color = null;

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewTamagucci({name: _name.value, color: _color.value})
    _name.value = '';
    _color.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}} />
        <select type='text' id='color' ref={(select) => {_color = select;}}>
          <option id='gold' value="gold">Gold</option>
          <option id='pink' value="pink">Pink</option>
          <option id='glitter' value="glitter">Glitter</option>
          <option id='rainbow' value="rainbow">Rainbow</option>
          <option id='snakeskin' value="snakeskin">Snakeskin</option>
          <option id='brown' value="brown">Boring</option>
          <option id='hiker' value="brown">Hiker... color</option>
        </select>
        <button type="submit">Make my Tamagucci, yo</button>
      </form>
    </div>

  )
}

Form.propTypes = {
  onNewTamagucci: PropTypes.func
};

export default Form;
