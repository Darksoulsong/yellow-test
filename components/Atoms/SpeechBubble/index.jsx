import React from 'react';
import { SpeechBubbleRoot, BubbleElement, Dots, Stars, Dot } from './styles';

export default function SpeechBubble({
  children,
  type = 'dots',
  iconsAlign = 'flex-end',
  arrowAlign = 'flex-start',
}) {
  const renderBottomContent = () => {
    switch (type) {
      case 'stars':
        return (
          <Stars>
            <Dot />
            <Dot />
            <Dot />
          </Stars>
        );
      case 'dots':
      default:
        return (
          <Dots>
            <Dot />
            <Dot />
            <Dot />
          </Dots>
        );
    }
  };
  return (
    <SpeechBubbleRoot align={iconsAlign}>
      <BubbleElement align={arrowAlign}>{children}</BubbleElement>
      {renderBottomContent()}
    </SpeechBubbleRoot>
  );
}
