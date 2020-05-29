import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpointValue } from '@utils';

const getBreakpointValue = screenSize => {
  switch (screenSize) {
    case 'mobile':
      return breakpointValue('smaller', true);
    case 'tablet':
      return breakpointValue('medium');
    case 'smallerThanTablet':
      return breakpointValue('medium', true);
    case 'desktop':
      return breakpointValue('large');
    case 'smallerThanDesktop':
      return breakpointValue('large', true);
    case 'largeDesktop':
      return breakpointValue('larger');
    default:
      return breakpointValue('largest');
  }
};

const MQ = ({ children, screenSize }) => {
  const rule = getBreakpointValue(screenSize);

  if (!rule) {
    return null;
  }

  if (useMediaQuery(rule)) {
    return <>{children}</>;
  }

  return null;
};

export default MQ;
