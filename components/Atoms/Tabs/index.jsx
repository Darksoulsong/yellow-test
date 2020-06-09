import React from 'react';
import { TabsRoot, TabsHeader, TabsHeaderItem, TabsItem } from './styles';

const tabsCtx = React.createContext({});

const useTab = () => React.useContext(tabsCtx);

const sortReverse = (actual, totalLength) => {
  return Array.from({ length: totalLength })
    .map((item, index) => index)
    .reverse()
    .reduce((acc, curr, index, array) => {
      const position = array.indexOf(array[actual]);

      if (index < position) {
        acc.push(curr - 1);
      } else if (index === position) {
        acc.push(totalLength - 1);
      } else {
        acc.push(curr);
      }

      return acc;
    }, []);
};

export default function Tabs({ children }) {
  const [headerItems, setHeaderItems] = React.useState([]);
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);

  const setHeaderItem = item => {
    setHeaderItems(previous => [...previous, item]);
  };

  const valueProvider = {
    setHeaderItem,
    headerItems,
    activeItemIndex,
  };

  return (
    <tabsCtx.Provider value={valueProvider}>
      <TabsRoot>
        <TabsHeader>
          {headerItems &&
            headerItems.map((item, itemIndex) => {
              const number = headerItems.length - 1 + itemIndex * -1;
              const isActive = activeItemIndex === item.index;
              const zIndex = isActive ? headerItems.length : number;

              return (
                <TabsHeaderItem
                  zIndex={zIndex}
                  data-zindex={zIndex}
                  key={item.index}
                  onClick={() => setActiveItemIndex(item.index)}
                >
                  {typeof item.renderTabHeader === 'function' &&
                    item.renderTabHeader(isActive)}
                </TabsHeaderItem>
              );
            })}
        </TabsHeader>

        {children}
      </TabsRoot>
    </tabsCtx.Provider>
  );
}

const Tab = ({ index, renderTabHeader, children }) => {
  const { setHeaderItem, activeItemIndex } = useTab();

  React.useEffect(() => {
    setHeaderItem({
      index,
      renderTabHeader,
    });
  }, []);

  return <TabsItem show={activeItemIndex === index}>{children}</TabsItem>;
};

Tab.displayName = 'Tab';

Tabs.Tab = Tab;
