import styled from 'styled-components';

export const SpeechBubbleRoot = styled.div`
  position: relative;
`;

export const BubbleElement = styled.div`
  position: relative;
  width: 446px;
  height: 468px;
  background-color: ${({ theme }) => theme.colors.yellowDark};
  padding: 59px 43px 94px;
  border-radius: 28px;

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
  display: flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.grayDark : theme.colors.white};
`;

export const Dots = styled.div`
  position: absolute;
  display: flex;
  bottom: 25px;
  right: 30px;
  z-index: 2;

  ${Dot} {
    margin: 0 3px;
  }
`;
