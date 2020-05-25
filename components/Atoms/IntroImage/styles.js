import styled from 'styled-components';
// import Image from '/images/intro-image-home.jpg';

export const IntroImageRoot = styled.div`
  position: relative;
  overflow: hidden;
  width: 181px;
  height: 181px;
  background: url('/images/intro-image-home.jpg') no-repeat scroll 0 0;
  background-position: -50px 0;
  background-size: cover;
  /* background: yellow; */

  .main-detail {
    position: absolute;
    left: 28%;
    top: 10%;
    width: 45%;
    height: 46%;
  }

  &::before,
  &::after {
    transition-delay: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }

  &:before {
    left: 14%;
    top: 0;
  }

  &:after {
    /* right: 32%; */
    right: 22%;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    /* width: 736px;
           height: 369px; */
    background-position: -50px 0;

    background-size: 115%;
    width: 368px;
    height: 184px;
    /* width: 441px;
    height: 221px; */

    .main-detail {
      left: 29%;
      top: 12%;
      width: 35%;
      height: 74%;
    }

    /* 
    .main-detail {
      left: 27%;
      top: 10%;
      width: 47%;
      height: 74%;
    } 
    */

    &:after {
      right: 32%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    /* width: 450px;
    height: 225px; */
    width: 486px;
    height: 285px;

    .main-detail {
      /* left: 31.4%;
      top: 14%; */
      left: 32.1%;
      top: 10%;
    }

    &:before,
    &:after {
      width: 8px;
    }

    &:after {
      right: 32%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    width: 736px;
    height: 369px;

    .main-detail {
      left: 35.4%;
      top: 14%;
    }

    &:after {
      right: 28%;
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
