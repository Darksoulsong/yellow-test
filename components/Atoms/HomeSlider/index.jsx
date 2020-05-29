import React from 'react';
import Carousel from 'nuka-carousel';
import { SpeechBubble, SVG, intBreakpoints } from '@components';
import { useMediaQuery } from 'react-responsive';
import { ControlLeft, ControlRight, BubbleContent } from './styles';

export default function HomeSlider() {
  const isTablet = useMediaQuery({ minWidth: intBreakpoints.medium });

  const getControlsContainerStyles = React.useCallback(
    key => {
      switch (key) {
        case 'CenterLeft':
          return {
            top: isTablet ? '40%' : '40%',
            left: isTablet ? '-24%' : '-38%',
          };
        default:
          return {
            top: isTablet ? '40%' : '40%',
            right: isTablet ? '-24%' : '-38%',
          };
      }
    },
    [isTablet]
  );

  const renderCenterLeftControls = React.useCallback(({ previousSlide }) => {
    return (
      <ControlLeft
        type="button"
        version="unstyled"
        onClick={previousSlide}
        show={true}
      >
        <SVG name="arrow-icon" />
      </ControlLeft>
    );
  }, []);

  const renderCenterRightControls = React.useCallback(({ nextSlide }) => {
    return (
      <ControlRight
        type="button"
        version="unstyled"
        onClick={nextSlide}
        show={true}
      >
        <SVG name="arrow-icon" />
      </ControlRight>
    );
  }, []);

  console.log({ isTablet });

  return (
    <SpeechBubble>
      <Carousel
        slideIndex={0}
        wrapAround
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        getControlsContainerStyles={getControlsContainerStyles}
        defaultControlsConfig={{
          pagingDotsStyle: {
            display: 'none',
          },
        }}
      >
        <BubbleContent>
          You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for
          murder. After the avalanche, it took us a week to climb out.
        </BubbleContent>

        <BubbleContent>
          Now, I don't know exactly when we turned on each other, but I know
          that seven of us survived the slide... and only five made it out. Now
          we took an oath, that I'm breaking now. You don't get sick, I do.
          That's also clear.
        </BubbleContent>

        <BubbleContent>
          We said we'd say it was the snow that killed the other two, but it
          wasn't. Nature is lethal but it doesn't hold a candle to man. Your
          bones don't break, mine do. That's clear. Your cells react to bacteria
          and viruses differently than mine.
        </BubbleContent>
      </Carousel>
    </SpeechBubble>
  );
}
