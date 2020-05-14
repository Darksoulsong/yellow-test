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

export const CustomField = styled.input`
  height: 45px;
  background: ${({ theme }) => theme.colors.grayLight};
  border: 0 none;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 300;
`;

export const SuscribeHolder = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spaces.md};
  * {
    height: 45px;
    border-radius: 0;
  }
  input {
    max-width: 200px;
    padding: ${({ theme }) => theme.spaces.sm};
    border-top-left-radius: 9.5px;
    border-bottom-left-radius: 9.5px;
    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
      max-width: 300px;
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.black};
    border-top-right-radius: 9.5px;
    border-bottom-right-radius: 9.5px;
    font-weight: 300;
    padding: ${({ theme }) => theme.spaces.sm};
    font-size: 1.75rem;
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

export const SuscribeSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spaces.sm} 0 ${theme.spaces.md} 0`};
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
