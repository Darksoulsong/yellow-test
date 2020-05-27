import React from 'react';
import NextApp from 'next/app';
import { Theme } from '@components';
import { UserProvider } from '@providers/User';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Theme>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Theme>
    );
  }
}
