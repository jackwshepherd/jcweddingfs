import React from 'react';
import { colors } from '../../styles';

const Header = () => (
  <div style={styles.header}>Guest list</div>
)

const styles = {
  header: {
    display: 'flex',
    width: '100vw',
    height: 100,
    backgroundColor: colors.darkblue,
    fontFamily: 'Satisfy',
    fontSize: 32,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export { Header };
