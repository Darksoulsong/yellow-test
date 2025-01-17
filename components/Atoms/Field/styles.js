import styled, { css, keyframes } from 'styled-components';

const AnimatedGradient = keyframes`
  0%{background-position:0% 82%}
  50%{background-position:100% 19%}
  100%{background-position:0% 82%}
`;

const getWidth = width => {
  if (!width) {
    return `width: 100%;`;
  }

  return width === 'flex' ? `flex: 1` : `width: ${width};`;
};

const RoundElementBase = css`
  transition: 0.3s ease-in-out;
  transition-property: background-color, border;
  display: flex;
  align-items: center;
  height: ${({ type }) => (type === 'textarea' ? '150px' : '55px')};
  border-radius: 27px;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.fieldBackground};
  color: ${({ theme }) => theme.colors.fieldColor};
  border: 1px solid ${({ theme }) => theme.colors.fieldBackground};

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.fieldBackgroundFocused};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active {
    transition: 0.3s ease-in-out;
    -webkit-box-shadow: ${({ theme }) =>
      `0 0 0 30px ${theme.colors.fieldBackground} inset !important`};
    box-shadow: ${({ theme }) =>
      `0 0 0 30px ${theme.colors.fieldBackground} inset !important`};
  }
  input:-webkit-autofill:focus {
    transition: 0.3s ease-in-out;
    -webkit-box-shadow: ${({ theme }) =>
      `0 0 0 30px ${theme.colors.fieldBackgroundFocused} inset !important`};
    box-shadow: ${({ theme }) =>
      `0 0 0 30px ${theme.colors.fieldBackgroundFocused} inset !important`};
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.fieldColor};
  border: 0 none;
  background-color: transparent;
  width: 100%;
  font-size: 1.72rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  &::placeholder {
    color: ${({ theme }) => theme.colors.fieldPlaceholder};
    opacity: 1; /* Firefox */
  }
`;

export const TextArea = styled(Input).attrs({ as: 'textarea' })`
  resize: none;
  height: 120px;
`;

export const Select = styled(Input).attrs({
  as: 'select',
})`
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  position: relative;

  &:after {
    position: absolute;
    content: '▼';
    right: 2px;
    top: calc(50% - 7px);
    width: 8px;
    height: 14px;
    line-height: 1.4rem;
    font-size: 1.1rem;
  }
`;

export const Field = styled.div`
  position: relative;

  ${RoundElementBase};

  width: 100%;

  ${({ hasIcon }) => hasIcon && `padding-left: 45px;`};

  svg path {
    stroke: transparent;
  }

  ${({ isSelect }) => isSelect && `padding-right: 6px;`};

  ${({ isLoading }) =>
    isLoading &&
    css`
      background: linear-gradient(245deg, #dcdbdb, #f7f6f5);
      background-size: 800% 800%;
      animation: ${AnimatedGradient} 1.5s ease infinite;
    `};
`;

export const FieldValidationMessage = styled.div`
  transition: 0.3s ease-in-out;
  transition-property: max-height, opacity, padding-top;
  overflow: hidden;
  font-size: 1rem;
  padding: 0 20px;
  position: absolute;
  left: 0;
  bottom: -13px;

  ${({ show = false }) =>
    show
      ? css`
          opacity: 1;
          max-height: 100px;
          padding-top: 4px;
        `
      : css`
          opacity: 0;
          max-height: 0px;
        `}
`;

export const FieldRoot = styled.div`
  position: relative;

  ${({ width }) => getWidth(width)};

  ${({ theme, hasError }) =>
    hasError &&
    css`
      ${Field} {
        border-color: ${theme.colors.fieldError};
      }

      ${FieldValidationMessage} {
        color: ${theme.colors.fieldError};
      }
    `};
`;

export const FieldIcon = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.grayDarkest};
  margin-left: -27px;
  margin-right: 8px;
  height: 18px;
  font-size: 1.6rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  width: 100%;

  ${FieldRoot} {
    margin: 0 5px;

    &:first-child {
      margin-left: 0;

      ${Field} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &:last-child {
      margin-right: 0;

      ${Field} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      ${FieldValidationMessage} {
        padding-left: 0;
      }
    }
  }
`;

export const FieldSelectDropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
`;

export const FieldSelectDropdownItems = styled.ul``;

export const FieldSelectDropdownItem = styled.li``;
