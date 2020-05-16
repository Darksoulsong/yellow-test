import React from 'react';
import { uid } from 'react-uid';
import { mask } from '@utils';
import {
  FieldRoot,
  Field,
  FieldIcon,
  Input,
  FieldGroup,
  FieldValidationMessage,
  FieldSelectDropdown,
  FieldSelectDropdownItems,
  FieldSelectDropdownItem,
} from './styles';

export default function FieldComponent({
  type,
  renderIcon,
  hasError,
  width,
  validationMessage,
  selectList,
  onSelectItemClick,
  ...rest
}) {
  // const [selectedItem, setSelectedItem] = React.useState(rest.value);
  const ref = React.useRef(null);
  const hasIcon = typeof renderIcon === 'function';
  const inputProps = {
    type,
    ...rest,
  };

  if (rest.mask) {
    inputProps.onChange = event => {
      event.target.value = mask(event.target.value, rest.mask);

      return rest.onChange && rest.onChange(event);
    };
  }

  const handleSelectItemClick = React.useCallback(item => {
    onSelectItemClick(item);
  }, []);

  return (
    <FieldRoot width={width} hasError={hasError}>
      <Field isSelect={type === 'select'} hasIcon={hasIcon}>
        {hasIcon && <FieldIcon>{renderIcon()}</FieldIcon>}

        <Input ref={ref} {...inputProps} />

        <FieldSelectDropdown>
          <FieldSelectDropdownItems>
            {!!selectList &&
              !!selectList.length &&
              selectList.map(item => (
                <FieldSelectDropdownItem
                  key={uid(item)}
                  onClick={handleSelectItemClick}
                >
                  {item.label}
                </FieldSelectDropdownItem>
              ))}
          </FieldSelectDropdownItems>
        </FieldSelectDropdown>
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
