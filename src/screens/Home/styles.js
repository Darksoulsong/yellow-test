import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
`;

export const Intro = styled.section`
  padding: 0 128px;
  position: relative;
  margin-bottom: 126px;
  overflow: hidden;
`;

export const IntroHolder = styled.div`
  width: 465px;
  padding-top: 100px;
`;

export const MainHeading = styled.h1`
  em {
    font-size: 9rem;
    font-style: normal;
    font-weight: 700;
    font-variant: bold;
  }

  font-size: 3.9rem;
  font-weight: 300;
  letter-spacing: 0.97px;
`;

export const SecondaryHeading = styled.h2`
  font-weight: 700;
  font-size: 3.9rem;
`;

export const Video = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.grayLighter};
  font-size: 6.3rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77vw;
  height: 38vw;
  min-height: 700px;
  /* max-width: 955px; */
  left: 441px;

  /* max-width: 800px;
  max-height: 600px;
  min-width: 790px;
  min-height: 590px; */
`;

export const IntroFooter = styled.div`
  display: flex;
  margin-top: 156px;
`;

export const IntroFooterImage = styled.div`
  width: 80vw;
`;

export const IntroFooterActions = styled.div`
  padding-top: 100px;
  padding-left: 40px;

  button {
    margin-bottom: 28px;
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
  padding: 110px;
  margin: 0 35px;
`;

export const Section1 = styled(Section)`
  background-color: ${({ theme }) => theme.colors.grayLighter};

  ${SubHeading1} {
    width: 80%;
    margin: 0 auto;
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
  padding: 58px 110px 117px;
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
`;

export const HighlightBox = styled.div`
  width: 60vw;
  margin: 0 auto;
  height: 610px;
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
`;

export const ProductsFooter = styled.div`
  position: relative;
  display: flex;
  margin-top: 64px;
  justify-content: center;
`;

export const ProductsFloatingButton = styled.button`
  cursor: pointer;
  border: 0 none;
  background-color: ${({ theme }) => theme.colors.grayDark};
  height: 64px;
  position: absolute;
  padding: 0 24px;
  right: -110px;
  top: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-family: 'Roboto' sans-serif;
  font-weight: 300;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

export const ExperienceSection = styled(Section)`
  padding-bottom: 75px;

  ${SubHeading1} {
    font-size: 9.5rem;
    letter-spacing: 0.16rem;
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
  font-size: 2rem;
  font-weight: 300;

  a {
    color: ${({ theme }) => theme.colors.black};
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

  ${Section1} {
    display: flex;
    margin-top: 0;
    padding-top: 40px;
    justify-content: space-between;
    margin-left: 0;
    margin-right: 0;
  }
`;
