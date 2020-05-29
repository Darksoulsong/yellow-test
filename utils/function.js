import { breakpoints } from '@components';

export const isFunction = fn => {
  return typeof fn === 'function';
};

export const breakpointValue = (breakpoint, invert) => {
  const bp = breakpoints[breakpoint];

  if (!bp) {
    return null;
  }

  const value = +bp.replace('px', '');
  const mediaQueryValue = invert ? value - 1 : value;
  const rule = invert ? 'maxWidth' : 'minWidth';

  return { [rule]: mediaQueryValue };
};
