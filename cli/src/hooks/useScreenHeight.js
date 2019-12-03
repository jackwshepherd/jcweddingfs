import { useState, useEffect } from 'react';

const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenHeight(window.innerHeight));

    return () => {
      window.removeEventListener("resize", () => setScreenHeight(window.innerHeight));
    }
  })

  return screenHeight;
}

export { useScreenHeight };
