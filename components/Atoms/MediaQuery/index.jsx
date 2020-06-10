import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { breakpointValue } from '@utils';

const getBreakpointValue = screenSize => {
  switch (screenSize) {
    case 'mobile':
      return breakpointValue('smaller', true);
    case 'tablet':
      return breakpointValue('medium');
    case 'smallerThanTablet':
      return breakpointValue('medium', true);
    case 'desktop':
      return breakpointValue('large');
    case 'smallerThanDesktop':
      return breakpointValue('large', true);
    case 'largeDesktop':
      return breakpointValue('larger');
    default:
      return breakpointValue('largest');
  }
};

const MQ = ({ children, screenSize }) => {
  const rule = getBreakpointValue(screenSize);

  if (!rule) {
    return null;
  }

  if (useMediaQuery(rule)) {
    return <>{children}</>;
  }

  return null;
};

export const ShowOnMobileOnly = styled.div`
  @media (min-width: ${({ theme }) =>
      theme.intBreakpoints.smaller + 1 + 'px'}) {
    display: none;
  }
`;

export const ShowOnMobile = styled.div`
  display: none;
  @media (min-width: ${({ theme }) =>
      theme.intBreakpoints.smaller + 1 + 'px'}) {
    display: block;
  }
`;

export const ShowOnTablet = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;

export const ShowOnTabletOnly = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const ShowOnDesktop = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: ${({ inline }) => (inline ? 'inline' : 'block')};
  }
`;

export default MQ;
