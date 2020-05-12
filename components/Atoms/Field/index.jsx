import React from 'react';
import { mask } from '@utils';
import { Field, FieldIcon, Input, FieldGroup } from './styles';

export default function FieldComponent({ renderIcon, width, ...rest }) {
  const ref = React.useRef(null);
  const hasIcon = typeof renderIcon === 'function';
  const inputProps = {
    type: 'text',
    ...rest,
  };

  if (rest.mask) {
    inputProps.onChange = event => {
      event.target.value = mask(event.target.value, rest.mask);

      return rest.onChange && rest.onChange(event);
    };
  }

  return (
    <Field width={width} hasIcon={hasIcon}>
      {hasIcon && <FieldIcon>{renderIcon()}</FieldIcon>}

      <Input ref={ref} {...inputProps} />
    </Field>
  );
}

FieldComponent.defaultProps = {
  renderIcon: null,
  width: null,
  type: 'text',
};

export { FieldGroup };
