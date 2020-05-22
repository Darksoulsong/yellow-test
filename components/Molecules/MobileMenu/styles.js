import styled, { css } from 'styled-components';

export const MobileMenuRoot = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  background-color: ${({ theme }) => theme.colors.grayDarkest};
  position: absolute;
  left: 0;
  top: 0;
  height: 0vh;
  width: 100%;
  opacity: 0;
  overflow: hidden;
  flex-direction: column;
  padding: 0 24px;
  padding-top: 83px;
  overflow: auto;

  .collapsible-item:not(.collapsible-last) {
    border-bottom: 0.5px solid rgba(88, 89, 91, 0.7);
  }

  .collapsible-active .collapsible-toggle-icon {
    color: ${({ theme }) => theme.colors.yellow};
  }

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      height: 100vh;
    `};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const MobileMenuItem = styled.div`
  display: flex;
`;

export const MobileMenuBox = styled.div`
  width: 128px;
  margin-right: 16px;
`;

export const MobileMenuText = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export const MobileMenuIcon = styled.span``;

export const MobileMenuHeading = styled.h2`
  font-size: 1.9rem;
  letter-spacing: 0.047rem;
  color: ${({ theme }) => theme.colors.grayLighter};
  height: 73px;
  line-height: 70px;
  text-align: left;
`;

export const MobileMenuList = styled.ul`
  padding-left: 16px;
  padding-bottom: 10px;
`;

export const MobileMenuListItem = styled.li`
  font-size: 1.4rem;
  font-weight: 300;
  height: 32px;
  letter-spacing: 0.035rem;

  a {
    color: ${({ theme }) => theme.colors.grayLighter};
  }
`;

export const MobileMenuToggleIcon = styled.span`
  transition: all 0.3s ease-in-out;
  transform: rotateX(0deg);
  color: ${({ theme }) => theme.colors.white};

  ${({ active }) =>
    active &&
    css`
      transform: rotateX(180deg);

      path {
        stroke: ${({ theme }) => theme.colors.yellow};
      }
    `};
`;
