import styled from 'styled-components';

export const DefaultLayoutRoot = styled.div`
  position: relative;
`;

export const DefaultLayoutLoader = styled.div`
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  left: 0;
  top: 84px;
  opacity: 0;
  pointer-events: none;

  ${({ show }) => show && `opacity: 1;`};
`;

export const DefaultLayoutBody = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: 0;

  ${({ show }) => show && `opacity: 1;`};
`;
