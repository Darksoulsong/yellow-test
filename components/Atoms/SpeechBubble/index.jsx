import React from 'react';
import { SpeechBubbleRoot, BubbleElement, Dots, Dot } from './styles';

export default function SpeechBubble({ children }) {
  return (
    <SpeechBubbleRoot>
      <BubbleElement>{children}</BubbleElement>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </SpeechBubbleRoot>
  );
}
