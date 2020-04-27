import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
`;

export const BubbleElement = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.yellowDark};
  /* color: ${({ theme }) => theme.colors.black}; */
  /* font-size: 1.4rem; */
  /* line-height: 1.8rem; */
  /* font-weight: 100; */

  padding: 36px;
  border-radius: 16px;

  &:before {
    position: absolute;
    content: '';
    bottom: -7px;
    left: 16px;
    width: 0;
    height: 0;
    border-left: 32px solid transparent;
    border-right: 32px solid transparent;
    /* border-radius: 32px; */
    border-bottom: 32px solid ${({ theme }) => theme.colors.yellowDark};
    transform: rotate(90deg);
  }
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Dots = styled.div`
  position: absolute;
  display: flex;
  width: 50px;
  bottom: 16px;
  right: 20px;
  z-index: 2;

  ${Dot} {
    margin: 0 4px;
  }
`;
