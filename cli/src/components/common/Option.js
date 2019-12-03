import React from 'react';
import { colors } from '../../styles';

const Option = ({ children, onClick, selected }) => (
  <button
    onClick={onClick}
    style={{
      ...styles.button,
      opacity: selected ? 1 : 0.3
    }}
  >
    {children}
  </button>
)

const styles = {
  button: {
    backgroundColor: colors.darkblue,
    borderRadius: 100,
    color: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    fontFamily: 'Bree Serif',
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    height: 30,
  }
}
export { Option };
