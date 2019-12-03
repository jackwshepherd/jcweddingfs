import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapSigns,
  faTasksAlt,
  faQuestion,
  faChevronLeft,
  faChevronRight,
  faChevronCircleRight,
  faChevronCircleLeft,
  faBells,
  faSpinner,
  faEmptySet,
  faCheck,
  faClock,
  faRoad,
} from '@fortawesome/pro-solid-svg-icons';
import {
  faTrain,
  faTaxi,
  faCar,
  faBars,
  faHotel,
  faRunning,
  faGlassCheers,
  faUtensils,
  faGuitars,
  faSunCloud,
  faBabyCarriage,
  faPhone,
  faUserTie,
  faGift,
  faTimes,
  faChevronDown,
  faChevronUp,
  faPaperPlane
} from '@fortawesome/pro-light-svg-icons';
import { colors } from '../../styles';

const styles = {
  menu: {
    color: colors.white,
  },
  direction: {
    color: colors.white,
    paddingLeft: 10,
    paddingRight: 20,
    marginTop: 2
  },
  directionCircle: {
    color: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 40
  }
}

const icons = {
  map: {
    icon: faMapSigns,
    style: styles.coverIcon
  },
  tasks: {
    icon: faTasksAlt,
    style: styles.coverIcon
  },
  question: {
    icon: faQuestion,
    style: styles.coverIcon
  },
  menu: {
    icon: faBars,
    style: styles.menu
  },
  menuClose: {
    icon: faTimes,
    style: styles.menu
  },
  close: {
    icon: faTimes,
    style: { color: colors.blue }
  },
  bells: {
    icon: faBells,
    style: styles.cardIcon
  },
  train: {
    icon: faTrain,
    style: styles.cardIcon
  },
  taxi: {
    icon: faTaxi,
    style: styles.cardIcon
  },
  car: {
    icon: faCar,
    style: styles.cardIcon
  },
  hotel: {
    icon: faHotel,
    style: styles.cardIcon
  },
  running: {
    icon: faRunning,
    style: styles.cardIcon
  },
  cheers: {
    icon: faGlassCheers,
    style: styles.cardIcon
  },
  utensils: {
    icon: faUtensils,
    style: styles.cardIcon
  },
  guitars: {
    icon: faGuitars,
    style: styles.cardIcon
  },
  weather: {
    icon: faSunCloud,
    style: styles.cardIcon
  },
  pram: {
    icon: faBabyCarriage,
    style: styles.cardIcon
  },
  phone: {
    icon: faPhone,
    style: styles.cardIcon
  },
  dress: {
    icon: faUserTie,
    style: styles.cardIcon
  },
  gift: {
    icon: faGift,
    style: styles.cardIcon
  },
  left: {
    icon: faChevronLeft,
    style: styles.direction
  },
  right: {
    icon: faChevronRight,
    style: styles.direction
  },
  down: {
    icon: faChevronDown,
  },
  up: {
    icon: faChevronUp,
  },
  circleLeft: {
    icon: faChevronCircleLeft,
    style: styles.directionCircle
  },
  circleRight: {
    icon: faChevronCircleRight,
    style: styles.directionCircle
  },
  spinner: {
    icon: faSpinner,
  },
  send: {
    icon: faPaperPlane,
    style: { color: colors.white, marginLeft: -2, marginTop: 1 }
  },
  empty: {
    icon: faEmptySet,
    style: { color: colors.darkblue }
  },
  check: {
    icon: faCheck,
  },
  clock: {
    icon: faClock
  },
  road: {
    icon: faRoad
  }
};

const Icon = ({ type, size, hidden, color, spin }) => (
  <FontAwesomeIcon
    spin={type === 'spinner'}
    icon={icons[type].icon}
    style={{
      fontSize: size,
      color: colors[color],
      ...icons[type].style,
      opacity: hidden ? 0 : 1,
    }}
  />
);

Icon.defaultProps = {
  icon: 'map',
  style: 'cardIcon',
  size: 12,
  color: colors.darkblue,
  spin: false
}

export { Icon };
