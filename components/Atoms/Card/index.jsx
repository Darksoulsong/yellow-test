import React from 'react';
import { CardContainer, Image, CustomText } from './styles';

export const Card = ({ text, img, width }) => (
  <CardContainer width={width}>
    <Image alt={text} src={img} />
    <CustomText>{text}</CustomText>
  </CardContainer>
);
