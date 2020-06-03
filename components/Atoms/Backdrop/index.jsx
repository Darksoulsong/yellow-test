import React from 'react';
import { BackdropRoot } from './styles';

export default function Backdrop() {
  const { isActive, zIndex, animated, onClickCallbacks } = useBackdrop();

  const handleOnClickCallback = React.useCallback(() => {
    const callbacks = Object.keys(onClickCallbacks);

    if (callbacks.length) {
      callbacks.forEach(callback => {
        const fn = onClickCallbacks[callback];
        if (typeof fn === 'function') {
          fn(isActive);
        }
      });
    }
  }, [onClickCallbacks, isActive]);

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
  const [callbacks, setCallback] = React.useState({});
  const [zIndex, setZIndex] = React.useState(0);

  const toggle = React.useCallback(
    active => {
      setIsActive(!active);
    },
    [isActive]
  );

  const onClickCallbacks = callbacks;

  const setOnClickCallback = onClickFn => {
    setCallback(previousState => ({ ...previousState, ...onClickFn }));
  };

  const valueProvider = {
    isActive,
    setIsActive,
    toggle,
    setZIndex,
    zIndex,
    animated,
    setAnimated,
    onClickCallbacks,
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
