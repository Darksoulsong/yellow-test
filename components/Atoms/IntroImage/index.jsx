import React from 'react';
import { AnimatedScratchedCircle } from '@components';
import { IntroImageRoot } from './styles';

export default function IntroImage() {
  return (
    <IntroImageRoot data-aos="animate-intro" data-aos-offset="200">
      <img alt="intro-image" src="/images/intro-image.jpg" />
      <AnimatedScratchedCircle className="main-detail" />
    </IntroImageRoot>
  );
}
