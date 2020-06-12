/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container, MediumTitle, Text } from '@components';

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

export const CustomTitle = styled(MediumTitle)`
  font-size: 1.5rem;
  user-select: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 2.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 3rem;
  }
`;

export const LinkText = styled.p`
  user-select: none;
  font-size: 1.25rem;
  font-weight: bold;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.5rem;
  }
`;

export const CustomText = styled(Text)`
  font-size: 1.35rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 1.75rem;
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
  padding: ${({ theme }) => theme.spaces.sm};
  padding-top: ${({ theme }) => theme.spaces.lg};
  justify-content: flex-start;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => `${theme.spaces.xlg} 0 ${theme.spaces.sm} 0`};
  }
`;

export const BlogCol = styled(Column)`
  width: 70%;
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
  padding: ${({ theme }) => theme.spaces.sm};
  svg {
    position: absolute;
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0;
    svg {
      display: block;
      width: 10% !important;
      right: -10%;
      top: -8%;
    }
  }
`;

export const BlogLogo = styled(Column)`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BlogBack = styled(Column)`
  width: 100%;
  align-items: flex-end;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 500;
  padding-bottom: ${({ theme }) => theme.spaces.sm};
  cursor: pointer;
  user-select: none;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => `${theme.spaces.md} 0 0 0`};
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
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: ${({ theme }) => theme.spaces.xsm};

    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
      font-size: 2.5rem;
    }
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
