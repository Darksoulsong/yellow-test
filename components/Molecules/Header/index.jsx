import React from 'react';
import { SVG } from '@components';
import DropdownContent1 from './DropdownContent1';
import { Root, HeaderBody, Nav, NavItem, Logo, HeaderMain } from './styles';

export default function Header() {
  return (
    <Root>
      <HeaderMain>
        <HeaderBody>
          <Logo>
            <SVG />
          </Logo>

          <Nav>
            <NavItem>
              Para Empresas
              <DropdownContent1 />
            </NavItem>
            <NavItem>Para Pessoas</NavItem>
            <NavItem>Yellow way</NavItem>
          </Nav>
        </HeaderBody>

        <HeaderBody>
          <Nav>
            <NavItem>Quero contratar</NavItem>
            <NavItem active>Acesse sua conta</NavItem>
          </Nav>
        </HeaderBody>
      </HeaderMain>
    </Root>
  );
}
