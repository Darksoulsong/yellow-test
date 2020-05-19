import styled from 'styled-components';
import { Text } from '../Fonts';

export const CardContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  width: ${({ width = '50%' }) => width};
  padding: ${({ padding }) => padding};
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: ${({ mdWidth = '33.33%' }) => mdWidth};
  }
  &:hover {
    main {
      display: block;
    }
  }
`;

export const CardInteractions = styled.main`
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.black};
  z-index: 1;
  opacity: 0.5;
  svg {
    width: 25px;
    height: 25px;
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
  height: 42px;
  padding: ${({ theme }) => theme.spaces.xsm};
  padding-bottom: 0px;
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

export const Interactions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const InteractionContainer = styled.li`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.75rem;
  font-weight: 700;
  padding: ${({ theme }) => theme.spaces.sm};
  align-items: center;
  svg {
    margin-right: ${({ theme }) => theme.spaces.sm};
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
