import styled, { css } from 'styled-components';

export const FileUploadFieldRoot = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 40px;
  overflow: hidden;
  flex-direction: column;

  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
`;

export const FileUploadFieldContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: 0;
`;

export const FileUploadFieldIcon = styled.div`
  transition: background-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 9px;
  width: 28px;
  height: 28px;

  svg {
    transition: fill 0.3s ease-in-out;
    fill: ${({ theme }) => theme.colors.white};
  }

  ${({ theme, active, hasError }) =>
    active &&
    `
      background-color: ${hasError ? theme.colors.red : theme.colors.yellow};

      svg {
        fill: ${theme.colors.black};
      }
    `}
`;

export const FileUploadFieldContent = styled.div`
  margin-left: 8px;
  display: flex;
`;

export const FileUploadFieldName = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
`;

export const FileUploadFieldValidationMessage = styled.div`
  transition: 0.3s ease-in-out;
  transition-property: max-height, opacity, padding-top;
  display: flex;
  font-size: 1rem;
  width: 100%;
  padding-left: 6px;
  color: ${({ theme }) => theme.colors.red};

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
          padding-top: 0;
        `}
`;
