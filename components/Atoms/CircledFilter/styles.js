import styled from 'styled-components';
import { SmallText } from '../Fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  cursor: pointer;
  user-select: none;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 60px;
    height: 60px;
  }
`;

export const Text = styled(SmallText)`
  font-weight: 700;
  font-size: 1.15rem;
  text-align: center;
  margin: ${({ theme }) => `${theme.spaces.xsm} 0 0 0`};
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.25rem;
  }
`;
