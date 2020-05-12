import React from 'react';
import { Container, Circle, Text } from './styles';

export const CircledFilter = ({ text, width }) => (
  <Container width={width}>
    <Circle />
    <Text>{text}</Text>
  </Container>
);
