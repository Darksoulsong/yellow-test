import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
`;

export const BubbleElement = styled.div`
  position: relative;
  width: 446px;
  height: 468px;
  background-color: ${({ theme }) => theme.colors.yellowDark};
  /* color: ${({ theme }) => theme.colors.black}; */
  /* font-size: 1.4rem; */
  /* line-height: 1.8rem; */
  /* font-weight: 100; */

  padding: 59px 43px 94px;
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
