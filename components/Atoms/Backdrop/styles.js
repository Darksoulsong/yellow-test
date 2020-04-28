import styled from 'styled-components';

export const BackdropRoot = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayDark};
  opacity: ${({ active }) => (active ? 0.8 : 0)};
  z-index: 1;
  /* pointer-events: ${({ active }) => (active ? 'none' : all)}; */
`;
