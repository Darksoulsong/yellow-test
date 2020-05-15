import styled from 'styled-components';
import { Text } from '../Fonts';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width = '50%' }) => width};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: ${({ mdWidth = '33.33%' }) => mdWidth};
  }
`;

export const CardSquare = styled.section`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;

export const CustomText = styled(Text)`
  font-size: 1.65rem;
  padding-top: ${({ theme }) => theme.spaces.xsm};
  margin: ${({ theme }) => `${theme.spaces.xsm} 0`};
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;
