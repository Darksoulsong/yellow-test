import styled from 'styled-components';

export const HeaderRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.div`
  padding-left: 32px;
  padding-right: 128px;
  width: 102px;
`;

export const HeaderMain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 83px;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.headerBackground};
`;

export const HeaderDropdown = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  height: 302px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerDropdownBackground};
  z-index: 1;
`;

export const HeaderDropdownBlock = styled.div`
  transition: all 0.3s ease-in-out;
  flex: 1;
  padding: 48px 60px 45px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.textColor};

    path {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const HeaderHeading = styled.h2`
  font-size: 1.8rem;
`;

export const HeaderIconHolder = styled.div`
  height: 127px;
  display: flex;
  align-items: center;

  svg {
    /* margin-bottom: 65px; */
    width: 60px;
    /* height: auto; */
  }

  path {
    transition: fill 0.3s ease-in-out;
    fill: ${({ theme }) => theme.colors.white};
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

  &.products {
    svg {
      width: 35px;
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
`;

export const HeaderText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6rem;
  letter-spacing: 0.3px;
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;

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
  &.yellow-way [data-item-label='yellow-way'] {
    &:hover {
      & > span {
        opacity: 1;
      }
    }
  }
`;

export const NavItemLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const NavItem = styled.span`
  color: ${({ theme }) => theme.colors.textColorAlt};
  font-weight: 700;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  letter-spacing: 0.45px;
  cursor: pointer;

  ${HeaderDropdown} {
    /* opacity: 0;
    pointer-events: none; */
  }

  &:hover {
    ${HeaderDropdown} {
      opacity: 1;
      pointer-events: unset;
    }

    ${NavItemLabel} {
      opacity: 0.3;
    }
  }

  ${({ active = false, theme }) =>
    active ? `background-color: ${theme.colors.navBackgroundItemActive}` : ''}
`;
