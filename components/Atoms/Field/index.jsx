import React from 'react';
import { mask } from '@utils';
import {
  FieldRoot,
  Field,
  FieldIcon,
  Input,
  Select,
  SelectWrapper,
  FieldGroup,
  FieldValidationMessage,
  TextArea,
} from './styles';

const FieldComponent = React.memo(function FieldComponent({
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
        type={type}
        isSelect={type === 'select'}
        hasIcon={hasIcon}
        isLoading={isLoading}
      >
        {hasIcon && <FieldIcon>{renderIcon()}</FieldIcon>}

        {type !== 'select' && type !== 'textarea' && (
          <Input ref={ref} {...inputProps} />
        )}
        {type === 'textarea' && <TextArea ref={ref} {...inputProps} />}
        {type === 'select' && (
          <SelectWrapper>
            <Select ref={ref} {...inputProps}>
              {options &&
                options.length &&
                options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </Select>
          </SelectWrapper>
        )}
      </Field>

      <FieldValidationMessage show={hasError && !!validationMessage}>
        {validationMessage}
      </FieldValidationMessage>
    </FieldRoot>
  );
});

FieldComponent.defaultProps = {
  renderIcon: null,
  width: null,
  type: 'text',
};

export default FieldComponent;

export { FieldGroup };
