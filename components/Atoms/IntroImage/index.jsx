import React from 'react';
import { AnimatedScratchedCircle } from '@components';
import { IntroImageRoot } from './styles';

export default function IntroImage() {
  return (
    <IntroImageRoot data-aos="animate-scratched-circle" data-aos-offset="500">
      <img alt="intro-image" src="/images/intro-image.jpg" />
      <AnimatedScratchedCircle className="main-detail" />
    </IntroImageRoot>
  );
}
