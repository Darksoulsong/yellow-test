import styled, { css } from 'styled-components';

export const BackdropRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayDark};
  z-index: 1;

  ${({ active }) =>
    active
      ? css`
          opacity: 0.8;
          visibility: visible;
        `
      : css`
          opacity: 0.4;
          visibility: hidden;
          pointer-events: none;
        `}
`;
