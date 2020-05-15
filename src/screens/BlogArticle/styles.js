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
    padding: ${({ theme }) => `${theme.spaces.xlg} 0 ${theme.spaces.lg} 0`};
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
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    padding: ${({ theme }) => `${theme.spaces.xsm} 1%`};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    div:nth-child(1) {
      padding: 5px 1% 5px 0;
    }
    div:nth-child(2) {
      padding: 5px;
    }
    div:nth-child(3) {
      padding: 5px 0 5px 1%;
    }
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: ${({ theme }) => `${theme.spaces.xlg} 0`};
  justify-content: center;
`;

export const ContentContainer = styled.div`
  margin: ${({ theme }) => `${theme.spaces.md} 0`};
  padding: ${({ theme }) => ` 0 ${theme.spaces.sm}`};
  * {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    text-align: justify;
    line-height: 1.5;
    font-size: 1.5rem;
  }
  h1 {
    text-align: left;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: ${({ theme }) => theme.spaces.xsm};
  }
  h2 {
    text-align: left;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spaces.xsm};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => 0};
  }
`;
