import styled from 'styled-components';
import { Text } from '../Fonts';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width = '33.33%' }) => width};
  height: auto;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const CustomText = styled(Text)`
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
