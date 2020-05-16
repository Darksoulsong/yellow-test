import React from 'react';
import {
  CheckboxRoot,
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  CheckboxContent,
  CheckboxRow,
  CheckboxValidationMessage,
} from './styles';

export default function CheckboxComponent({
  id,
  checked,
  name,
  onChange,
  onBlur,
  hasError,
  validationMessage,
  renderLabel,
  disabled,
}) {
  return (
    <CheckboxRoot hasError={hasError}>
      <CheckboxRow>
        <CheckboxWrapper>
          <Checkbox
            id={id}
            name={name}
            checked={checked}
            onChange={e => typeof onChange === 'function' && onChange(e)}
            onBlur={e => typeof onBlur === 'function' && onBlur(e)}
            hasError={hasError}
            disabled={disabled}
          />
          <CheckboxLabel htmlFor={id} />
        </CheckboxWrapper>
        <CheckboxContent>
          {typeof renderLabel === 'function' &&
            renderLabel(checked, id, hasError)}
        </CheckboxContent>
      </CheckboxRow>
      <CheckboxRow>
        <CheckboxValidationMessage show={hasError && !!validationMessage}>
          {validationMessage}
        </CheckboxValidationMessage>
      </CheckboxRow>
    </CheckboxRoot>
  );
}
