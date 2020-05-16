import React from 'react';
import { Root } from './styles';

export default function Button({ disabled, ...rest }) {
  if (disabled) {
    rest.variant = 'disabled';
  }

  return <Root disabled={disabled} {...rest}></Root>;
}
