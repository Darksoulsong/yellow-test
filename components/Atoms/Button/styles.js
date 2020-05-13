import styled, { css } from 'styled-components';

const unstyled = css`
  height: auto;
  width: auto;
  background: transparent;
  border: 0 none;
  cursor: pointer;
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

const hoverStyles = css`
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05) !important;
  }

  &:active {
    transform: scale(1.01) !important;
  }
`;

const main = css`
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

  ${hoverStyles}
`;

const tiny = css`
  height: 32px;
  padding: 0 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;

  ${({ theme, variant }) => getButtonVariant(variant, theme.colors)}

  ${hoverStyles}
`;

const getButtonVersion = version => {
  switch (version) {
    case 'unstyled':
      return unstyled;
    case 'tiny':
      return tiny;
    default:
      return main;
  }
};

export const Root = styled.button`
  cursor: pointer;

  ${({ version }) => getButtonVersion(version)}
`;
