/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container, Text } from '@components';

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

export const CustomText = styled(Text)`
  margin: ${({ theme }) => `${theme.spaces.sm} 0`};
  font-size: 2rem;
  text-align: left;
`;

export const ColImgSVGContainer = styled.div`
  svg {
    width: 7.5% !important;
    position: absolute;
    top: -7.5%;
    right: 12%;
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      width: 10% !important;
      right: 0%;
    }
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 160px;
    height: 160px;
  }
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
  justify-content: flex-start;
  padding: ${({ theme }) =>
    `${theme.spaces.md} ${theme.spaces.sm} ${theme.spaces.sm} ${theme.spaces.sm}`};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.spaces.xlg} 1% ${theme.spaces.lg} 1%`};
  }
`;

export const BlogColText = styled(Column)`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
    margin-top: 0;
    width: 27%;
    align-items: flex-start;
    * {
      text-align: left;
    }
  }
`;

export const BlogColResponsive = styled(Column)`
  width: ${({ width = 'fit-contet' }) => width || '100%'};
  display: flex;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spaces.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const BlogColImage = styled.div`
  display: none;
  align-items: center;
  position: relative;
  p {
    text-align: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    /* padding-right: ${({ theme }) => theme.spaces.sm}; */
    margin: 0;
    display: flex;
    width: 33.33%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => 0};
  }
`;

export const BlogLogo = styled(Column)`
  width: fit-content;
  margin: ${({ theme }) => `0 ${theme.spaces.sm} 0 0`};
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: unset;
    width: fit-content;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const CardsContainer = styled(Container)`
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 10px;
  margin-top: ${({ theme }) => theme.spaces.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0px;
  }
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
