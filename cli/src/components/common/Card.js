import React, { useEffect, useState, useRef } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';
import { Circle } from './';
import { colors } from '../../styles';
import { useCardSize, useResponsiveSize, useScreenWidth } from '../../hooks';
import ReactHtmlParser from 'react-html-parser';

/////
const eachCardStatus = (cardCount, cardWidth, scrollPosition, screenWidth) => {

  const cards = [];

  for(let i = 0; i <= (cardCount - 1); i++) {
    let middleEdge = (i * cardWidth) + (cardWidth / 2);

    if((middleEdge > scrollPosition) && (middleEdge <= ((scrollPosition + screenWidth)))) {
      cards[i] = true;
    } else {
      cards[i] = false;
    }

  }
  return cards;

}
/////
const CardList = ({ children }) => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const cardWidth = useCardSize().width + 30;
  const cardCount = children[1].length + 1
  const screenWidth = useScreenWidth() - 200;

  const displayArrows = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));

  const trackArrows = useRef(null);
  const cardCircles = eachCardStatus(cardCount, cardWidth, scrollPosition, screenWidth);

  useEffect((prev) => {
    trackArrows.current.addEventListener('scroll', (event) => {
      setScrollPosition(Math.floor(trackArrows.current.scrollLeft));
    });
    return () => false;
  }, [scrollPosition]);
  return (
      <div style={{ width: '90vw', maxWidth: '90vw', justifyContent: 'center', overflow: 'hidden'}}>
        <div style={{ ...styles.listContainer }}>
         {displayArrows ? (
            <div style={styles.scroller}>
              <Button onClick={() => trackArrows.current.scrollLeft = scrollPosition - cardWidth}>
                <Icon type="circleLeft" hidden={!(scrollPosition > (cardWidth / 2))}/>
              </Button>
            </div>
          ) : false }
          <div
            style={{
              ...styles.list,
              }}
            ref={trackArrows}>
            {children}
          </div>
          {displayArrows ? (
             <div style={styles.scroller}>
             <Button onClick={() => trackArrows.current.scrollLeft = scrollPosition + cardWidth}>
                <Icon type="circleRight" hidden={scrollPosition >= ((cardCount * cardWidth) - screenWidth)}/>
              </Button>
             </div>
           ) : false }
        </div>
        <div style={styles.circleContainer}>
          {screenWidth < (cardCount * cardWidth) ?
            cardCircles.map((value, key) => <Circle key={key} selected={value} color={colors.white} />) : null}
        </div>
      </div>
  );
}

/////
const CardCover = ({ type, children, ref, color, textColor }) => {
  const size = useCardSize();
  return (
    <div style={{ ...styles.container, ...size }}>
      <div style={{ ...styles.wrapper, backgroundColor: colors[color], color: colors[textColor], ...size }}>
        <div
          style={{
            ...styles.header,
            fontSize: useResponsiveSize(9),
            height: useResponsiveSize(20),
            color: colors[textColor]
          }}
        >
          {types[type].title}
        </div>
        <div style={styles.icon}>
          <Icon type={types[type].icon} size={useResponsiveSize(80)} color={colors[textColor]} />
        </div>
        {children ? <Text background='dark'>{children}</Text> : '' }
      </div>
    </div>
  );
}

CardCover.defaultProps = {
  type: 'Travel'
}

/////
const CardContent = ({ type, title, children, icon, color, textColor }) => {
  const size = useCardSize();
  return (
    <div style={{ ...styles.container, ...size }}>
      <div style={{ ...styles.wrapper, ...styles.cardContent, ...size }}>
        <div
          style={{
            ...styles.title,
            ...styles.header,
            backgroundColor: colors[color],
            color: colors[textColor],
            height: useResponsiveSize(20),
            fontSize: useResponsiveSize(9)
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
          <div style={styles.icon}>
            <Icon type={icon} size={useResponsiveSize(80)} />
          </div>
          {children ? <Text background='light'>{ReactHtmlParser(children)}</Text> : '' }
        </div>
      </div>
    </div>
  );
}

CardContent.defaultProps = {
  type: 'Travel',
  title: 'Untitled Card',
  icon: 'train'
}

/////
const Text = ({ children, background, size }) => (
  <div
    style={{
      ...styles.content,
      color: background === 'light' ? colors.darkblue : colors.white,
      fontSize: useResponsiveSize(13, 1.1),
      paddingLeft: useResponsiveSize(10, 1.4),
      paddingRight: useResponsiveSize(10, 1.4)
    }}>
    <span>{children}</span>
  </div>
);

const types = {
  Schedule: {
    title: 'Schedule',
    icon: 'tasks',
    color: colors.orange
  },
  Travel: {
    title: 'Travel & Accommodation',
    icon: 'map',
    color: colors.blue
  },
  Order: {
    title: 'Order of the day',
    icon: 'tasks',
    color: colors.orange
  },
  FAQs: {
    title: 'FAQs',
    icon: 'question',
    color: colors.yellow
  },
  Contact: {
    title: 'Contact',
    icon: 'question',
    color: colors.darkblue
  }
}

const styles = {
  listContainer: {
   display: '-ms-flexbox',
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'stretch',
   justifyContent: 'center',
   flex: 1,
   maxWidth: '100vw',
  },
  list: {
    scrollSnapType: 'x mandatory',
    overflow: 'auto',
    display: 'flex',
    maxHeight: 600,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  },
  container: {
    display: 'flex',
    scrollSnapAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    minWidth: 249,
    maxWidth: 249,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    boxShadow: '1px 1px 3px 1px rgba(0,0,0,0.3)',
  },
  cardContent: {
    backgroundColor: colors.white,
  },
  title: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    display: 'flex',
    fontFamily: 'Bree Serif',
    fontWeight: 'normal',
    color: colors.white,
    letterSpacing: 4.5,
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Bree Serif',
    color: colors.darkblue,
    textAlign: 'center',
    fontSize: 12,
    flex: 1
  },
  scroller: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 100,
  },
  circleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10
  },
};

export { CardList, CardCover, CardContent };
