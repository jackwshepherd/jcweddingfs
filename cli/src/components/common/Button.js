import React from 'react';
import '../../App.css';

const Button = ({ children, onClick, onMouseOver, style, disabled }) => (
  <button
    onClick={(onClick)}
    onMouseOver={onMouseOver}
    style={style}
    disabled={disabled}
  >
    {children}
  </button>
);

export { Button };
