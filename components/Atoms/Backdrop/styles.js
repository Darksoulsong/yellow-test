import styled from 'styled-components';

export const BackdropRoot = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayDark};
  z-index: 1;
  pointer-events: none;
  ${({ active }) =>
    active
      ? `
    opacity: 0.8;    
  `
      : `
      opacity: 0;
      `}
`;
