import styled from 'styled-components';

export const FileUploadFieldRoot = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  overflow: hidden;

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

  ${({ theme, active }) =>
    active &&
    `
      background-color: ${theme.colors.yellow};

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
