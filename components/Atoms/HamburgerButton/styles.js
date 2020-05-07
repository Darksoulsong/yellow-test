import styled from 'styled-components';

export const HamburgerButtonRoot = styled.span`
  display: inline-block;
  width: 32px;
  height: 28px;
  position: relative;
  padding: 4px;
`;

export const HamburgerButtonIcon = styled.span`
  top: 8px;
  width: ${({ open = false }) => (open ? '0' : '24px')};
  height: 2px;
  background-color: ${({ invertColor, theme }) =>
    invertColor ? theme.colors.grayDarker : theme.colors.white};
  display: block;
  position: relative;
  transition: 0.2s all ease-in-out;

  ${({ open }) => open && `background-color: transparent;`}

  &:before,
  &:after {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${({ invertColor, theme }) =>
      invertColor ? theme.colors.grayDarker : theme.colors.white};
    position: absolute;
    right: 0;
    left: 0;
    transition: 0.2s all ease-in-out;
    bottom: -8px;
  }

  &:before {
    top: -8px;

    ${({ open }) =>
      open &&
      `
        transform: rotate(-45deg);
        top: 0;
      `}
  }

  &:after {
    ${({ open }) =>
      open &&
      `
        transform: rotate(45deg);
        top: 0;
      `}
  }
`;
