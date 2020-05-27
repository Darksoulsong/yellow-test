import React from 'react';
import { AnimatedScratchedCircle } from '@components';
import { IntroImageRoot } from './styles';

export default function IntroImage() {
  return (
    <IntroImageRoot data-aos="animate-intro">
      <AnimatedScratchedCircle className="main-detail" />
    </IntroImageRoot>
  );
}
