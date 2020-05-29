import styled, { css } from 'styled-components';

export const Logo = styled.div`
  padding-left: 24px;
  padding-right: 90px;
  padding-top: 8px;

  svg {
    width: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-left: 40px;

    svg {
      width: 75px;
    }
  }
`;

export const HeaderMain = styled.div`
  transition: 0.3s ease-in-out;
  transition-property: background-color, opacity;
  position: relative;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 83px;
  }
`;

export const HeaderDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  min-height: 360px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerDropdownBackground};
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    min-height: 319px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    min-height: 339px;
  }
`;

export const HeaderDropdownBlock = styled.div`
  transition: all 0.3s ease-in-out;
  padding: 48px 30px 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.white};
  a {
    color: ${({ theme }) => theme.colors.white};
  }
  flex: 1;
  background-color: ${({ theme }) => theme.colors.headerDropdownBackground};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.textColor};
    a {
      color: ${({ theme }) => theme.colors.textColor};
    }

    path {
      fill: ${({ theme }) => theme.colors.black};
    }
  }

  ${({ noHover }) =>
    noHover && `pointer-events: none; cursor: auto !important;`};

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    padding: 48px 60px 50px 60px;
  }
`;

export const HeaderHeading = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 32px;
`;

export const HeaderIconHolder = styled.div`
  display: flex;
  margin-bottom: 40px;

  > div {
    width: 100%;
  }

  svg {
    width: auto;
    height: 40px;
  }

  path {
    transition: fill 0.3s ease-in-out;
    fill: ${({ theme }) => theme.colors.white};
    stroke: transparent;
  }

  &.logo {
    svg {
      width: 61px;
    }
  }
  &.products {
    svg {
      width: 32px;
    }
  }

  &.create-account {
    svg {
      width: 42px;
      height: 42px;
    }
  }

  &.culture {
    svg {
      width: 36px;
      height: 38px;
    }
  }

  &.blog {
    svg {
      width: 43px;
      height: 43px;
    }
  }

  &.team {
    svg {
      width: 51px;
      height: 44px;
    }
  }

  &.open-positions {
    svg {
      width: 39px;
    }
  }

  &.simulate {
    svg {
      width: 36px;
    }
  }

  &.contact {
    svg {
      width: 44px;
    }
  }

  &.ideas {
    svg {
      width: 43px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-bottom: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    margin-bottom: 60px;
  }
`;

export const HeaderText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6rem;
  letter-spacing: 0.3px;
`;

export const FormDropdown = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grayDarker};
  top: 83px;
  right: 0;
  width: 430px;
  height: ${({ height = '460px' }) => height};
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const NavMain = styled(Nav)`
  [data-item-label] > span {
    opacity: 1;
  }

  &:hover {
    [data-item-label] > span {
      opacity: 0.3;
    }
  }

  &.businesses [data-item-label='businesses'],
  &.people [data-item-label='people'],
  &.yellow-way [data-item-label='yellow-way'],
  &.login [data-item-label='login'] {
    &:hover {
      & > span {
        opacity: 1;
      }
    }
  }
`;

export const NavSecondary = styled(Nav)``;

export const NavItemLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  cursor: pointer;
`;

export const NavItem = styled.span`
  transition: padding 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.textColorAlt};
  font-weight: 700;

  padding: 0px 16px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  letter-spacing: 0.45px;

  ${HeaderDropdown},
  ${FormDropdown} {
    opacity: 0;
    pointer-events: none;
    /* opacity: 1; */
  }

  &:hover {
    ${HeaderDropdown} {
      opacity: 1;
      pointer-events: unset;
    }
  }

  &.active {
    ${FormDropdown} {
      opacity: 1;
      pointer-events: unset;
    }
  }

  ${({ active = false, theme }) =>
    active ? `background-color: ${theme.colors.navBackgroundItemActive}` : ''};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    padding: 0 32px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  margin-left: -1px;
`;

export const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeaderLogo = styled.div`
  display: ${({ stickyPositioned }) => (stickyPositioned ? 'none' : 'flex')};
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
  }
`;

export const HeaderBodyLeft = styled(HeaderBody)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
  }
`;

export const HeaderBodyRight = styled(HeaderBody)`
  display: none;
  margin-left: auto;

  ${NavItem} {
    position: relative;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
  }
`;

export const HeaderBodyMobile = styled(HeaderBody)`
  padding: 0 16px;
  width: 74px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const HeaderRoot = styled.div`
  position: sticky;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  left: 0;
  top: 0;

  ${({ stickyPositioned }) =>
    stickyPositioned &&
    css`
      ${HeaderContent} {
        top: -110px;
        opacity: 0;
      }

      ${HeaderLogo} {
        background-color: transparent;
      }

      ${HeaderBody} {
        opacity: 0;
        pointer-events: none;
      }

      &.is-hovered {
        ${HeaderLogo} {
          background-color: ${({ theme }) => theme.colors.headerBackground};
        }
        ${HeaderContent} {
          opacity: 1;
        }

        ${HeaderBody} {
          opacity: 1;
          pointer-events: unset;
        }
      }
    `};
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  margin-right: ${({ theme }) => theme.spaces.xsm};
`;

export const CustomNavLabelItem = styled(NavItemLabel)`
  width: 125px;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: center;
  display: flex;
`;

export const ContainerFormDropdown = styled.div`
  padding: 56px 0px 45px;
  color: #a6a8ab;
  font-weight: 300;
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 25px 50px;
  }
  * {
    border-bottom: 0.5px solid rgba(88, 89, 91, 0.7);
  }
`;
