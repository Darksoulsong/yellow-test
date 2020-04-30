import styled, { keyframes } from 'styled-components';

const DrawLine = keyframes`
  to { stroke-dashOffset: 0; }
  /* 0% {
    stroke-dasharray: 0 250;
  } */
`;

export const Root = styled.div`
  display: flex;
`;

export const Description = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  width: 100%;
  padding: 0 50px;
  padding-top: 160px;
  opacity: 1;

  &:before {
    content: '';
    position: absolute;
    top: 35px;
    left: calc(50% - 2px);
    height: 100px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:hover {
    .hover-icon {
      transform: scaleX(-1);

      path {
        stroke: transparent;
        stroke: white;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        animation-name: ${DrawLine};
        animation-duration: 1s;
        animation-delay: 0s;
        stroke-dasharray: 205;
        stroke-dashoffset: 205;
      }
    }
  }

  ${Description} {
    opacity: 0;
  }

  &:hover {
    ${Description} {
      opacity: 1;
    }
  }
`;
