import React from 'react';
import { colors } from '../../styles';
import * as background from '../../images/background.png';

const Background = ({ children, transparent }) => {
  return (
    <div
      style={{
        ...styles.background,
        backgroundImage: `url(${background})`,
      }}>
      {children}
    </div>
  );
}

Background.defaultProps = {
  transparent: true
}

const styles = {
  background: {
    display: '-ms-flexbox',
    display: 'flex',
    flex: 1,
    height: '100vh',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'tile',
    verticalAlign: 'middle'
  }
}

export { Background };
