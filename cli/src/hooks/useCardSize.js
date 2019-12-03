const useCardSize = (max = 1) => {
  return { width: 249, height: 375 }

/*  const [width, setWidth] = useState(249);
  const [height, setHeight] = useState(375);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const multiplier = screenWidth / 375;
    if(multiplier < max) {
      setWidth(249 * (multiplier >= 1 ? multiplier : 1));
      setHeight(375 * (multiplier >= 1 ? multiplier : 1));
    } else {
      setWidth(249 * max);
      setHeight(375 * max);
    }
  }, [screenWidth, max])

  return { width, height };*/
}

export { useCardSize };
