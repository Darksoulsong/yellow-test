import React from 'react';
import { SVG } from '@components';
import { Holder, HashtagContainer, HashtagText } from './styles';
import { AnimatedManipulator } from '../AnimatedManipulator';

export const Hashtag = () => (
  <Holder>
    <HashtagContainer>
      <HashtagText>
        #YELLOW<strong>WAY</strong>
      </HashtagText>
      <AnimatedManipulator dataAosOffset="100" name="three-line-icon" />
    </HashtagContainer>
    <AnimatedManipulator dataAosOffset="100" name="curved-line-icon" />
  </Holder>
);
