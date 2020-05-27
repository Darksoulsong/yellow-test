import React from 'react';
import { SVG } from '@components';
import { SpeechBubbleRoot, BubbleElement, Dots, Stars, Dot } from './styles';

export default function SpeechBubble({
  children,
  type = 'dots',
  iconsAlign = 'flex-end',
  arrowAlign = 'flex-start',
  size,
}) {
  const renderBottomContent = () => {
    switch (type) {
      case 'stars':
        return (
          <Stars>
            <SVG name="star-white-icon" />
            <SVG name="star-white-icon" />
            <SVG name="star-white-icon" />
            <SVG name="star-white-icon" />
            <SVG name="star-white-icon" />
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
    <SpeechBubbleRoot className="speech-bubble" align={iconsAlign}>
      <BubbleElement size={size} align={arrowAlign}>
        {children}
        {renderBottomContent()}
      </BubbleElement>
    </SpeechBubbleRoot>
  );
}
