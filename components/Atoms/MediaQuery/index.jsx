import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@components';

const breakpointValue = (breakpoint, invert) => {
  const bp = breakpoints[breakpoint];

  if (!bp) {
    return null;
  }

  const value = +bp.replace('px', '');
  const mediaQueryValue = invert ? value - 1 : value;
  const rule = invert ? 'maxWidth' : 'minWidth';

  return { [rule]: mediaQueryValue };
};

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

const MQ = ({ children, screenSize, ...rest }) => {
  const rule = getBreakpointValue(screenSize);

  if ('foo' in rest) {
    // debugger;
  }

  if (!rule) {
    return null;
  }

  if (useMediaQuery(rule)) {
    return <>{children}</>;
  }

  return null;
};

export default MQ;
