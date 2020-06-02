import React from 'react';
import { Root } from './styles';

function Button({ disabled, type, ...rest }, ref) {
  if (disabled) {
    rest.variant = 'disabled';
  }

  const buttonProps = {
    ref,
    disabled,
    type,
    ...rest,
  };

  if (type === 'link') {
    buttonProps.as = 'a';
    buttonProps.role = 'button';

    console.log({ buttonProps });
  }

  return <Root {...buttonProps}></Root>;
}

export default React.forwardRef(Button);
