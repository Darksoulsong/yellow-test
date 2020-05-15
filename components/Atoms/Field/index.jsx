import React from 'react';
import { mask } from '@utils';
import {
  FieldRoot,
  Field,
  FieldIcon,
  Input,
  FieldGroup,
  FieldValidationMessage,
} from './styles';

export default function FieldComponent({
  renderIcon,
  hasError,
  width,
  validationMessage,
  ...rest
}) {
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
    <FieldRoot width={width} hasError={hasError}>
      <Field hasIcon={hasIcon}>
        {hasIcon && <FieldIcon>{renderIcon()}</FieldIcon>}

        <Input ref={ref} {...inputProps} />
      </Field>

      <FieldValidationMessage show={!!validationMessage}>
        {validationMessage}
      </FieldValidationMessage>
    </FieldRoot>
  );
}

FieldComponent.defaultProps = {
  renderIcon: null,
  width: null,
  type: 'text',
};

export { FieldGroup };
