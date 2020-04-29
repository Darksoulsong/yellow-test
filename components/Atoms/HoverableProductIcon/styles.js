import styled, { keyframes } from 'styled-components';

// const DrawLine = keyframes`
//   to { stroke-dashOffset: 0; }
// `;

// const FadeStroke = keyframes`
//   to { stroke-opacity: 0; }
// `;

// const FillIn = keyframes`
//   from { fill-opacity: 0; }
//   to { fill-opacity: 1; }
// `;

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 200px;
  height: 220px;
  background: green;

  .product-icon {
    /* width: 112px; */
    /* height: 180px; */
  }

  &:hover {
    .hover-icon {
      opacity: 1;
    }
  }

  .hover-icon {
    position: absolute;
    width: 100%;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    top: -30px;

    path {
      fill: ${({ theme }) => theme.colors.white};
      stroke: transparent;
      /* stroke: white;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-name: DrawLine, FadeStroke, FillIn;
      animation-duration: 4s, 1s, 1s;
      animation-delay: 0s, 3.5s, 3.5s;
      stroke-dashoffset: 600; */
    }
  }

  &.product-icon,
  &.exec-icon,
  &.express-icon,
  &.tech-icon,
  &.rpo-icon {
    position: relative;
    width: 100%;
  }

  &.product-icon {
    position: relative;
  }

  &.exec-icon {
    .product-icon {
      height: 170px;
    }
  }

  &.express-icon {
    .product-icon {
      height: 190px;
    }
  }

  &.tech-icon {
    .product-icon {
      height: 190px;
    }
  }

  &.rpo-icon {
    .product-icon {
      height: 160px;
    }
  }
`;
