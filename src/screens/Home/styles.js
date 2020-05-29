import styled, { keyframes } from 'styled-components';
import { getDesktopFirstMediaQuery } from '@utils';

export const HomeRoot = styled.div`
  button {
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 1.2rem;
      height: 49px;
      padding: 0 20px;
      letter-spacing: 0.118rem;
    }
  }
`;

export const Intro = styled.section`
  padding: 0 12px;
  position: relative;
  margin-bottom: 37px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-bottom: 126px;
    padding: 0 128px;
  }
`;

export const IntroHolder = styled.div`
  padding-top: 25px;
  margin: 0 auto;
  margin-bottom: 25px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 465px;
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-top: 100px;
  }
`;

export const IntroHolderBlock = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: block;
  }
`;

export const IntroHolderContent = styled.div`
  display: flex;
  justify-content: space-between;

  ${IntroHolderBlock} {
    &:last-child {
      width: 181px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: block;
  }
`;

export const MainHeading = styled.h1`
  em {
    font-size: 4.3rem;
    font-style: normal;
    font-weight: 700;
  }

  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 0.035rem;
  line-height: 1.7rem;
  padding-top: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    em {
      font-size: 6rem;
      font-style: normal;
    }

    font-size: 2.6rem;
    letter-spacing: 0.097rem;
    line-height: 3.1rem;
    padding-top: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    em {
      font-size: 8.7rem;
      font-style: normal;
    }

    line-height: 5rem;

    font-size: 3.6rem;
  }
`;

export const SecondaryHeading = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
  padding-top: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 2.6rem;
    padding-top: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 3.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    font-size: 3.6rem;
  }
`;

export const Video = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 185px;
  margin: 0 auto;

  &:after {
    content: '';
    width: 4px;
    height: 100%;
    right: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
  }

  video {
    position: absolute;
    left: -2px;
    width: 100%;
    height: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 385px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 635px;
    width: 77vw;
    left: 286px;

    video {
      transform: scale(1.3);
      left: -17%;
      top: 10%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    left: 295px;
    height: 650px;

    video {
      width: 100%;
      height: auto;
      transform: scale(1);
      left: -2px;
    }
  }
`;

export const IntroFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 40px;
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 115px;
  }
`;

export const IntroFooterImage = styled.div``;

export const IntroFooterImageDesktop = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: block;
  }
`;

export const IntroFooterImageSmallerThanDesktop = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const IntroFooterActions = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 0px;
  display: flex;

  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-content: space-evenly;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;

    button {
      margin-bottom: 28px;
      width: 276px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 276px;
    width: auto;
    margin: 75px 0 0 40px;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    margin-top: 108px;
    margin-left: 40px;

    button {
      margin-bottom: 20px;
    }
  }
`;

export const SubHeading1 = styled.h2`
  font-weight: 300;
  text-align: center;
  font-size: 2.9rem;

  em {
    font-style: normal;
    border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 4.9rem;
  }
`;

export const Section = styled.section`
  transition: 0.3s ease-in-out;
  transition-property: margin, padding;
  padding: 47px 26px 56px;
  margin: 0 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 35px;
    padding-top: 70px;
    padding-bottom: 70px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-top: 110px;
    padding-bottom: 110px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    padding: 110px;
  }
`;

export const GrayedSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.grayLighter};

  ${SubHeading1} {
    width: 80%;
    margin: 0 auto;
  }
`;

export const TimelineSection = styled(GrayedSection)`
  padding-left: 0;
  padding-right: 0;
  padding: 26px 0 54px;

  ${SubHeading1} {
    width: 100%;
    font-size: 1.7rem;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${SubHeading1} {
      width: 90%;
      font-size: 2.8rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    ${SubHeading1} {
      font-size: 3.6rem;
    }
  }
`;

export const TransparentLogoHolder = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  left: -28px;

  svg {
    transform: rotate(-90deg);
  }
`;

export const HighlightsSection = styled(Section)`
  padding: 34px 32px 24px;
  position: relative;
  display: flex;

  ${SubHeading1} {
    white-space: nowrap;
    margin-left: 0;

    svg {
      position: relative;
      width: 100px;
      height: 100px;
      left: 10px;
      top: 66px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    ${SubHeading1} {
      font-size: 5rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-top: 80px;
    padding-bottom: 80px;

    ${SubHeading1} {
      width: 560px;
      padding-bottom: 54px;
    }
  }
`;

export const HighlightsMobileArrowHolder = styled.div`
  display: none;
  height: 60px;

  svg {
    display: block;
    margin: 0 auto;
    width: 50px;
    transform: scaleX(-1) rotate(75deg) translateX(-24px);
  }

  @media (max-width: ${({ theme }) =>
      getDesktopFirstMediaQuery(theme.breakpoints.large)}) {
    display: block;
  }
`;

export const HighlightBox = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    height: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    width: 60vw;
  }
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ highlighted, theme }) =>
    highlighted ? theme.colors.yellow : theme.colors.grayLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 64px;
    height: 64px;
  }
`;

export const List = styled.ul`
  margin-bottom: 20px;

  li {
    padding: 8px 0;
    font-size: 1.4rem;
    font-weight: 300;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 63px;

    li {
      font-size: 2.2rem;
    }
  }
`;

export const ListHolder = styled.div`
  width: 172px;
  margin: 0 auto;
  margin-top: 24px;

  button {
    font-size: 1.5rem;
    padding: 0 22px;
    height: 50px;
    margin-left: -17px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 260px;

    button {
      height: 62px;
      margin-left: unset;
      width: 100%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 0;
  }
`;

export const CirclesContainer = styled.div`
  margin: 0 auto;
  width: 230px;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 365px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 365px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: auto;
  }
`;

export const Circles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 40px);
  grid-gap: 23px;
  place-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: repeat(7, 64px);
    grid-gap: 36px;
    margin-top: 0;

    ${Circle} {
      ${ListHolder} {
        position: relative;
        top: 85px;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: repeat(7, 64px);
    margin-bottom: 32px;

    ${Circle} {
      ${ListHolder} {
        position: relative;
        top: 85px;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-left: 90px;
    margin-bottom: 375px;
  }
`;

export const Highlights = styled.div`
  margin-left: auto;
`;

export const TimelineWrapper = styled.div`
  margin: 60px 0 35px;
  height: 335px;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 600px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: auto;
  }
`;

export const ProductsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.grayDarkish};
  padding-left: 32px;
  padding-right: 32px;

  ${SubHeading1} {
    font-size: 2.9rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 35px;

    svg {
      position: relative;
      width: 22px;
      top: 0px;
      left: -2px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${SubHeading1} {
      font-size: 4.9rem;

      svg {
        position: relative;
        width: 35px;
        top: -16px;
        left: -5px;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-left: inherit;
    padding-right: inherit;
    margin-top: 80px;
  }
`;

export const ProductsMobileCarouselHolder = styled.div`
  display: none;

  @media (max-width: ${({ theme }) =>
      getDesktopFirstMediaQuery(theme.breakpoints.large)}) {
    display: block;
  }
`;

export const ProductsDesktopHolder = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: block;
  }
`;

export const ProductsFooter = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 28px;
  }
`;

export const ProductsAnchor = styled.div`
  text-align: center;
  text-transform: normal;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 0.034rem;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 2.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.21rem;
  }
`;

export const ExperienceSection = styled(Section)`
  padding-bottom: 75px;
  padding-left: 0;
  padding-right: 0;

  ${SubHeading1} {
    font-size: 3.3rem;
    letter-spacing: 0.043rem;
    margin-bottom: 37px;
  }

  .slider-control-left,
  .slider-control-right {
    width: 40px;
    height: 49px;

    svg {
      width: 16px;
      height: 49px;
    }
  }

  .slider-control-left {
    left: -80px;
  }

  .slider-control-right {
    right: -80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${SubHeading1} {
      font-size: 4.9rem;
      letter-spacing: 0.16rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-bottom: 85px;
    .slider-control-left {
      left: -87px;
    }

    .slider-control-right {
      right: -87px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    ${SubHeading1} {
      font-size: 8.3rem;
      letter-spacing: 0.16rem;
      margin-bottom: 98px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    ${SubHeading1} {
      font-size: 9.5rem;
    }
  }
`;

export const ExperienceContent = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export const ExperienceFooter = styled.div`
  position: relative;
  padding: 0;
  width: 250px;
  margin: 0 auto;
  margin-top: 25px;

  img {
    height: auto;
    width: 171px;
  }

  svg {
    position: absolute;
    right: -20px;
    bottom: -85px;
    width: 85px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 410px;

    img {
      width: 80%;
      max-width: 299px;
    }

    svg {
      right: -40px;
      bottom: -60px;
      width: 132px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    img {
      width: 240px;
    }

    svg {
      right: -175px;
      width: 163px;
    }
  }
`;

export const BubbleContent = styled.div`
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 300;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

const bounce = keyframes`
  from {
    margin-top: -5px;
  }
  to {
    margin-top: 0px;
  }
`;

export const ControlLeft = styled.button`
  transition: 0.3s ease-in-out;
  transition-property: opacity, top;
  position: absolute;
  left: -87px;
  background-color: transparent;
  border: 0 none;
  cursor: pointer;

  top: calc(50% - 17px);
  width: 16px;
  height: 35px;

  ${({ show }) =>
    show
      ? `
        opacity: 1;        
      `
      : `
        opacity: 0;        
        top: calc(50% - 2px);
        pointer-events: none;
    `}

  svg {
    fill: ${({ theme }) => theme.colors.black};
    stroke-width: 2px;
    width: 16px;
    height: 100%;
  }

  &:hover {
    animation: ${bounce} 0.3s infinite alternate;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 65px;
    top: calc(50% - 32px);
  }
`;

export const ControlRight = styled(ControlLeft)`
  left: unset;
  right: -87px;
  transform: rotate(180deg);
`;
