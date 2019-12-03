import { useEffect, useState } from 'react';
import { useScreenHeight } from './useScreenHeight';

const useDisplayArrows = ({ ref, pageCount, canSubmit }) => {
  console.log(ref);
  const contentHeight = useScreenHeight();
  const [displayArrows, setDisplayArrows] = useState({
    up: false,
    down: canSubmit || !ref.current.scrollTop
  });

  useEffect(() => {
    ref.current.addEventListener('scroll', () => {
      const scrollPosition = ref.current.scrollTop;
      if(scrollPosition < contentHeight) {
        setDisplayArrows({ up: false, down: scrollPosition === 0 });
      } else if(!(scrollPosition % contentHeight)) {
        setDisplayArrows({ up: true, down: (scrollPosition / contentHeight) < pageCount })
      } else {
        setDisplayArrows(false);
      }
    });
    return displayArrows;
  }, [contentHeight, displayArrows, pageCount, ref]);
}

export { useDisplayArrows };
