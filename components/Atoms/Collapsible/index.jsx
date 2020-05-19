import React from 'react';
import Body from './Body';
import Toggle from './Toggle';
import { CollapsibleRoot, CollapsibleItem } from './styles';

const collapsibleCtx = React.createContext({});

export const useCollapsible = () => React.useContext(collapsibleCtx);

const Collapsible = ({ defaultActiveIndex, children }) => {
  const [state, setState] = React.useState({
    activeItem: null,
    items: [],
  });
  const setStates = React.useCallback(states => {
    setState(previousState => {
      return { ...previousState, ...(states || {}) };
    });
  }, []);

  const { activeItem, items } = state;

  const setActiveItem = React.useCallback(
    item => {
      setStates({ activeItem: item });
    },
    [activeItem]
  );

  const getClassNames = React.useCallback((isActive, index, totalItems) => {
    const klasses = [];
    const prefix = 'collapsible';

    if (isActive) {
      klasses.push(`${prefix}-active`);
    }

    if (index === 0) {
      klasses.push(`${prefix}-first`);
    }

    if (index === totalItems - 1) {
      klasses.push(`${prefix}-last`);
    }

    return klasses.join(' ');
  }, []);

  React.useEffect(() => {
    if (
      defaultActiveIndex !== undefined &&
      defaultActiveIndex + 1 < children.length
    ) {
      setStates({ activeItem: defaultActiveIndex });
    }
  }, [defaultActiveIndex]);

  React.useEffect(() => {
    const childList = React.Children.map(children, (child, index) => {
      const isActive = state.activeItem === index;
      return (
        <CollapsibleItem
          className={`collapsible-item ${getClassNames(
            isActive,
            index,
            children.length
          )}`}
          active={isActive}
        >
          {child}
        </CollapsibleItem>
      );
    });

    setStates({ items: childList });
  }, [state.activeItem]);

  const valueProvider = {
    activeItem,
    setActiveItem,
  };

  return (
    <collapsibleCtx.Provider value={valueProvider}>
      <CollapsibleRoot>{items}</CollapsibleRoot>;
    </collapsibleCtx.Provider>
  );
};

Collapsible.Toggle = Toggle;

Collapsible.Body = Body;

export default Collapsible;
