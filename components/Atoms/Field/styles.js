import styled, { css } from 'styled-components';

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
  height: 55px;
  border-radius: 27px;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.fieldBackground};
  color: ${({ theme }) => theme.colors.fieldColor};
  border: 1px solid ${({ theme }) => theme.colors.fieldBackground};

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.fieldBackgroundFocused};
  }
`;

export const Input = styled.input`
  /* color: ${({ theme }) => theme.colors.black}; */
  color: ${({ theme }) => theme.colors.fieldColor};
  border: 0 none;
  background-color: transparent;
  width: 100%;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;  

  &::placeholder {
    color: ${({ theme }) => theme.colors.fieldPlaceholder};
    opacity: 1; /* Firefox */
  }
`;

export const Field = styled.div`
  ${RoundElementBase};

  width: 100%;

  ${({ hasIcon }) => hasIcon && `padding-left: 45px;`};

  svg path {
    stroke: transparent;
  }
`;

export const FieldValidationMessage = styled.div`
  transition: 0.3s ease-in-out;
  transition-property: max-height, opacity, padding-top;
  transition-delay: 1s;
  overflow: hidden;
  font-size: 1rem;
  padding: 0 23px;

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

export const FieldRoot = styled.div`
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
`;

export const FieldGroup = styled.div`
  display: flex;
  width: 100%;

  ${Field} {
    /* margin: 0 5px; */
  }

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
    }
  }
`;
