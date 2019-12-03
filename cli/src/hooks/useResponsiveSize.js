import { useEffect, useState } from 'react';
import { useScreenWidth } from './useScreenWidth';

const useResponsiveSize = (min = 80, factor = 1) => {
  const [size, setSize] = useState(min);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const multiplier = screenWidth / 375;
    if(multiplier < factor) {
      setSize(min * (multiplier >= 1 ? multiplier : 1));
    } else {
      setSize(min * factor);
    }
    return () => false;
  }, [min, factor, screenWidth])

  return size;
}

export { useResponsiveSize };
