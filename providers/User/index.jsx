import React, { useState, createContext, useContext } from 'react';

export const UserCtx = createContext({});

export const useUserData = () => useContext(UserCtx);

export const UserProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(null);
  const [data, setData] = useState({
    loading: false,
  });

  const handleUserLogin = ({ email, password }) => {
    setUserLogged({ email, password, name: 'Usuário' });
  };

  const valueProvider = {
    handleUserLogin,
    userLogged,
    data,
  };

  return <UserCtx.Provider value={valueProvider}>{children}</UserCtx.Provider>;
};
