import styled from 'styled-components';

export const Root = styled.div`
  /* padding-bottom: 60px; */
`;

export const Intro = styled.section`
  padding: 0 128px;
  position: relative;
`;

export const IntroHolder = styled.div`
  width: 450px;
  padding-top: 60px;
`;

export const MainHeading = styled.h1`
  em {
    font-size: 7rem;
    font-style: normal;
    font-weight: 700;
    font-variant: bold;
  }

  font-size: 3.5rem;
  font-weight: 300;
`;

export const SecondaryHeading = styled.h2`
  font-weight: 700;
  font-size: 3rem;
`;

export const Video = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 70vw;
  height: 40vw;
  background-color: ${({ theme }) => theme.colors.grayLight};
  font-size: 6vw;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 800px;
  max-height: 600px;
  min-width: 790px;
  min-height: 590px;
`;

export const IntroFooter = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const IntroFooterImage = styled.div`
  width: 80vw;
`;

export const IntroFooterActions = styled.div`
  padding-top: 60px;
  padding-left: 32px;

  button {
    width: 250px;
    margin-bottom: 28px;
  }
`;

export const SubHeading1 = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  text-align: center;

  em {
    font-style: normal;
    border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
  }
`;

export const Section = styled.section`
  padding: 60px;
  margin: 60px;
`;

export const Section1 = styled(Section)`
  background-color: ${({ theme }) => theme.colors.grayLight};

  ${SubHeading1} {
    width: 80%;
    margin: 0 auto;
  }
`;

export const TransparentLogoHolder = styled.div`
  display: flex;
  align-items: flex-end;
  svg {
    transform: rotate(-90deg);
  }
`;

export const HighlightsSection = styled(Section)`
  position: relative;
  display: flex;

  ${SubHeading1} {
    white-space: nowrap;
    width: 560px;
    font-size: 4.5rem;
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
  margin-bottom: 60px;

  li {
    padding: 8px 0;
    font-size: 1.8rem;
    font-weight: 300;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

export const ListHolder = styled.div`
  width: 220px;
`;

export const Circles = styled.div`
  margin-top: 70px;
  margin-left: 40px;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(7, 96px);

  ${Circle} {
    margin: 0 16px;

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
  margin: 60px 0;
`;

export const ProductsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.black};

  ${SubHeading1} {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 64px;

    svg {
      width: 2.5rem;
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
  right: -60px;
  top: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-family: 'Roboto' sans-serif;
  font-weight: 300;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

export const ExperienceSection = styled.div`
  ${SubHeading1} {
    font-size: 10rem;
  }
`;

export const ExperienceContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0 30px;
`;

export const ExperienceFooter = styled.div`
  position: relative;
  padding: 0 0 60px 0;
  width: 300px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    max-width: 200px;
  }

  svg {
    position: absolute;
    right: -150px;
    bottom: -60px;
    width: 150px;
  }
`;

export const BubbleContent = styled.div`
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 1.8rem;
  line-height: 2.2rem;
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
    width: 24px !important;
    height: auto;
  }
`;

export const FooterItem = styled.div`
  margin-bottom: 16px;
  font-size: 1.6rem;
  font-weight: 300;

  a {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Footer = styled.div`
  ${Section} {
    padding-top: 0;
    padding-bottom: 16px;
    margin-bottom: 0;
  }

  ${Section1} {
    display: flex;
    margin-top: 0;
    padding-top: 60px;
    justify-content: space-between;
    margin-left: 0;
    margin-right: 0;
  }
`;
