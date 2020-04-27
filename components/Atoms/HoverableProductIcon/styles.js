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
  height: 240px;

  .hover-icon {
    position: absolute;
    width: 120%;
    /* height: auto; */

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

    .product-icon {
      /* width: 90%; */
      /* width: 100%; */

      /* img {
        max-width: 100%;
        height: auto;
      } */
    }
  }

  &.product-icon {
    position: relative;
  }

  &.exec-icon {
    .hover-icon {
      top: -50px;
      /* width: 175%; */
    }
  }

  &.express-icon {
    .hover-icon {
      top: -30px;
      /* width: 120%; */
    }
  }

  &.tech-icon {
    .hover-icon {
      top: -45px;
      /* width: 130%; */
    }
  }

  &.rpo-icon {
    .hover-icon {
      top: -40px;
      /* width: 110%; */
    }
  }
`;
