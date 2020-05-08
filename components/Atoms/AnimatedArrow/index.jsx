import React from 'react';
import { SVG } from '@components';
import { Root } from './styles';

export default function AnimatedScratches() {
  return (
    <Root data-aos="animate-arrow" data-aos-offset="100">
      <SVG name="handdrawn-arrow" />
    </Root>
  );
}
