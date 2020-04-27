import React from 'react';
import { Root, BubbleElement, Dots, Dot } from './styles';

export default function SpeechBubble({ children }) {
  return (
    <Root>
      <BubbleElement>{children}</BubbleElement>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Root>
  );
}
