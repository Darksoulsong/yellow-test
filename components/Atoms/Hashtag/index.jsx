import React from 'react';
import { Holder, HashtagContainer, HashtagText } from './styles';
import { AnimatedManipulator } from '../AnimatedManipulator';

export const Hashtag = ({ onClick = null }) => (
  <Holder clickable={onClick}>
    <HashtagContainer>
      <HashtagText onClick={onClick}>
        #YELLOW<strong>WAY</strong>
      </HashtagText>
      <AnimatedManipulator dataAosOffset="100" name="three-line-icon" />
    </HashtagContainer>
    <AnimatedManipulator dataAosOffset="100" name="curved-line-icon" />
  </Holder>
);
