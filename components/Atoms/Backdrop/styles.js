import styled, { css } from 'styled-components';

export const BackdropRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.grayDark};
  z-index: ${({ zIndex = 1 }) => zIndex};

  ${({ animated = false }) =>
    animated &&
    css`
      transition: 0.3s ease-in-out;
      transition-property: opacity, visibility;
    `}

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
