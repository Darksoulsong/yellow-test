import React from 'react';
import { BackdropRoot } from './styles';

export default function Backdrop({ active }) {
  return <BackdropRoot active={active}></BackdropRoot>;
}

const backdropCtx = React.createContext({});

export const useBackdrop = () => React.useContext(backdropCtx);

export const withBackdrop = Component => props => {
  const backdropProps = React.useContext(backdropCtx);
  return <Component {...props} {...backdropProps} />;
};

export const BackdropProvider = ({ children }) => {
  const [open, setOpen] = React.useState();

  const valueProvider = {
    open,
    setOpen,
  };

  return (
    <backdropCtx.Provider value={valueProvider}>
      {children}
    </backdropCtx.Provider>
  );
};
