import Router from 'next/router';
export * from './mask';
export * from './object';
export * from './form';
export * from './function';

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
