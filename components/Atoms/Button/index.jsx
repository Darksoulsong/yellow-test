import React from 'react';
import { Root } from './styles';

function Button({ disabled, ...rest }, ref) {
  if (disabled) {
    rest.variant = 'disabled';
  }

  return <Root ref={ref} disabled={disabled} {...rest}></Root>;
}

export default React.forwardRef(Button);
