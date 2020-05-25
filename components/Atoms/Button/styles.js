import styled, { css } from 'styled-components';

const unstyled = css`
  height: auto;
  width: ${({ block, width = 'auto' }) => (block ? '100%' : width)};
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

    case 'disabled':
      return `
        color: ${colors.grayDark};
        background-color: ${colors.grayLight};
      `;

    case 'black':
      return `
        color: ${colors.white};
        background-color: ${colors.black};
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

// const main = css`
//   color: ${({ theme }) => theme.colors.black};
//   font-size: ${({ fontSize = '2rem' }) => fontSize};
//   border: 0 none;
//   background: ${({ theme }) => theme.colors.yellow};
//   text-indent: -0.1rem;
//   font-family: Roboto, sans-serif;
//   font-weight: ${({ fontWeight = '700' }) => fontWeight};
//   border-radius: 16px;
//   transform: scale(1);
//   white-space: nowrap;

//   text-transform: ${({ textTransform = 'uppercase' }) => textTransform};

//   letter-spacing: 0.21rem;
//   height: ${({ height = '78px' }) => height};
//   padding: ${({ padding = '0 35px' }) => padding};

//   ${({ theme, variant }) => getButtonVariant(variant, theme.colors)}

//   ${({ disabled }) =>
//     !disabled &&
//     `
//     cursor: pointer;
//     ${hoverStyles};
//   `}

//   @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {

//   }
// `;

const main = css`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize = '2rem' }) => fontSize};
  border: 0 none;
  background: ${({ theme }) => theme.colors.yellow};
  text-indent: -0.1rem;
  font-family: Roboto, sans-serif;
  font-weight: ${({ fontWeight = '700' }) => fontWeight};
  border-radius: 12px;
  transform: scale(1);
  white-space: nowrap;
  
  text-transform: ${({ textTransform = 'uppercase' }) => textTransform};

  letter-spacing: 0.21rem;
  height: ${({ height = '78px' }) => height};
  padding: ${({ padding = '0 35px' }) => padding};

  ${({ theme, variant }) => getButtonVariant(variant, theme.colors)}

  ${({ disabled }) =>
    !disabled &&
    `
    cursor: pointer;
    ${hoverStyles};
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {    
    
    border-radius: 16px;
  }
`;

const tiny = css`
  cursor: pointer;
  height: 32px;
  padding: 0 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  ${({ theme, variant }) => getButtonVariant(variant, theme.colors)}
  ${hoverStyles}
`;

const rounded = css`
  transition: 0.3s ease-in-out;
  transition-property: color, background-color;
  height: 54px;
  padding: 0 42px;
  border-radius: 27px;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  letter-spacing: 0.045rem;

  ${({ theme, variant }) => getButtonVariant(variant, theme.colors)}

  ${({ disabled }) =>
    !disabled &&
    `
    cursor: pointer;
    ${hoverStyles};
  `}
`;

const getButtonVersion = version => {
  switch (version) {
    case 'unstyled':
      return unstyled;
    case 'tiny':
      return tiny;
    case 'rounded':
      return rounded;
    default:
      return main;
  }
};

export const Root = styled.button`
  ${({ version }) => getButtonVersion(version)}
`;
