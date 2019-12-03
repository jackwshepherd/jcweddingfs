import React from 'react';

const Circle = ({ selected, color }) => (
  <div
    style={{
      backgroundColor: color,
      height: 10,
      width: 10,
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      opacity: selected ? 1 : 0.3
    }}
  />
);

Circle.defaultProps = {
  color: '#000000',
  selected: false
}

export { Circle };
