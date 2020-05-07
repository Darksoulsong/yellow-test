import styled, { css } from 'styled-components';

export const BackdropRoot = styled.div`
  transition: 0.2s ease-in-out;
  transition-property: opacity, visibility;
  /* transition-delay: 0s, 0s; */
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
