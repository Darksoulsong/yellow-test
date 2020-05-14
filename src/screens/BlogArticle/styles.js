/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container } from '@components';

export const Root = styled.div`
  position: relative;
`;

export const ContainerWithPadding = styled.div`
  padding: 0 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => `0 ${theme.spaces.xhg}`};
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

export const Image = styled.img`
  width: 100%;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  svg {
    width: 50%;
    height: auto;
    z-index: 1;
    path {
      fill: black;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100px;
    height: 100px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogTopContainer = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spaces.sm};
  padding-top: ${({ theme }) => theme.spaces.lg};
  justify-content: flex-start;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => `${theme.spaces.lg} 0`};
  }
`;

export const BlogCol = styled(Column)`
  width: fit-content;
  display: flex;
  align-items: flex-start;
  margin: ${({ theme }) => `0 0 0 ${theme.spaces.sm}`};
  justify-content: center;
  * {
    text-align: left;
  }
`;

export const BlogColImage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.md};
  svg {
    position: absolute;
    width: 7.5% !important;
    top: -0.5%;
    right: 0%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0;
    svg {
      width: 10% !important;
      right: -7.5%;
      top: -10%;
    }
  }
`;

export const BlogLogo = styled(Column)`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardsContainer = styled(Container)`
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  div {
    margin-top: ${({ theme }) => theme.spaces.sm};
    padding: ${({ theme }) => `0 ${theme.spaces.sm}`};
  }
`;

export const InteractSection = styled.div``;

export const ContentContainer = styled.div`
  margin: ${({ theme }) => `${theme.spaces.md} 0`};
  padding: ${({ theme }) => ` 0 ${theme.spaces.sm}`};
  * {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    text-align: justify;
    line-height: 1.5;
  }
  h1,
  h2 {
    text-align: left;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: ${({ theme }) => theme.spaces.sm};
  }
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
