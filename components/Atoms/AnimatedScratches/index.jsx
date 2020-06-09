import React from 'react';
import { SVG } from '@components';
import { Root } from './styles';

export default function AnimatedScratches({ animationOffset, strokeColor }) {
  return (
    <Root
      data-aos="animate-scratches"
      data-aos-offset={animationOffset}
      strokeColor={strokeColor}
    >
      <SVG name="handdrawn-scratches" />
    </Root>
  );
}

AnimatedScratches.defaultProps = {
  animationOffset: 100,
  strokeColor: '#fff',
};
