import { useState, useEffect } from 'react';
import { calculateWidth } from '@utils';

export const useScreenWidth = () => {
  const [screenWidthObject, setscreenWidthObject] = useState({
    screenWidth: calculateWidth(),
  });

  useEffect(() => {
    const handleResize = () => {
      setscreenWidthObject({
        screenWidth: calculateWidth(),
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return {
    ...screenWidthObject,
  };
};
