import React, { useState } from 'react';
import { colors } from '../../styles';

const Textbox = ({ onChange, placeholder, changeWidth }) => {
  const [width, setWidth] = useState(changeWidth ? placeholder.length * 7 : 200);
  return (
    <input
      type="text"
      onChange={(text) => {
        onChange(text.target.value);
        if(changeWidth && text.target.value.length > placeholder.length) {
          setWidth(text.target.value.length * 8)
        }
      }}
      style={{ ...styles.input, width: width , maxWidth: changeWidth ? 200 : 200 }}
      placeholder={placeholder}
    />
  )
}

const styles = {
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: colors.darkblue,
    borderRadius: 100,
    height: 30,
    boxShadow: 0,
    border: 0,
    color: colors.white,
    fontFamily: 'Bree Serif',
    textAlign: 'center',
    fontSize: 16
  }
}

export { Textbox };
