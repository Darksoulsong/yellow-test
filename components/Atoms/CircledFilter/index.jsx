import React from 'react';
import { routeTo } from '@utils';
import { Container, Circle, Text } from './styles';

export const CircledFilter = ({ text, slug, width, active }) => (
  <Container width={width} onClick={() => routeTo(`/blog/categorias/${slug}`)}>
    <Circle active={active} />
    <Text active={active}>{text}</Text>
  </Container>
);
