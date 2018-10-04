import React from 'react';

function Square({value, onClick, ...props}) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
