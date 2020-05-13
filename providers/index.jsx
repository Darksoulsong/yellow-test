import React from 'react';
import { BackdropProvider } from '@components';

const RootProvider = ({ children }) => {
  return <BackdropProvider>{children}</BackdropProvider>;
};

export default RootProvider;
