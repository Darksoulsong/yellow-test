import styled, { keyframes, css } from 'styled-components';

const DrawLine = keyframes`
  to { stroke-dashOffset: 0; }
`;

export const CirclePathAnimation = css`
  path {
    stroke: ${({ theme }) => theme.colors.white};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-name: ${DrawLine};
    animation-delay: 4s;
    animation-duration: 2s;
  }
`;

function scratches() {
  let styles = '';

  for (let i = 1; i < 12; i += 1) {
    styles += `
        path:nth-child(${i}) {
          transition-delay: ${(i - 1) * 350}ms;
        }
     `;
  }

  return styles;
}

export const AnimatedScratchedCircleRoot = styled.div`
  position: relative;
  width: 275px;
  height: 294px;

  svg {
    position: absolute;
    width: 100%;
    height: auto;

    path {
      transition: stroke-dashoffset 0.3s ease-in-out;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  .circle {
    top: 19%;
    left: 14%;
    width: 70%;

    transform: scaleX(-1);

    path {
      stroke-dasharray: 205;
      stroke-dashoffset: 205;
    }
  }

  .scratches {
    top: 0;
    left: 0;

    path {
      transition: stroke-dashoffset 0.3s ease-in-out;
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
    }
  }

  [data-aos='animate-circle-scratches'] {
    &.aos-animate {
      path {
        stroke-dashoffset: 7;
      }

      ${scratches()};
    }
  }

  [data-aos='animate-circle'] {
    &.aos-animate {
      ${CirclePathAnimation};
    }
  }
`;
