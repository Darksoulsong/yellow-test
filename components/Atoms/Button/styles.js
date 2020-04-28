import styled, { css } from 'styled-components';

const unstyled = css`
  height: auto;
  width: auto;
  background: transparent;
  border: 0 none;
`;

const main = css`
  transition: transform 0.1s ease-in-out;
  height: 72px;
  padding: 0 40px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
  border: 0 none;
  background: ${({ theme }) => theme.colors.yellow};
  text-indent: -0.1rem;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  border-radius: 16px;
  transform: scale(1);

  &:hover {
    transform: scale(1.05) !important;
  }

  &:active {
    transform: scale(1.01) !important;
  }
`;

/**
 * @param {string} variant
 */
const getVariant = variant => {
  switch (variant) {
    case 'unstyled':
      return unstyled;
    default:
      return main;
  }
};

export const Root = styled.button`
  cursor: pointer;
  ${({ variant }) => getVariant(variant)}
`;
