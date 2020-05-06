import styled from 'styled-components';

export const IntroImageRoot = styled.div`
  position: relative;
  overflow: hidden;

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
    transition: 0.5s ease-in-out;
    transition-property: top, bottom, opacity;
    transition-delay: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 6px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0;
  }

  &:before {
    left: 14%;
    top: -100%;
  }

  &:after {
    right: 32%;
    bottom: -100%;
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
