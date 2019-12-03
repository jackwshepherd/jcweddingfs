import React from 'react';
import { useParams } from 'react-router-dom';
import { Background, Icon, Menu } from '../common';
import { colors, imageArray, text } from '../../styles';
import { useResponsiveSize } from '../../hooks';


const Home = ({ message }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Menu />
      <Background image='0' transparent={false}>
        <div style={styles.circle}>
          <div style={{ marginTop: -20 }}>
            <Icon type='bells' size={useResponsiveSize(80)} />
          </div>
          <div style={{ ...text.date, marginTop: 20 }}>{message}</div>
          <div style={{ ...text.small, marginTop: 20, width: 250, textAlign: 'center' }}>Have a click around this site for more information - come back and visit anytime!</div>
        </div>
      </Background>
      {imageArray.map((image, key) => image ? <img src={image} alt={'ted'} style={styles.image} key={image} /> : false )}
      <div style={{ position: 'absolute', bottom: 30, width: '100vw', display: 'flex', justifyContent: 'center' }}><Icon type="down" size={40} /></div>
      </div>
  );
}

Home.defaultProps = {
  message: '30 May 2020'
}

const styles = {
  circle: {
    width: '90vw',
    maxWidth: 375,
    maxHeight: 375,
    height: '90vw',
    backgroundColor: colors.white,
    borderRadius: '90vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100vw',
    height: 'auto',
    margin: 0,
    paddong: 0
  }
}

export { Home };
