import React from 'react';
import { SVG } from '@components';
import { Root } from './styles';

export default function AnimatedArrow({ invert }) {
  return (
    <Root data-aos="animate-arrow" data-aos-offset="100">
      <SVG invert={invert} name="handdrawn-arrow" />
    </Root>
  );
}
