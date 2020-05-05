import styled from 'styled-components';

function groups() {
  let styles = '';

  for (let i = 1; i < 10; i += 1) {
    styles += `
        g:nth-child(${i}) path {
          transition-delay: ${(i - 1) * 500}ms;
        }
     `;
  }

  return styles;
}

export const Root = styled.span`
  &[data-aos='animate-scratches'] {
    path {
      transition: stroke-dashoffset 0.3s ease-in-out;
      stroke: white;
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
    }

    &.aos-animate {
      path {
        stroke-dashoffset: 49;
      }

      ${groups()};
    }
  }
`;
