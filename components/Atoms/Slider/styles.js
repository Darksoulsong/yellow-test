import styled, { keyframes, css } from 'styled-components';

const bounce = keyframes`
  from {
    margin-top: -5px;
  }
  to {
    margin-top: 0px;
  }
`;

export const SliderRoot = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ControlLeft = styled.button`
  transition: 0.3s ease-in-out;
  transition-property: opacity, top;
  position: absolute;
  left: -87px;
  background-color: transparent;
  border: 0 none;
  cursor: pointer;

  top: calc(50% - 17px);
  width: 16px;
  height: 35px;

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
    stroke-width: 2px;
    width: 16px;
    height: 100%;
  }

  &:hover {
    animation: ${bounce} 0.3s infinite alternate;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 65px;
    top: calc(50% - 32px);
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
      ? css`
          opacity: 1;
          z-index: 1;
        `
      : css`
          opacity: 0;
          z-index: 0;
        `}
`;
