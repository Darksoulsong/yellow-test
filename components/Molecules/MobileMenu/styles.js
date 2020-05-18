import styled from 'styled-components';

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
  padding: 0 32px;
  padding-top: 83px;

  ${({ open }) =>
    open &&
    `
      opacity: 1;
      height: 100vh;
    `};
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
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.white};
  height: 80px;
  line-height: 80px;
`;

export const MobileMenuList = styled.ul`
  padding-left: 20px;
`;

export const MobileMenuListItem = styled.li`
  font-size: 2rem;
  font-weight: 300;
  height: 50px;

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
