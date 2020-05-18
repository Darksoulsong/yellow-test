import React from 'react';

export const useCreateAccount = () => {
  const [states, setStates] = React.useState({
    accountData: {},
    errors: {},
    success: false,
    loading: false,
  });

  const setState = values =>
    setStates(prevState => ({ ...prevState, ...(values || {}) }));

  const createAccount = React.useCallback(async formData => {
    if (!states.loading) {
      setState({ loading: true });
    }

    setTimeout(() => {
      setState({
        accountData: formData,
        success: true,
        loading: false,
      });
    }, 2000);

    // eslint-disable-next-line
  }, []);

  const { accountData, loading, errors, success } = states;

  return {
    accountData,
    loading,
    errors,
    success,
    createAccount,
  };
};
