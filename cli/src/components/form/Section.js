import React from 'react';
import { Icon } from '../common';
import { colors } from '../../styles';

const Section = ({ up, down, both, children }) => {
  return (
    <div style={styles.content}>
      <div style={styles.children}>
        {children}
      </div>
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
    flex: 1,
    minHeight: '100vh',
    minWidth: '100vw',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
};

export default Section;
