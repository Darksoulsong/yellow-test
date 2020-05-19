import React from 'react';
import { RadioContainer, Container, StyledRadio, HiddenRadio } from './styles';

export const Radio = ({ label, checked, onChange = () => {}, value }) => {
  return (
    <Container>
      <RadioContainer onClick={() => onChange(value)}>
        <HiddenRadio checked={checked} onChange={() => onChange(value)} />
        <StyledRadio checked={checked} />
      </RadioContainer>
      <label>{label}</label>
    </Container>
  );
};
