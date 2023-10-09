import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    const timedResizeHandler = () => setTimeout(handleWindowResize, 1000);

    window.addEventListener('resize', timedResizeHandler);

    return () => {
      window.removeEventListener('resize', timedResizeHandler);
    };
  }, []);

  return {windowWidth, windowHeight}
}
