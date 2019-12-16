import React from 'react';
import Div100vh from 'react-div-100vh'
import { Icon } from '../common';
import { colors } from '../../styles';


const Section = ({ up, down, both, children }) => {
  return (
      <div style={styles.children}>
        {children}
      </div>
  );
}

Section.defaultProps = {
  up: false,
  down: false,
  both: false
}

const styles = {
  children: {
    display: '-ms-flexbox',
    display: 'flex',
    minWidth: '100vw',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Bree Serif',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 100
  },
};

export default Section;
