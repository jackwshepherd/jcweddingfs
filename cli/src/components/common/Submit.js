import React from 'react';
import { Button } from './Button';
import { colors } from '../../styles';

const Submit = ({ children, onClick, width, style, disabled, color }) => (
  <Button
    style={{
      ...styles.button,
      width,
      ...style,
      opacity: disabled ? 0.3 : 1
    }}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

Submit.defaultProps = {
  enabled: true
}

const styles = {
  button: {
    backgroundColor: colors.darkblue,
    borderRadius: 20,
    padding: '5px 15px',
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Bree Serif',
  }
}

export { Submit };
