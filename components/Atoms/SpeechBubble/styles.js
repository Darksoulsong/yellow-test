import styled, { css } from 'styled-components';

export const SpeechBubbleRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ align }) => align};
`;

const handleBubbleAlignment = align => {
  switch (align) {
    case 'flex-start':
      return css`
        left: 5%;
        transform: rotate(90deg);
      `;
    case 'center':
      return css`
        left: 43%;
        transform: rotate(65deg);
      `;
  }
};

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
    width: 0;
    height: 0;
    border-left: 32px solid transparent;
    border-right: 32px solid transparent;
    /* border-radius: 32px; */
    border-bottom: 32px solid ${({ theme }) => theme.colors.yellowDark};
    ${({ align }) => handleBubbleAlignment(align)};
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
  position: relative;
  display: flex;
  bottom: 25px;
  right: 30px;
  z-index: 2;

  ${Dot} {
    margin: 0 3px;
  }
`;

export const Stars = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  bottom: 25px;
  z-index: 2;

  ${Dot} {
    margin: 0 3px;
  }
`;
