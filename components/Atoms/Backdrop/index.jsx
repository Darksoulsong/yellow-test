import React from 'react';
import { BackdropRoot } from './styles';

export default function Backdrop() {
  const { isActive, zIndex, animated, onClickCallback } = useBackdrop();

  const handleOnClickCallback = React.useCallback(() => {
    if (typeof onClickCallback === 'function') {
      onClickCallback(isActive);
    }
  }, [onClickCallback, isActive]);

  return (
    <BackdropRoot
      onClick={handleOnClickCallback}
      active={isActive}
      zIndex={zIndex}
      animated={animated}
    />
  );
}

const backdropCtx = React.createContext({});

export const useBackdrop = () => React.useContext(backdropCtx);

export const BackdropProvider = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false);
  const [animated, setAnimated] = React.useState(false);
  const [[callback], setCallback] = React.useState([]);
  const [zIndex, setZIndex] = React.useState(0);

  const toggle = React.useCallback(
    active => {
      setIsActive(!active);
    },
    [isActive]
  );

  const onClickCallback = callback;

  const setOnClickCallback = onClickFn => setCallback([onClickFn]);

  const valueProvider = {
    isActive,
    setIsActive,
    toggle,
    setZIndex,
    zIndex,
    animated,
    setAnimated,
    onClickCallback,
    setOnClickCallback,
  };

  React.useEffect(() => {
    const method = isActive ? 'add' : 'remove';
    document.body.classList[method]('hide-body-overflow');
  }, [isActive]);

  return (
    <backdropCtx.Provider value={valueProvider}>
      {children}
    </backdropCtx.Provider>
  );
};
