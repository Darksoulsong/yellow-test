import React from 'react';
import { CheckboxRoot, Checkbox, CheckboxLabel } from './styles';

export default function CheckboxComponent({ id, checked, name }) {
  return (
    <CheckboxRoot>
      <Checkbox type="checkbox" id={id} name={name} checked={checked} />
      <CheckboxLabel htmlFor={id} />
    </CheckboxRoot>
  );
}
