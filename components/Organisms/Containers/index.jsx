import React from 'react';
import { Header, Footer, Container, Backdrop, Loader } from '@components';
import {
  DefaultLayoutLoader,
  DefaultLayoutRoot,
  DefaultLayoutBody,
} from './styles';

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
