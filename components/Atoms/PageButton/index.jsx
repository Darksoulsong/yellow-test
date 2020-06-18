import React from 'react';
import { Container } from './styles';

export const PageButton = ({ text, active, onClick }) => (
  <Container onClick={onClick} active={active}>
    {text}
  </Container>
);
