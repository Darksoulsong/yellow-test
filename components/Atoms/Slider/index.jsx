import React from 'react';
import { uid } from 'react-uid';
import { SVG, Button } from '@components';
import { Root, Content, ControlLeft, ControlRight } from './styles';

const config = {
  duration: 3000,
};

export default function Slider({
  children,
  hideArrowsOnLoopStartAndEnd,
  autoLoop,
  showPaginator,
}) {
  const [activeBoxIndex, setActiveBoxIndex] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const timeout = React.useRef(null);
  const minimumChildrenLength = children.length > 1;
  const mounted = React.useRef(false);

  const setSlide = React.useCallback(
    ({ stepIndex, jumpToIndex }) => {
      let nextIndex =
        jumpToIndex !== undefined ? jumpToIndex : activeBoxIndex + stepIndex;

      if (nextIndex === children.length) {
        nextIndex = 0;
      }

      if (nextIndex < 0) {
        nextIndex = children.length - 1;
      }

      clearTimeout(timeout.current);
      setActiveBoxIndex(nextIndex);
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

    if (minimumChildrenLength && autoLoop) {
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
      <ControlLeft
        show={
          hideArrowsOnLoopStartAndEnd
            ? activeBoxIndex !== 0 && minimumChildrenLength
            : true
        }
      >
        <SVG onClick={() => setSlide({ stepIndex: -1 })} name="arrow-icon" />
      </ControlLeft>

      {items}

      <ControlRight
        show={
          hideArrowsOnLoopStartAndEnd
            ? activeBoxIndex + 1 < items.length && minimumChildrenLength
            : true
        }
      >
        <SVG onClick={() => setSlide({ stepIndex: 1 })} name="arrow-icon" />
      </ControlRight>

      {showPaginator &&
        items.map((item, index) => (
          <Button
            onClick={() => setSlide({ jumpToIndex: index })}
            key={uid(item, index)}
            type="button"
            variant="unstyled"
          >
            <span className={index === activeBoxIndex} />
          </Button>
        ))}
    </Root>
  );
}

Slider.defaultProps = {
  hideArrowsOnLoopStartAndEnd: false,
  autoLoop: false,
  showPaginator: false,
};
