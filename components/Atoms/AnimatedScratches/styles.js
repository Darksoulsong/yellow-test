import styled from 'styled-components';

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

      g:nth-child(1) path {
        transition-delay: 100ms;
      }

      g:nth-child(3) path {
        transition-delay: 500ms;
      }

      g:nth-child(2) path {
        transition-delay: 1000ms;
      }
    }
  }
`;
