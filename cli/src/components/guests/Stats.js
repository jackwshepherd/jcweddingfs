import React from 'react';
import { colors } from '../../styles';

const pageColors = {
  "Can come": colors.green,
  "No reply": colors.orange,
  "Can't come": colors.red,
  "Not sent": colors.blue
}

const Stats = ({ page, data, total }) => {

  if(!data) {
    return null;
  }
  const dietary = data ? {
    none: data.filter(val => val.dietary === 'None').length,
    vegetarian: data.filter(val => val.dietary === 'Vegetarian').length,
    vegan: data.filter(val => val.dietary === 'Vegan').length,
  } : false;

  return (
    <div style={styles.container}>
      <div style={styles.bigNumberContainer}>
        <div style={{ ...styles.bigNumber, backgroundColor: pageColors[page] }}>
          {total ? total : false}
        </div>
        <div style={{ ...styles.title, color: pageColors[page] }}>{page}</div>
      </div>
      { page === 'Can come' ? (
        <div style={{ display: 'flex', justifyContent: 'flex-start', overflowX: 'scroll', maxWidth: '84vw'}}>
          <div style={styles.smallNumberContainer}>
            <div style={styles.smallNumber}>{dietary.vegetarian}</div>
            <div style={styles.smallNumberText}>Vegetarian</div>
          </div>
          <div style={styles.smallNumberContainer}>
            <div style={styles.smallNumber}>{dietary.vegan}</div>
            <div style={styles.smallNumberText}>Vegan</div>
          </div>
          <div style={styles.smallNumberContainer}>
            <div style={styles.smallNumber}>{data.length - dietary.none - dietary.vegetarian - dietary.vegan}</div>
            <div style={styles.smallNumberText}>Other</div>
          </div>
        </div>
      ) : null }
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: 20,
    borderBottom: `1px solid ${colors.borderGrey}`,
    flexDirection: 'column'
  },
  bigNumberContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40
  },
  bigNumber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
    fontFamily: 'Bree Serif',
    fontWeight: '600',
    color: colors.white,
    marginRight: 15
  },
  title: {
    fontFamily: 'Bree Serif',
    fontSize: 18,
  },
  smallNumberContainer: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    color: colors.boxGrey,
    fontFamily: 'Bree Serif',
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10
  },
  smallNumber: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: colors.boxGrey,
    color: colors.white,
    fontFamily: 'Bree Serif',
    fontSize: 12,
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallNumberText: {
    marginLeft: 10
  }
}

export { Stats };
