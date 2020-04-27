import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBackground};
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
  height: 70px;
  width: 100%;
`;

export const HeaderDropdown = styled.div`
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  height: 250px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerDropdownBackground};
  z-index: 1;
`;

export const HeaderDropdownBlock = styled.div`
  transition: all 0.3s ease-in-out;
  flex: 1;
  padding: 32px;
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
  font-size: 1.4rem;
`;

export const HeaderIconHolder = styled.h2`
  height: 100px;

  path {
    transition: fill 0.3s ease-in-out;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const HeaderText = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.2rem;
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const NavItem = styled.span`
  color: ${({ theme }) => theme.colors.textColorAlt};
  font-weight: 700;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  ${HeaderDropdown} {
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    ${HeaderDropdown} {
      opacity: 1;
      pointer-events: unset;
    }
  }

  ${({ active = false, theme }) =>
    active ? `background-color: ${theme.colors.navBackgroundItemActive}` : ''}
`;
