import React from 'react';
import { CircledScratchesIcon, SVG } from '@components';
import { AnimatedScratchedCircleRoot } from './styles';

export default function AnimatedScratchedCircle({ className }) {
  return (
    <AnimatedScratchedCircleRoot className={className}>
      <SVG
        data-aos="animate-circle"
        data-aos-delay="1000"
        className="circle"
        name="handdrawn-circle"
      />
      <CircledScratchesIcon
        data-aos="animate-circle-scratches"
        className="scratches"
      />
    </AnimatedScratchedCircleRoot>
  );
}
