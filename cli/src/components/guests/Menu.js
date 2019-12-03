import React from 'react';
import { Submit } from '../common';
import { colors } from '../../styles';

const Menu = ({ selected, onClick }) => (
  <div style={styles.container}>
    <MenuOption
      onClick={() => onClick('Not sent')}
      color={colors.blue}
      selected={selected === 'Not sent'}
    >
      Not sent
    </MenuOption>
    <MenuOption
      onClick={() => onClick('No reply')}
      color={colors.orange}
      selected={selected === 'No reply'}
    >
      No reply
    </MenuOption>

    <MenuOption
      onClick={() => onClick('Can come')}
      color={colors.green}
      selected={selected === 'Can come'}
    >
      Can come
    </MenuOption>

    <MenuOption
      onClick={() => onClick('Can\'t come')}
      color={colors.red}
      selected={selected === 'Can\'t come'}
    >
      Can't come
    </MenuOption>

  </div>
);

const MenuOption = ({ onClick, color, selected, children }) => (
  <Submit
    onClick={onClick}
    style={{ marginTop: 20, backgroundColor: selected ? color : colors.white, marginRight: 20, color: selected ? colors.white : color }}
  >
    {children}
  </Submit>
)

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    border: `1px solid ${colors.borderGrey}`,
    backgroundColor: colors.white
  }
}

export { Menu };
