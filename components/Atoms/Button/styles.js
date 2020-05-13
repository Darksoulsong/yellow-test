import styled, { css } from 'styled-components';

const unstyled = css`
  height: auto;
  width: auto;
  background: transparent;
  border: 0 none;
`;

const getButtonVariant = (variant, colors) => {
  switch (variant) {
    case 'primary':
      return `
        color: ${colors.black};
        background-color: ${colors.yellow};
      `;
    default:
      return `
        color: ${colors.white};
        background-color: ${colors.gray};
      `;
  }
};

const main = css`
  transition: transform 0.1s ease-in-out;
  height: ${({ height = '78px' }) => height};
  padding: ${({ padding = '0 46px' }) => padding};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize = '2.2rem' }) => fontSize};
  border: 0 none;
  background: ${({ theme }) => theme.colors.yellow};
  text-indent: -0.1rem;
  font-family: Roboto, sans-serif;
  font-weight: ${({ fontWeight = '700' }) => fontWeight};
  border-radius: 18px;
  transform: scale(1);
  white-space: nowrap;
  letter-spacing: 0.063rem;

  ${({ theme, variant }) => getButtonVariant(variant, theme.colors)}

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
