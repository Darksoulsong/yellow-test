import React from 'react';
import styled from 'styled-components';
import { Header, Footer, Container, Backdrop } from '@components';

const DefaultLayoutRoot = styled.div`
  position: relative;
`;

export default function DefaultLayout({ children }) {
  return (
    <Container id="page-top" fluid padding="0" paddingOnLarge="0">
      <DefaultLayoutRoot>
        <Header />

        {children}

        <Footer />

        <Backdrop />
      </DefaultLayoutRoot>
    </Container>
  );
}
