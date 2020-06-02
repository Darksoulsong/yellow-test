import React from 'react';
import { Root } from './styles';

function Button({ disabled, type, ...rest }, ref) {
  if (disabled) {
    rest.variant = 'disabled';
  }

  const buttonProps = {
    ref,
    disabled,
    ...rest,
  };

  if (type === 'link') {
    buttonProps.as = 'a';
  }

  return <Root {...buttonProps}></Root>;
}

export default React.forwardRef(Button);
