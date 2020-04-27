import React from 'react';
import NextApp from 'next/app';
import { Theme } from '@components';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Theme>
        <Component {...pageProps} />
      </Theme>
    );
  }
}
