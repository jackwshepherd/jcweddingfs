import React from 'react';
import { colors, imageArray } from '../../styles';

const Background = ({ children, image }) => {
  return (
    <div style={{ ...styles.background, backgroundImage: `url(${imageArray[image]})`}}>
      {children}
    </div>
  );
}

Background.defaultProps = {
  image: 'image1'
}

const styles = {
  background: {
    display: 'flex',
    flex: 1,
    minHeight: '90vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    boxShadow: `inset 0 0 0 1000px ${colors.transparentdarkblue}`
  }
}

export { Background };
