import React from 'react';
import { CardContainer, CardSquare, Image, CustomText } from './styles';

export const Card = ({ text, img, width, mdWidth }) => (
  <CardContainer width={width} mdWidth={mdWidth}>
    <CardSquare>
      <Image alt={text} src={img} />
    </CardSquare>
    <CustomText>{text}</CustomText>
  </CardContainer>
);
