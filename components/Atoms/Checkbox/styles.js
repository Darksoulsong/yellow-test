import styled, { css } from 'styled-components';

export const CheckboxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  z-index: 1;
  cursor: pointer;
`;

export const CheckboxValidationMessage = styled.div`
  transition: 0.3s ease-in-out;
  transition-property: max-height, opacity, padding-top;
  overflow: hidden;
  font-size: 1rem;
  padding: 0 0 0 16px;

  ${({ show = false }) =>
    show
      ? css`
          opacity: 1;
          max-height: 100px;
          padding-top: 8px;
        `
      : css`
          opacity: 0;
          max-height: 0px;
        `}
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 12px;
  height: 12px;
  opacity: 0;
  position: relative;
  z-index: 0;

  &:checked + label:before {
    content: '\\2714';
    position: absolute;
    top: -4px;
    left: 0px;
    width: 12px;
    height: 12px;
    font-size: 1.5rem;
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      & + label {
        border-color: ${theme.colors.red};
      }
    `};
`;

export const CheckboxRoot = styled.div`
  display: flex;
  flex-direction: column;

  ${({ hasError, theme }) =>
    hasError &&
    css`
      ${CheckboxValidationMessage} {
        color: ${theme.colors.red};
      }
    `};
`;

export const CheckboxContent = styled.div`
  width: 100%;
`;

export const CheckboxRow = styled.div`
  flex: 1;
  display: flex;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
`;
