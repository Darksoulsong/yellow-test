import React from 'react';
import { RadioContainer, Container, StyledRadio, HiddenRadio } from './styles';

export const Radio = ({ label, checked, onChange = () => {}, value }) => {
  const checkedValue = checked === value;
  return (
    <Container>
      <RadioContainer onClick={() => onChange(value)}>
        <HiddenRadio checked={checkedValue} onChange={() => onChange(value)} />
        <StyledRadio checked={checkedValue} />
      </RadioContainer>
      <label>{label}</label>
    </Container>
  );
};
