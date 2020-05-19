import React from 'react';
import { RadioContainer, Container, StyledRadio, HiddenRadio } from './styles';

export const Radio = ({ label, name, checked, onChange = () => {}, value }) => {
  return (
    <Container>
      <label>
        <RadioContainer>
          <HiddenRadio
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
          />
          <StyledRadio checked={checked} />
        </RadioContainer>
        {label}
      </label>
    </Container>
  );
};
