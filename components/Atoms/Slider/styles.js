import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    margin-top: -5px;
  }
  to {
    margin-top: 0px;
  }
`;

export const Root = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

export const ControlLeft = styled.button`
  transition: 0.3s ease-in-out;
  transition-property: opacity, top;
  position: absolute;
  width: 29px;
  left: -87px;
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  top: calc(50% - 44px);

  ${({ show }) =>
    show
      ? `
        opacity: 1;        
      `
      : `
        opacity: 0;        
        top: calc(50% - 2px);
        pointer-events: none;
    `}

  svg {
    fill: ${({ theme }) => theme.colors.black};
    width: 100%;
  }

  &:hover {
    animation: ${bounce} 0.3s infinite alternate;
  }
`;

export const ControlRight = styled(ControlLeft)`
  left: unset;
  right: -87px;
  transform: rotate(180deg);
`;

export const Content = styled.div`
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  width: 100%;
  position: absolute;

  ${({ active }) =>
    active
      ? `
        opacity: 1;
        z-index: 1;        

      `
      : `
        opacity: 0;
        z-index: 0;        
      `}
`;
