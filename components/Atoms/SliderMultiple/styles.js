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
  align-items: center;
  height: 100%;
`;

export const ControlLeft = styled.div`
  transition: 0.3s ease-in-out;
  transition-property: opacity, top;
  width: 0;
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  z-index: 5;

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
    height: auto;
    width: 30px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.grayLight}`};

    position: relative;
    left: 10px;
    padding: 5px;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      left: -50px;
      padding: 0;
      border-radius: 0px;
      background: unset;
      border: none;
    }
  }

  &:hover {
    animation: ${bounce} 0.3s infinite alternate;
  }
`;

export const ControlRight = styled(ControlLeft)`
  transform: rotate(180deg);
  svg {
    position: relative;
    left: 10px;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      left: -50px;
      padding: 0;
      border-radius: 0px;
      background: unset;
      border: none;
    }
  }
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
