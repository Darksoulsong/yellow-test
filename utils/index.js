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
