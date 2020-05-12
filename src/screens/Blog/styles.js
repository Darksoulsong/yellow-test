/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container } from '@components';

export const Root = styled.div`
  position: relative;
`;

export const ContainerWithPadding = styled.div`
  padding: 0 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => `0 ${theme.spaces.hg}`};
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

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
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
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogTopContainer = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: ${({ theme }) => `${theme.spaces.lg} 0`};
  }
`;

export const BlogCol = styled(Column)`
  width: 100%;
  display: flex;
  align-items: center;
  * {
    text-align: center;
  }
  margin-top: ${({ theme }) => theme.spaces.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 33.33%;
    align-items: flex-start;
    * {
      text-align: left;
    }
  }
`;

export const BlogColImage = styled(BlogCol)`
  align-items: flex-end;
  svg {
    width: 7.5% !important;
    position: absolute;
    top: -25px;
    right: -15px;
  }
  margin-top: ${({ theme }) => theme.spaces.md};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.spaces.sm};
  }
`;

export const BlogLogo = styled(Column)`
  width: 100%;
  display: flex;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: fit-content;
    justify-content: flex-start;
  }
`;

export const CardsContainer = styled(Container)`
  flex-wrap: wrap;
  flex-direction: row;
  div {
    margin-top: ${({ theme }) => theme.spaces.sm};
  }
`;

export const FilterContainer = styled(Container)`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.spaces.md};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 0px;
  }
`;

export const SuscribeSection = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => `${theme.spaces.lg} 0 ${theme.spaces.md} 0`};
`;

export const Underline = styled.span`
  box-shadow: ${({ theme }) =>
    `inset 0 0px 0 white, inset 0 -5px 0 ${theme.colors.yellow}`};
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
