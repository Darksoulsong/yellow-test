import React from 'react';
import styled from 'styled-components';
import { Header, Footer, Container, Backdrop, Loader } from '@components';

const DefaultLayoutRoot = styled.div`
  position: relative;
`;

const DefaultLayoutLoader = styled.div`
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  left: 0;
  top: 70px;
  opacity: 0;
  pointer-events: none;

  ${({ show }) => show && `opacity: 1;`};
`;

const DefaultLayoutBody = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: 0;

  ${({ show }) => show && `opacity: 1;`};
`;

export default function DefaultLayout({ isLoading, children }) {
  return (
    <Container id="page-top" fluid padding="0" paddingOnLarge="0">
      <DefaultLayoutRoot>
        <Header />

        <DefaultLayoutLoader show={isLoading}>
          <Loader />
        </DefaultLayoutLoader>

        <DefaultLayoutBody show={!isLoading}>{children}</DefaultLayoutBody>

        <Footer />

        <Backdrop />
      </DefaultLayoutRoot>
    </Container>
  );
}
