import React from 'react';

export const useHandleForgotPassword = () => {
  const [states, setStates] = React.useState({
    isLoading: false,
    success: false,
  });

  const setState = values =>
    setStates(prevState => ({ ...prevState, ...(values || {}) }));

  const requestPasswordChange = email => {
    return new Promise(() => {
      console.log({ email });
      setState({
        isLoading: true,
      });
      setTimeout(() => {
        setState({
          success: true,
          isLoading: false,
        });
      }, 5000);
    });
  };

  const { isLoading, success } = states;

  return {
    isLoading,
    success,
    requestPasswordChange,
  };
};
