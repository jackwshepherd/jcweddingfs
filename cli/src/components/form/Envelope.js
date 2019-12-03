import React from 'react';
import { colors } from '../../styles';
import envelope from '../../images/envelope.png';
import bottom from '../../images/envelope-bottom.png';
import { useScreenWidth, useScreenHeight } from '../../hooks';



const Envelope = ({ invite }) => {

  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();

  // Make sure label follows envelope
  const getEnvelopeDimensions = () => {
    // Assume we can extend full width
    const containerWidth = screenWidth - 60;
    const containerHeight = screenHeight * 0.5;
    const scaledHeight = ((containerWidth / 608) * 455);

    // If the height is bigger than the container we need to reduce width
    if(scaledHeight > containerHeight) {
      return {
        height: containerHeight > 455 ? 455 : containerHeight,
        width: containerHeight > 455 ? 608 : (containerHeight / 455) * 608,
        spaceX: containerWidth - ((containerHeight / 455) * 608),
        spaceY: containerHeight - (containerHeight > 455 ? 455 : containerHeight)
      }
    }

    return {
      height: containerWidth > 608 ? 455 : scaledHeight,
      width: containerWidth > 608 ? 608 : containerWidth,
      spaceY: containerHeight - (containerWidth > 608 ? 455 : scaledHeight)
    }
  }
  const envelopeDimensions = getEnvelopeDimensions();

  const labelDimensions = {
    width: (envelopeDimensions.width / 608) * 200,
    height: (envelopeDimensions.height / 455) * 100
  };
  const labelArea = labelDimensions.width * labelDimensions.height;

  return (
    <div>
      <div
        style={{
          ...styles.envelope,
          backgroundSize: `${envelopeDimensions.width}px ${envelopeDimensions.height}px`,
          width: '100vw',
          height: envelopeDimensions.height
        }}
      >
        <div
          style={{
            ...styles.label,
            ...labelDimensions,
            fontSize: labelArea >= 10000 ? 16 : 10
          }}
        >
            {invite.people.map(({ firstname, lastname }, key) => {
              const person = `${firstname} ${lastname}`;
              if(key === 0) {
                return <span key={person}>{person}</span>;
              }
              if((key + 1) === invite.people.length) {
                return <span key={person}>{` and ${person}`}</span>;
              }
              return <span key={person}>{`, ${person}`}</span>;
            })}
        </div>
      </div>
      <div style={styles.reflection}>
        <img src={bottom} alt='' style={{ width: (envelopeDimensions.width / 608) * 664 }}/>
      </div>
    </div>
  );
};

const styles = {
  envelope: {
    fontFamily: 'Bree Serif',
    display: '-ms-flexbox',
    display: 'flex',
    backgroundImage: `url(${envelope})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    display: '-ms-flexbox',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    color: colors.darkblue,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    overflow: 'hidden'
  },
  reflection: {
    width: '100vw',
    justifyContent: 'center',
    display: '-ms-flexbox',
    display: 'flex'
  }
}

export default Envelope;
