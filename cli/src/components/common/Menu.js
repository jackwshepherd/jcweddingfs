import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import { Icon } from './Icon';
import { Button } from './Button';
import { useScreenWidth } from '../../hooks';

///
const Menu = ({ activeItem }) => {
  const menuItems = ['Schedule', 'Travel', 'FAQs', 'Contact'];
  const screenWidth = useScreenWidth();
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if(screenWidth >= 800) {
      setShowMenuButton(false);
      setShowMenu(false);
    } else {
      setShowMenuButton(true);
    }
  }, [screenWidth])

  return (
    <div style={{ width: '100vw', display: 'flex', position: 'fixed', top: 0, left: 0, height: 60, maxHeight: 60 }}>
      <div style={styles.wrapper}>
        <Link to='/'>
          <Button style={styles.logo}>
            Charlie and Jack
          </Button>
        </Link>
        {showMenuButton ? (
          <div style={{ width: 25, marginRight: 20 }}>
            <Button onClick={() => setShowMenu(!showMenu)}>
              <Icon type={showMenu ? 'menuClose' : 'menu'} size={20}/>
            </Button>
          </div>
        ) : ''}
        <HorizontalMenu
          visible={!showMenuButton}
          menuItems={menuItems}
        />
      </div>
      <VerticalMenu
        visible={showMenu}
        menuItems={menuItems}
        onClick={() => setShowMenu(false)}
      />
    </div>
  )
};

///
const HorizontalMenu = ({ visible, menuItems }) => {
  if(visible) {
    return (
      <div style={styles.horizontalMenu}>
        {menuItems.map(item => (
          <Link
            to={`/${item}`}
            key={item}
          >
            <Button
              style={{
                ...styles.item,
                borderBottom: item === 'test' ? `3px solid ${colors.blue}` : null
              }}
            >
              {item}
            </Button>
          </Link>
        ))}
      </div>
    )
  }
  return false;
}

///
const VerticalMenu = ({ visible, menuItems, onClick }) => {
  const [hoverItem, setHoverItem] = useState(null);
  if(visible) {
    return (
      <div style={styles.verticalMenu}>
      {menuItems.map(item => (
        <Link
          to={`/${item}`}
          key={item}
        >
          <Button
            onMouseOver={() => setHoverItem(item)}
            onClick={onClick}
            style={{
              ...styles.item,
              ...styles.verticalItem,
              backgroundColor: hoverItem === item ? colors.blue : null,
              borderLeft: item === 'test' ? `3px solid ${colors.blue}` : `3px solid ${colors.darkblue}`
            }}
          >
            {item}
          </Button>
        </Link>
      ))}
      </div>
    );
  }
  return false;
}

const styles = {
  wrapper: {
    flex: 1,
    maxHeight: 60,
    backgroundColor: colors.darkblue,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    fontFamily: 'Satisfy',
    fontSize: 18,
    color: colors.white,
  },
  horizontalMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    marginLeft: 100
  },
  verticalMenu: {
    position: 'absolute',
    top: 60,
    right: 0,
    left: 0,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.darkblue
  },
  item: {
    fontFamily: 'Bree Serif',
    fontSize: 14,
    color: colors.white,
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    alignItems: 'center',
  },
  verticalItem: {
    width: '100vw',
    height: 60,
  }
};

export { Menu };
