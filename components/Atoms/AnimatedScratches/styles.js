import styled from 'styled-components';

export const Root = styled.span`
  &[data-aos='animate-scratches'] {
    path {
      transition: stroke-dashoffset 0.3s ease-in-out;
      stroke: ${({ strokeColor }) => strokeColor};
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
    }

    &.aos-animate {
      path {
        stroke-dashoffset: 49;
      }
    }
  }
`;
