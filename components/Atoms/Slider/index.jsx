import React from 'react';
import { SVG } from '@components';
import { Root, Content, ControlLeft, ControlRight } from './styles';

export default function Slider({ children }) {
  return (
    <Root>
      <ControlLeft>
        <SVG name="arrow-icon" />
      </ControlLeft>
      <Content>{children}</Content>
      <ControlRight>
        <SVG name="arrow-icon" />
      </ControlRight>
    </Root>
  );
}
