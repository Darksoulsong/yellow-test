import React from 'react';
import { SVG } from '@components';
import { Root, Content, ControlLeft, ControlRight, Dots, Dot } from './styles';

const config = {
  duration: 3000,
};

export default function Slider({ children }) {
  const [activeBoxIndex, setActiveBoxIndex] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const timeout = React.useRef(null);
  const minimumChildrenLength = children.length > 1;
  const mounted = React.useRef(false);

  const setSlide = React.useCallback(
    ({ stepIndex, jumpToIndex }) => {
      const nextIndex =
        jumpToIndex !== undefined ? jumpToIndex : activeBoxIndex + stepIndex;

      if (children[nextIndex]) {
        clearTimeout(timeout.current);
        setActiveBoxIndex(nextIndex);
      }
    },
    [activeBoxIndex]
  );

  const loop = React.useCallback(() => {
    timeout.current = setTimeout(() => {
      const nextIndex = activeBoxIndex + 1;
      const index = children[nextIndex] ? nextIndex : 0;

      if (mounted.current) {
        setActiveBoxIndex(index);
      }
    }, config.duration);
  }, [timeout, activeBoxIndex]);

  React.useEffect(() => {
    const list = React.Children.map(children, (child, index) => {
      const active = activeBoxIndex === index;
      return <Content active={active}>{child}</Content>;
    });

    setItems(list);

    if (minimumChildrenLength) {
      loop();
    }
    // eslint-disable-next-line
  }, [activeBoxIndex]);

  React.useEffect(() => {
    mounted.current = true;
    return () => {
      clearTimeout(timeout.current);
      mounted.current = false;
    };
  }, []);

  return (
    <Root>
      <ControlLeft show={activeBoxIndex !== 0 && minimumChildrenLength}>
        <SVG onClick={() => setSlide({ stepIndex: -1 })} name="arrow-icon" />
      </ControlLeft>
      {items}
      <ControlRight
        show={activeBoxIndex + 1 < items.length && minimumChildrenLength}
      >
        <SVG onClick={() => setSlide({ stepIndex: 1 })} name="arrow-icon" />
      </ControlRight>

      <Dots>
        <Dot />
        <Dot />
        <Dot />
        {/* {items.map((item, index) => (
          <Button
            onClick={() => setSlide({ jumpToIndex: index })}
            key={uid(item, index)}
            type="button"
            variant="unstyled"
          >
            <Dot active={index === activeBoxIndex} />
          </Button>
        ))} */}
      </Dots>
    </Root>
  );
}
