import styled from 'styled-components';

export const HamburgerButtonRoot = styled.span`
  transition: transform 0.3s ease-in-out;
  display: inline-block;
  width: 41px;
  height: 28px;
  position: relative;
  padding: 4px 0;
  transform: scale(1);

  ${({ open }) => open && `transform: scale(0.6);`}
`;

export const HamburgerButtonIcon = styled.span`
  top: 8px;
  width: ${({ open = false }) => (open ? '0' : '41px')};
  height: 3px;
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
    width: 41px;
    height: 3px;
    background-color: ${({ invertColor, theme }) =>
      invertColor ? theme.colors.grayDarker : theme.colors.white};
    position: absolute;
    right: 0;
    left: 0;
    transition: 0.2s all ease-in-out;
    bottom: -12px;
  }

  &:before {
    top: -12px;

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
