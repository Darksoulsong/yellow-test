import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
`;

export const Intro = styled.section`
  padding: 0 32px;
  position: relative;
  margin-bottom: 126px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0 128px;
  }
`;

export const IntroHolder = styled.div`
  padding-top: 50px;
  margin: 0 auto;
  width: 465px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    padding-top: 100px;
  }
`;

export const MainHeading = styled.h1`
  em {
    font-size: 7.3rem;
    font-style: normal;
    font-weight: 700;
  }

  font-size: 2.6rem;
  font-weight: 300;
  letter-spacing: 0.87px;

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    em {
      font-size: 8.7rem;
      font-style: normal;
    }

    font-size: 3.6rem;
    letter-spacing: 0.97px;
  }
`;

export const SecondaryHeading = styled.h2`
  font-weight: 700;
  font-size: 3.4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    font-weight: 700;
    font-size: 3.9rem;
  }
`;

export const Video = styled.div`
  position: absolute;
  transition: 0.3s ease-in-out;
  transition-property: width, left, color;
  top: 0;
  right: 0;
  z-index: -1;
  font-size: 6.3rem;
  font-weight: 900;
  display: flex;
  align-items: flex-start;
  width: 100vw;
  height: 38vw;
  min-height: 468px;
  left: 0px;
  color: rgba(0, 0, 0, 0.1);
  overflow: hidden;

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
    position: relative;
    left: -2px;
    max-width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 77vw;
    left: 172px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    left: 268px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    left: 295px;
    min-height: 700px;

    video {
      width: 100%;
      height: auto;
    }
  }
`;

export const IntroFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 156px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 115px;
    flex-direction: row;
  }
`;

export const IntroFooterImage = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 50vw;
  }
`;

export const IntroFooterActions = styled.div`
  width: 276px;
  margin: 0 auto;
  margin-top: 64px;

  button {
    margin-bottom: 28px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 100px;
    margin-left: 40px;
    /* margin: 0; */

    button {
      margin-bottom: 28px;
      width: 276px;
    }
  }
`;

export const SubHeading1 = styled.h2`
  font-size: 4rem;
  font-weight: 300;
  text-align: center;

  em {
    font-style: normal;
    border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
  }
`;

export const Section = styled.section`
  transition: 0.3s ease-in-out;
  transition-property: margin, padding;
  padding: 110px;
  margin: 0 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0 35px;
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

  ${SubHeading1} {
    width: 100%;
    margin: 0 auto;
    font-size: 3.2rem;
    /* font-size: 2.8rem; */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    ${SubHeading1} {
      width: 90%;
      font-size: 3.6rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largest}) {
    ${SubHeading1} {
      font-size: 4rem;
    }
  }
`;

export const TransparentLogoHolder = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 98px;
  left: -28px;

  svg {
    transform: rotate(-90deg);
  }
`;

export const HighlightsSection = styled(Section)`
  padding: 58px 32px 117px;
  position: relative;
  display: flex;

  ${SubHeading1} {
    white-space: nowrap;
    width: 560px;
    font-size: 5rem;
    margin-left: 0;

    svg {
      position: relative;
      width: 100px;
      height: 100px;
      left: 10px;
      top: 66px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    padding-left: 110px;
    padding-right: 110px;
  }
`;

export const HighlightBox = styled.div`
  width: 80vw;
  margin: 0 auto;
  height: 610px;

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    width: 60vw;
  }
`;

export const Circle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ highlighted, theme }) =>
    highlighted ? theme.colors.yellow : theme.colors.grayLight};
`;

export const List = styled.ul`
  margin-bottom: 63px;

  li {
    padding: 8px 0;
    font-size: 2.2rem;
    font-weight: 300;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

export const ListHolder = styled.div`
  width: 260px;
`;

export const Circles = styled.div`
  margin-top: 70px;
  margin-left: 90px;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(7, 96px);

  ${Circle} {
    margin: 0 18px;

    ${ListHolder} {
      position: relative;
      top: 85px;
    }
  }
`;

export const Highlights = styled.div`
  margin-left: auto;
`;

export const TimelineWrapper = styled.div`
  margin: 60px 0 35px;
`;

export const ProductsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.black};
  padding-left: 32px;
  padding-right: 32px;

  ${SubHeading1} {
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 87px;

    svg {
      position: relative;
      width: 3.5rem;
      top: -16px;
      left: -5px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-left: inherit;
    padding-right: inherit;
  }
`;

export const ProductsFooter = styled.div`
  position: relative;
  display: flex;
  margin-top: 64px;
  justify-content: center;
`;

export const ProductsFloatingButton = styled.button`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  border: 0 none;
  background-color: ${({ theme }) => theme.colors.grayDark};
  height: 64px;
  position: absolute;
  padding: 0 24px;
  right: -32px;
  top: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-family: 'Roboto' sans-serif;
  font-weight: 300;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.01);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    right: 0;
  }
`;

export const ExperienceSection = styled(Section)`
  padding-bottom: 75px;
  padding-left: 0;
  padding-right: 0;

  ${SubHeading1} {
    font-size: 8.5rem;
    letter-spacing: 0.16rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    ${SubHeading1} {
      font-size: 9.5rem;
      letter-spacing: 0.16rem;
    }
  }
`;

export const ExperienceContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 98px 0 30px;
`;

export const ExperienceFooter = styled.div`
  position: relative;
  padding: 0 0 60px 0;
  width: 410px;
  margin: 0 auto;
  margin-top: 25px;

  img {
    width: 100%;
    min-width: 240px;
    height: auto;
    max-width: 200px;
  }

  svg {
    position: absolute;
    right: -175px;
    bottom: -21px;
    width: 163px;
  }
`;

export const BubbleContent = styled.div`
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 300;
`;
