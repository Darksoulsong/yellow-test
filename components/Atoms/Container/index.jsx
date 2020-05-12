import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@components/Organisms/Theme/breakpoints';

const Root = styled.div`
  width: ${({ width = '100%' }) => width};
  margin: 0 auto;  
  padding: ${({ padding }) => padding || '0 30px'};
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
  flex-direction: ${({ direction = 'column' }) => direction};

  ${({ fluid = false }) => (!fluid ? 'max-width: 1280px;' : '')}
  
  @media (min-width: ${breakpoints.large}) {
    padding: 0 15px;
    padding: ${({ paddingOnLarge }) => paddingOnLarge || '0 15px'};
  }
`;

export default function Container(props) {
  return <Root {...props} />;
}
