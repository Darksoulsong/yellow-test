import styled from 'styled-components';

export const AnimatedUnderlineRoot = styled.span`
  position: relative;

  [data-aos='animate-width'] {
    width: 0;
    transition-property: width;

    &.aos-animate {
      width: 100%;
    }
  }
`;

export const AnimatedUnderlineContent = styled.span`
  position: relative;
  z-index: 2;
`;

export const AnimatedUnderlineLine = styled.span`
  position: absolute;
  bottom: 2px;
  left: 0;
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.yellow};
  z-index: 1;
`;
