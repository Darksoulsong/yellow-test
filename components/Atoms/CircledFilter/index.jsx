import React from 'react';
import { routeTo } from '@utils';
import { Container, Circle, Text } from './styles';

export const CircledFilter = ({ text, slug, width }) => (
  <Container width={width} onClick={() => routeTo(`/blog/categorias/${slug}`)}>
    <Circle />
    <Text>{text}</Text>
  </Container>
);
