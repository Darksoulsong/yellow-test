import styled, { css } from 'styled-components';

export const CirclePathAnimation = css`
  path {
    transition: 2s ease-in-out;
    transition-delay: 4s;
    transition-property: stroke-dashoffset;
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

function scratches() {
  let styles = '';

  for (let i = 1; i < 12; i += 1) {
    styles += `
        path:nth-child(${i}) {
          transition-delay: ${(i - 1) * 150}ms;
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
      transition: 1s ease-in-out;
      transition-delay: 1s;
      transition-property: stroke-dashoffset;
      stroke: ${({ theme }) => theme.colors.white};
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
      path {
        stroke-dashoffset: 0;
      }
    }
  }
`;
