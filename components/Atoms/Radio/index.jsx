import React from 'react';
import { RadioContainer, Container, StyledRadio, HiddenRadio } from './styles';

export const Radio = ({ label, checked, onChange = () => {}, value }) => {
  return (
    <Container>
      <label>
        <RadioContainer>
          <HiddenRadio checked={checked} onChange={() => onChange(value)} />
          <StyledRadio checked={checked} />
        </RadioContainer>
        {label}
      </label>
    </Container>
  );
};
