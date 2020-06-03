import React from 'react';
import { BackdropProvider, Theme } from '@components';
import { FormModalProvider } from './FormModal';
import { UserProvider } from './User';

const RootProvider = ({ children }) => {
  return (
    <BackdropProvider>
      <Theme>
        <UserProvider>
          <FormModalProvider>{children}</FormModalProvider>
        </UserProvider>
      </Theme>
    </BackdropProvider>
  );
};

export default RootProvider;
