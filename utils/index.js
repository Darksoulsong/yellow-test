import Router from 'next/router';
export * from './mask';
export * from './objectPick';
export * from './form';

export const routeTo = (route = '/') => {
  Router.push(route).then(() => window.scrollTo(0, 0));
};

export const calculateWidth = () => {
  if (process.browser) {
    return document.documentElement.clientWidth || document.body.clientWidth;
  }
  return 320;
};
