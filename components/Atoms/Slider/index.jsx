import React from 'react';
import { uid } from 'react-uid';
import { SVG, Button } from '@components';
import { Root, Content, ControlLeft, ControlRight, Dots, Dot } from './styles';

export default function Slider({ children }) {
  const [activeBoxIndex, setActiveBoxIndex] = React.useState(0);
  const [items, setItems] = React.useState([]);

  const setSlide = React.useCallback(
    ({ stepIndex, jumpToIndex }) => {
      const nextIndex =
        jumpToIndex !== undefined ? jumpToIndex : activeBoxIndex + stepIndex;

      if (children[nextIndex]) {
        setActiveBoxIndex(nextIndex);
      }
    },
    [activeBoxIndex]
  );

  React.useEffect(() => {
    const list = React.Children.map(children, (child, index) => {
      const active = activeBoxIndex === index;

      return <Content active={active}>{child}</Content>;
    });

    setItems(list);
    // eslint-disable-next-line
  }, [activeBoxIndex]);

  return (
    <Root>
      <ControlLeft show={activeBoxIndex !== 0}>
        <SVG onClick={() => setSlide({ stepIndex: -1 })} name="arrow-icon" />
      </ControlLeft>
      {items}
      <ControlRight show={activeBoxIndex <= items.length}>
        <SVG onClick={() => setSlide({ stepIndex: 1 })} name="arrow-icon" />
      </ControlRight>

      <Dots>
        {items.map((item, index) => (
          <Button
            onClick={() => setSlide({ jumpToIndex: index })}
            key={uid(item, index)}
            type="button"
            variant="unstyled"
          >
            <Dot active={index === activeBoxIndex} />
          </Button>
        ))}
      </Dots>
    </Root>
  );
}
