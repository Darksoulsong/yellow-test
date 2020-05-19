import React, { useState } from 'react';
import { uid } from 'react-uid';
import { Radio } from '@components';
import { Container } from './styles';

export const RadioButtons = ({
  radioButtons = [],
  name,
  margin,
  selected,
  setSelected = () => {},
}) => (
  <Container margin={margin}>
    {radioButtons.map((radio, index) => (
      <Radio
        key={uid(radio, index)}
        checked={selected === radio.value}
        onChange={setSelected}
        label={radio.label}
        type="radio"
        name={name}
        value={radio.value}
      />
    ))}
  </Container>
);
