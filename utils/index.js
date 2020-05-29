import Router from 'next/router';
export * from './mask';
export * from './object';
export * from './form';
export * from './function';

export const getDesktopFirstMediaQuery = mediaQueryString => {
  const toNumber = +mediaQueryString.replace('px', '') - 1;
  return toNumber + 'px';
};

export const routeTo = (route = '/') => {
  Router.push(route).then(() => window.scrollTo(0, 0));
};

export const calculateWidth = () => {
  if (process.browser) {
    return document.documentElement.clientWidth || document.body.clientWidth;
  }
  return 320;
};

export const range = (from, to, step = 1) => {
  let i = from;
  const rng = [];

  do {
    rng.push(i);
    i += step;
  } while (i <= to);
  return rng;
};

export const circularRange = ({ from, addNElements, increment, length }) => {
  let i = from;
  let outOfBoundariesElement = increment ? 0 : length - 1;
  const factor = increment ? 1 : -1;
  const rng = [];

  if (length > 0) {
    do {
      if (increment) {
        if (i < length) {
          rng.push(i);
        } else {
          rng.push(outOfBoundariesElement);
          outOfBoundariesElement += factor;
        }
      } else {
        if (i <= 0) {
          rng.push(outOfBoundariesElement);
          outOfBoundariesElement += factor;
        } else {
          rng.push(i);
        }
      }
      i += factor;
      addNElements -= 1;
    } while (addNElements > 0);
  }
  return increment ? rng : rng.reverse();
};
