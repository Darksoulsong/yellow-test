import React from 'react';
import { SVG, Backdrop } from '@components';
import DropdownContent1 from './DropdownContent1';
import {
  HeaderRoot,
  HeaderBody,
  Nav,
  NavItem,
  Logo,
  HeaderMain,
  NavItemLabel,
} from './styles';

export default function Header() {
  const navElementRef = React.useRef(null);
  const [showBackdrop, setShowBackdrop] = React.useState(false);

  const handleMouseOver = React.useCallback(event => {
    const label = event.currentTarget.getAttribute('data-item-label');

    if (label) {
      navElementRef.current.classList.add(label);
      setShowBackdrop(true);
    }
  }, []);

  const elementIsChildOfMainElement = (parentLabel, child) => {
    if (!child || typeof child !== 'string') return true;
    const parent = navElementRef.current.querySelector(
      `[data-item-label=${parentLabel}]`
    );

    if (!parent) {
      return false;
    }

    try {
      const selector = `[class="${child}"]`;
      return !!parent.querySelector(selector);
    } catch (e) {
      return true;
    }
  };

  const handleMouseOut = React.useCallback(e => {
    const label = e.currentTarget.getAttribute('data-item-label');
    const result = elementIsChildOfMainElement(label, e.target.className);

    if (!result) {
      navElementRef.current.classList.remove([
        'businesses',
        'people',
        'yellow-way',
      ]);

      setShowBackdrop(false);
    }
  }, []);

  return (
    <HeaderRoot onMouseOut={handleMouseOut}>
      <Backdrop active={showBackdrop} />

      <HeaderMain>
        <HeaderBody>
          <Logo>
            <SVG />
          </Logo>

          <Nav ref={navElementRef}>
            <NavItem
              data-item-label="businesses"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <NavItemLabel>Para Empresas</NavItemLabel>
              <DropdownContent1 />
            </NavItem>
            <NavItem data-item-label="people" onMouseOver={handleMouseOver}>
              <NavItemLabel>Para Pessoas</NavItemLabel>
            </NavItem>
            <NavItem data-item-label="yellow-way" onMouseOver={handleMouseOver}>
              <NavItemLabel>Yellow way</NavItemLabel>
            </NavItem>
          </Nav>
        </HeaderBody>

        <HeaderBody>
          <Nav>
            <NavItem>Quero contratar</NavItem>
            <NavItem active>Acesse sua conta</NavItem>
          </Nav>
        </HeaderBody>
      </HeaderMain>
    </HeaderRoot>
  );
}
