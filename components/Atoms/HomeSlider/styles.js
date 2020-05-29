import styled, { keyframes, css } from 'styled-components';

const bounce = keyframes`
  from {
    margin-top: -5px;
  }
  to {
    margin-top: 0px;
  }
`;

export const ControlLeft = styled.button`
  transition: 0.3s ease-in-out;
  transition-property: opacity, top;

  background-color: transparent;
  border: 0 none;
  cursor: pointer;

  width: 16px;
  height: 35px;

  ${({ show }) =>
    show
      ? css`
          opacity: 1;
        `
      : css`
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
  transform: rotate(180deg);
`;

export const BubbleContent = styled.div`
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 300;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;
