import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './default';
import { breakpoints, intBreakpoints } from './breakpoints';
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
  themeProps.intBreakpoints = intBreakpoints;
  themeProps.spaces = spaces;

  return (
    <ThemeProvider theme={themeProps}>
      <Global />
      {children}
    </ThemeProvider>
  );
}

export { breakpoints, intBreakpoints, spaces };
