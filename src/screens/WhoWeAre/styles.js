/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Root = styled.div`
  position: relative;
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

export const Name = styled.li`
  color: ${({ bold, theme }) =>
    bold ? theme.colors.yellow : theme.colors.gray};
  letter-spacing: 3.14px;
  line-height: 22px;
  font-size: 1.25rem;
  user-select: none;
  font-family: 'Monosten', 'Roboto', 'sans-serif';
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 1.5rem;
  }
`;

export const NameListColumn = styled.ul`
  width: 25%;
  text-align: center;
  padding: ${({ theme }) => theme.spaces.sm};
  &:last-child {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    text-align: left;
    width: 33.33%;
    &:nth-child(3) {
      display: block;
      width: fit-content;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 25%;
    &:nth-child(3) {
      display: block;
      width: 25%;
    }
    &:nth-child(4) {
      display: block;
      width: fit-content;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 20%;
    &:nth-child(3),
    :nth-child(4) {
      width: 20%;
    }
    &:nth-child(5) {
      width: fit-content;
      display: block;
    }
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
      width: fit-content;
    }
  }
`;

export const NameListSection = styled.div`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => `${theme.spaces.sm} 0px`};
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  @media (min-width: ${({ theme }) => '1050px'}) {
    padding: ${({ theme }) => `${theme.spaces.sm} 125px`};
  }
`;

export const WhySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => `${theme.spaces.md} ${theme.spaces.md}`};
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => `${theme.spaces.sm} 12.5%`};
  }
`;

export const WhySectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 1.65px;

  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    text-align: left;
    font-size: 6rem;
  }
`;

export const WhySectionText = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.8px;

  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

export const WhySectionColumn = styled.div`
  width: 100%;
  display: ${({ desktopOnly }) => (desktopOnly ? 'none' : 'block')};
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: ${({ width = 'fit-content' }) => width};
    display: ${({ mobileOnly }) => (mobileOnly ? 'none' : 'block')};
  }
`;

export const HowSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${({ theme }) => `${theme.spaces.lg} ${theme.spaces.xsm}`};
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: ${({ theme }) => theme.spaces.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => `${theme.spaces.xxlg} ${theme.spaces.md}`};
  }
`;

export const HowSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.spaces.md};
  }
`;

export const PurposeSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('./images/purpose-image.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 65vh;
  max-height: 450px;
  min-height: 300px;
  margin: ${({ theme }) => `${theme.spaces.lg} ${theme.spaces.sm}`};
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: ${({ theme }) => `${theme.spaces.lg} ${theme.spaces.md}`};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => `${theme.spaces.xxlg} ${theme.spaces.md}`};
  }
`;

export const PurposeSectionTitle = styled.span`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 8vw;
  font-weight: 300;
  display: grid;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 4vw;
    display: inline-block;
  }
`;

export const PurposeColumn = styled.div`
  display: flex;
  justify-content: ${({ align = 'center' }) => align};
  width: 100%;
  svg {
    width: auto;
    height: 20vw;
    max-height: 150px;
    position: absolute;
    bottom: 20px;
    right: 10px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  display: inline-block;
  text-align: center;
  margin-bottom: ${({ theme, margin }) => margin || theme.spaces.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 4.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 6rem;
  }
`;

export const CasesSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spaces.lg} 0`};
  background-color: ${({ theme }) => theme.colors.grayLighter};
`;

export const HashtagSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spaces.sm} 0px`};
  overflow-x: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => `${theme.spaces.xlg} 0px`};
  }
`;

export const HashtagIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ specialMargin = '0' }) => specialMargin};
  @media (min-width: ${({ theme }) => '700px'}) {
    margin: 0px;
  }
`;

export const HashtagIcon = styled.div`
  margin-top: ${({ marginTop = 0 }) => marginTop};
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom};
  margin-left: ${({ marginLeft = '2vw' }) => marginLeft};
  svg {
    width: ${({ width = '5vw' }) => width};
    min-width: 20px;
    transition: 0.25s all ease-in;
    &:hover {
      transition: 0.25s all ease-in;
      transform: scale(1.25);
    }
  }
`;

const handleTypeSVG = type => {
  switch (type) {
    case 'lines-circle-icon':
      return css`
        &[data-aos='animate-lines-circle'] {
          path {
            transition: stroke-dashoffset 1s ease-in-out;
            stroke: ${({ theme }) => theme.colors.black};
            stroke-dasharray: 1640;
            stroke-dashoffset: 1640;
          }
          text,
          ellipse {
            opacity: 0;
            transition: all 1s ease-in-out;
          }

          &.aos-animate {
            path {
              stroke-dashoffset: 950;
            }
            text,
            ellipse {
              transition: all 0.5s ease-in-out;
              opacity: 1;
              transition-delay: 0.5s;
            }
          }
        }
        svg {
          display: block;
          margin: auto;
          text-align: center;
          width: 100%;
          height: auto;
          @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
            width: 65vw;
          }
        }
      `;
  }
};

export const SVGManipulator = styled.span`
  ${({ type }) => handleTypeSVG(type)}
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

export const GrayedSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.grayLighter};

  ${SubHeading1} {
    width: 80%;
    margin: 0 auto;
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

export const ExperienceSection = styled(Section)`
  padding-bottom: 75px;
  padding-left: 0;
  padding-right: 0;

  ${SubHeading1} {
    font-size: 3.3rem;
    letter-spacing: 0.043rem;
    margin-bottom: 37px;
  }

  .slider-control-left {
    left: -75px;
  }

  .slider-control-right {
    right: -75px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${SubHeading1} {
      font-size: 4.9rem;
      letter-spacing: 0.16rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
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
  padding: ${({ theme }) => `${theme.spaces.md} 0`};
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
  font-size: 1.4rem;
  line-height: 1.75rem;
  font-weight: 300;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.8rem;
    line-height: 2.25rem;
  }
`;
