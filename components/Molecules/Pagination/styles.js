import styled, { css } from 'styled-components';

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  margin: ${({ theme }) => `${theme.spaces.lgh} 0`};
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
  svg {
    height: 20px;
    width: 20px;
    g {
      stroke-width: 3;
    }
  }
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(180deg);
    `}
`;
