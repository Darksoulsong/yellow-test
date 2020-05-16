import React from 'react';
import { mask } from '@utils';
import {
  FieldRoot,
  Field,
  FieldIcon,
  Input,
  Select,
  FieldGroup,
  FieldValidationMessage,
} from './styles';

export default function FieldComponent({
  type,
  renderIcon,
  hasError,
  width,
  validationMessage,
  options,
  disabled,
  isLoading,
  ...rest
}) {
  const ref = React.useRef(null);
  const hasIcon = typeof renderIcon === 'function';
  const inputProps = {
    type,
    disabled,
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
      <Field
        isSelect={type === 'select'}
        hasIcon={hasIcon}
        isLoading={isLoading}
      >
        {hasIcon && <FieldIcon>{renderIcon()}</FieldIcon>}

        {type !== 'select' && <Input ref={ref} {...inputProps} />}
        {type === 'select' && (
          <Select ref={ref} {...inputProps}>
            {options &&
              options.length &&
              options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </Select>
        )}
      </Field>

      <FieldValidationMessage show={hasError && !!validationMessage}>
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
