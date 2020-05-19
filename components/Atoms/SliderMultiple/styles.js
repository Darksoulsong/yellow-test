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

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ specialLgMargin = 'unset' }) => specialLgMargin};
  }
`;

export const ControlLeft = styled.div`
  transition: 0.3s ease-in-out;
  transition-property: opacity, top;
  width: 30px;
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spaces.xsm};
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
    width: 80%;
    height: auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      position: absolute;
      width: 25px;
      left: -50px;
      padding: 0;
      border-radius: 0px;
      background: unset;
      border: none;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 0;
    padding: 0;
  }

  &:hover {
    animation: ${bounce} 0.3s infinite alternate;
  }
`;

export const ControlRight = styled(ControlLeft)`
  transform: rotate(180deg);
  svg {
    position: relative;
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
