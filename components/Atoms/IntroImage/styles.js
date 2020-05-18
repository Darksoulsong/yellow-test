import styled from 'styled-components';

export const IntroImageRoot = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }

  .main-detail {
    position: absolute;
    left: 34%;
    top: 6%;
    width: 35%;
    height: 74%;
  }

  &::before,
  &::after {
    transition-delay: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }

  &:before {
    left: 14%;
    top: 0;
  }

  &:after {
    right: 32%;
    bottom: 0;
  }

  &[data-aos='animate-intro'] {
    &.aos-animate {
      &:before,
      &:after {
        opacity: 1;
      }

      &:before {
        top: 0%;
      }

      &:after {
        bottom: 0%;
      }
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
