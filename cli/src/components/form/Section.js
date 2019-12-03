import React from 'react';
import Div100vh from 'react-div-100vh'
import { Icon } from '../common';
import { colors } from '../../styles';


const Section = ({ up, down, both, children }) => {
  return (
    <div style={styles.content}>
      <Div100vh style={styles.children}>
        {children}
      </Div100vh>
    </div>
  );
}

Section.defaultProps = {
  up: false,
  down: false,
  both: false
}

const styles = {
  content: {
    display: '-ms-flexbox',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    scrollSnapAlign: 'start',
    justifyContent: 'space-between',
    color: colors.darkblue,
    fontFamily: 'Bree Serif',

  },
  children: {
    display: '-ms-flexbox',
    display: 'flex',
    height: '100vh',
    minWidth: '100vw',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Section;
