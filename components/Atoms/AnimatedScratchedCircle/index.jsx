import React from 'react';
import { CircledScratchesIcon, SVG } from '@components';
import { AnimatedScratchedCircleRoot } from './styles';

export default function AnimatedScratchedCircle({ className }) {
  return (
    <AnimatedScratchedCircleRoot className={className}>
      <SVG
        data-aos="animate-circle"
        className="circle"
        // data-aos-offset="1000"
        name="handdrawn-circle"
      />
      <CircledScratchesIcon
        data-aos="animate-circle-scratches"
        // data-aos-offset="1000"
        className="scratches"
      />
    </AnimatedScratchedCircleRoot>
  );
}
