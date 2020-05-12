import styled, { keyframes, css } from 'styled-components';

const DrawLine = keyframes`
  to { stroke-dashOffset: 0; }
`;

export const CirclePathAnimation = css`
  path {
    stroke: transparent;
    stroke: ${({ theme }) => theme.colors.white};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-name: ${DrawLine};
    animation-duration: 500ms;
    stroke-dasharray: 205;
    stroke-dashoffset: 205;
  }
`;

export const Description = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  width: 100%;
  padding: 0 8px;
  padding-top: 140px;
  opacity: 1;
  white-space: pre-wrap;

  &:before {
    content: '';
    position: absolute;
    top: 44px;
    left: calc(50% - 2px);
    height: 72px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;

  &:not(.active):hover {
    .hover-icon {
      transform: scaleX(-1);

      ${CirclePathAnimation};
    }
  }

  ${Description} {
    opacity: 0;
  }

  &:hover,
  &.active {
    ${Description} {
      transition-delay: 0.25s;
      opacity: 1;
    }
  }
`;

export const ProductsActions = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: -72px;

  button > span {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
      text-decoration: none;
    }
  }
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;

  ${Item} {
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;
