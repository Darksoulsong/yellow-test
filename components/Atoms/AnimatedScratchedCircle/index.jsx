import React from 'react';
import { CircledScratchesIcon, SVG } from '@components';
import { useMediaQuery } from '@hooks';
import { AnimatedScratchedCircleRoot } from './styles';

export default function AnimatedScratchedCircle({ className }) {
  const { isDesktop } = useMediaQuery();
  return (
    <AnimatedScratchedCircleRoot className={className}>
      <SVG
        data-aos="animate-circle"
        className="circle"
        data-aos-offset={isDesktop ? 1000 : 0}
        name="handdrawn-circle"
      />
      <CircledScratchesIcon
        data-aos="animate-circle-scratches"
        data-aos-offset={isDesktop ? 1000 : 0}
        className="scratches"
      />
    </AnimatedScratchedCircleRoot>
  );
}
