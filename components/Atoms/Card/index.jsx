import React from 'react';
import { CardContainer, Image, CustomText } from './styles';

export const Card = ({ text, img, width, styling }) => (
  <CardContainer width={width} style={{ ...styling }}>
    <Image alt={text} src={img} />
    <CustomText>{text}</CustomText>
  </CardContainer>
);
