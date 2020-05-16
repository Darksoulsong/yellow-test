import React from 'react';

export const FormCtx = React.createContext({});

export const useFormData = () => React.useContext(FormCtx);

export const FormDataProvider = ({ children }) => {
  const [error, setError] = React.useState({});
  const [formData, setFormData] = React.useState({});

  const valueProvider = {
    error,
    setError,
    formData,
    setFormData,
  };

  return <FormCtx.Provider value={valueProvider}>{children}</FormCtx.Provider>;
};
