import styled from 'styled-components';
import { SmallText } from '../Fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  cursor: pointer;
  user-select: none;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const Text = styled(SmallText)`
  font-weight: 700;
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
`;
