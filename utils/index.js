import Router from 'next/router';

export const routeTo = (route = '/') => {
  Router.push(route).then(() => window.scrollTo(0, 0));
};

export const calculateWidth = () => {
  if (process.browser) {
    return document.documentElement.clientWidth || document.body.clientWidth;
  }
  return 320;
};
