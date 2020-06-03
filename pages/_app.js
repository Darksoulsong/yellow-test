import React from 'react';
import NextApp from 'next/app';
import RootProvider from '@providers';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <RootProvider>
        <Component {...pageProps} />
      </RootProvider>
    );
  }
}
