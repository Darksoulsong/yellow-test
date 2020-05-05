import styled from 'styled-components';

function groups() {
  let styles = '';

  for (let i = 1; i < 3; i += 1) {
    styles += `
        path:nth-child(${i}) {
          transition-delay: ${(i - 1) * 500}ms;
        }
     `;
  }

  return styles;
}

export const Root = styled.span`
  &[data-aos='animate-arrow'] {
    path {
      transition: stroke-dashoffset 1s ease-in-out;
      stroke: ${({ theme }) => theme.colors.black};
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
    }

    &.aos-animate {
      path {
        stroke-dashoffset: 119;
      }

      ${groups()};
    }
  }
`;
