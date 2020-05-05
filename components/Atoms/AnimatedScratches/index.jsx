import React from 'react';
import { SVG } from '@components';
import { Root } from './styles';

export default function AnimatedScratches() {
  return (
    <Root data-aos="animate-scratches" data-aos-offset="500">
      <SVG name="handdrawn-scratches" />
    </Root>
  );
}
