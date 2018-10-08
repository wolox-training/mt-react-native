import React from 'react';
import PropTypes from 'prop-types';

function Square({value, onClick, ...props}) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Square;
