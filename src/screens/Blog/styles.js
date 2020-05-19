/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container, Text } from '@components';

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
  width: 160px;
  height: 160px;
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
  padding: ${({ theme }) =>
    `${theme.spaces.xlg} ${theme.spaces.sm} ${theme.spaces.lg} ${theme.spaces.sm}`};
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
    margin-top: 0;
    width: 30%;
    align-items: flex-start;
    * {
      text-align: left;
    }
  }
`;

export const CustomText = styled(Text)`
  margin: ${({ theme }) => `${theme.spaces.sm} 0`};
  font-size: 2rem;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    text-align: left;
  }
`;

export const ColImgSVGContainer = styled.div`
  svg {
    width: 7.5% !important;
    position: absolute;
    top: -7.5%;
    right: 12%;
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      width: 10% !important;
      right: 5%;
    }
  }
`;

export const BlogColImage = styled(BlogCol)`
  align-items: center;
  position: relative;
  width: 100%;
  margin: ${({ theme }) => theme.spaces.sm};
  margin-top: ${({ theme }) => theme.spaces.md};
  p {
    text-align: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-right: ${({ theme }) => theme.spaces.sm};
    margin: 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => 0};
  }
`;

export const BlogLogo = styled(Column)`
  width: 100%;
  display: flex;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 15%;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const CardsContainer = styled(Container)`
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  margin-top: ${({ theme }) => theme.spaces.sm};
`;

export const FilterContainer = styled(Container)`
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 0px;
  }
`;

export const Underline = styled.span`
  box-shadow: ${({ theme }) =>
    `inset 0 0px 0 white, inset 0 -5px 0 ${theme.colors.yellow}`};
`;
