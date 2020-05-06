import styled from 'styled-components';

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
  line-height: 26px;
  font-size: 1.5rem;
  user-select: none;
`;

export const NameListColumn = styled.ul`
  width: 50%;
  padding: 15px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 33%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    text-align: left;
    width: 20%;
  }
  &:nth-child(4) {
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      width: 50%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 20%;
    }
  }
  &:nth-child(5) {
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      width: 50%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 20%;
    }
  }

  &:last-child {
    width: 100%;
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      width: 33%;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 20%;
    }
  }
`;

export const NameListSection = styled.div`
  display: flex;
  padding: 75px 0px;
  flex-wrap: wrap;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 75px 128px;
  }
`;

export const WhySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 15px 75px 15px;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0px 32px 75px 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    padding: 0px 128px 75px 128px;
  }
`;

export const WhySectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 1.65px;

  text-align: center;
  margin-bottom: 3rem;

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
    font-size: 3rem;
  }
`;

export const WhySectionColumn = styled.div`
  width: 100%;
  display: ${({ desktopOnly }) => (desktopOnly ? 'none' : 'block')};
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: ${({ width = 'fit-content' }) => width};
    display: block;
  }
`;

export const HowSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 32px 130px 32px;
  margin: 75px 0px;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0px 128px 130px 128px;
    margin: 75px 35px;
  }
`;

export const HowItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HowCircleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 0px;
`;

export const HowSectionText = styled.div`
  font-weight: 300;
  font-size: 2rem;
  margin-left: ${({ marginLeft = '0' }) => marginLeft};
  margin-top: 5%;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 4rem;
  }
`;

export const PurposeSection = styled.div`
  display: flex;
  justify-content: center;
  background-image: url('./images/purpose-image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;
  margin: 75px 0px;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 75px 35px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  display: inline-block;
  text-align: center;
  margin-bottom: 75px;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 5rem;
  }
`;

export const PurposeSectionTitle = styled.h2`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  font-weight: 300;
  display: inline-block;
  text-align: center;
  margin-top: 50px;
  position: absolute;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 5rem;
  }
`;

export const CasesSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grayLighter};
`;

export const HashtagSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 110px 0px;
`;

export const HashtagIcons = styled.div`
  display: flex;
  justify-content: center;
`;

export const HashtagIcon = styled.div`
  margin-top: ${({ marginTop = 0 }) => marginTop};
  margin-left: ${({ marginLeft = '2vw' }) => marginLeft};
  svg {
    width: 5vw;
  }
`;

export const Hashtag = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 2.19px;
  margin: 20px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 6rem;
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

export const FooterHeading = styled.h3`
  font-weight: 600;
`;

export const FooterBlock = styled.div`
  width: 30%;
`;

export const FooterBlockSocial = styled(FooterBlock)`
  flex: 1;
  text-align: center;

  svg {
    width: 29px !important;
    height: auto;
  }
`;

export const FooterItem = styled.div`
  margin-bottom: 28px;
  font-size: 1.6rem;
  font-weight: 300;

  svg path {
    transition: fill 0.3s ease-in-out;
  }

  a {
    transition: color 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.highlightColor};

      svg path {
        fill: ${({ theme }) => theme.colors.highlightColor};
      }
    }
  }
`;

export const Footer = styled.div`
  .footer-logo svg {
    width: 140px;
  }

  ${Section} {
    padding-top: 0;
    padding-bottom: 16px;
    margin: 0;
  }

  ${GrayedSection} {
    display: flex;
    margin-top: 0;
    padding-top: 40px;
    justify-content: space-between;
    margin-left: 0;
    margin-right: 0;
  }
`;
