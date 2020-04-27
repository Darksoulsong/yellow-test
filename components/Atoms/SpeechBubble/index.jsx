import React from 'react';
import { Root, BubbleElement } from './styles';

export default function SpeechBubble({ children }) {
  return (
    <Root>
      <BubbleElement>{children}</BubbleElement>
    </Root>
  );
}
