import styled, { css } from 'styled-components';

export const SpeechBubbleRoot = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: ${({ align }) => align};
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
  background-color: ${({ theme }) => theme.colors.yellowDark};
  border-radius: 16px;
  width: 250px;
  height: 260px;
  padding: 32px 28px 40px;
  margin: 0 auto;

  &:before {
    position: absolute;
    content: '';
    bottom: -7px;
    width: 0;
    height: 0;
    border-left: 32px solid transparent;
    border-right: 32px solid transparent;
    border-bottom: 32px solid ${({ theme }) => theme.colors.yellowDark};
    ${({ align }) => handleBubbleAlignment(align)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 59px 43px 52px;
    width: 446px;
    height: 468px;
  }
`;

export const Dot = styled.span`
  display: flex;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.grayDark : theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 14px;
    height: 14px;
  }
`;

export const Dots = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
  bottom: 15px;
  right: 25px;

  ${Dot} {
    margin: 0 2px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    bottom: 25px;
    right: 36px;

    ${Dot} {
      margin: 0 3px;
    }
  }
`;

export const Stars = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  bottom: 40px;
  z-index: 2;

  svg {
    width: 2vw;
    min-width: 20px;
  }
`;
