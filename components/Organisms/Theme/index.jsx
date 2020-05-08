import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './default';
import { breakpoints } from './breakpoints';
import { spaces } from './sizes';

const getTheme = theme => {
  switch (theme) {
    default:
      return defaultTheme;
  }
};

export default function Theme({ children, activeTheme = 'default' }) {
  const { Global, themeProps } = getTheme(activeTheme);

  themeProps.breakpoints = breakpoints;
  themeProps.spaces = spaces;

  return (
    <ThemeProvider theme={themeProps}>
      <Global />
      {children}
    </ThemeProvider>
  );
}
