import { useState, useEffect } from 'react';
import { calculateWidth } from '@utils';
import { intBreakpoints } from '@components/Organisms/Theme/breakpoints';

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
    isMedium: screenWidthObject.screenWidth > intBreakpoints.medium,
    isLarge: screenWidthObject.screenWidth > intBreakpoints.large,
  };
};
