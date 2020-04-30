import React from 'react';
import { SVG, Backdrop } from '@components';
import { useScrollPosition } from '@hooks';
import DropdownContent1 from './DropdownContent1';
import DropdownContent2 from './DropdownContent2';
import DropdownContent3 from './DropdownContent3';
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
  const ref = React.useRef(null);
  const [isSticky, setIsSticky] = React.useState(false);
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

  useScrollPosition(
    {
      effect: ({ currPos }) => {
        setIsSticky(currPos.y < 0);
      },
    },
    [isSticky]
  );

  React.useEffect(() => {
    if (window) {
      setIsSticky(window.scrollY > 0);
    }
  }, []);

  return (
    <HeaderRoot
      ref={ref}
      stickyPositioned={isSticky}
      onMouseLeave={handleMouseOut}
    >
      <Backdrop active={showBackdrop} />

      <HeaderMain>
        <Logo>
          <SVG />
        </Logo>
        <HeaderBody>
          <Nav ref={navElementRef}>
            <NavItem
              data-item-label="businesses"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              <NavItemLabel>Para Empresas</NavItemLabel>
              <DropdownContent1 />
            </NavItem>
            <NavItem data-item-label="people" onMouseEnter={handleMouseOver}>
              <NavItemLabel>Para Pessoas</NavItemLabel>
              <DropdownContent2 />
            </NavItem>
            <NavItem
              data-item-label="yellow-way"
              onMouseEnter={handleMouseOver}
            >
              <NavItemLabel>Yellow way</NavItemLabel>
              <DropdownContent3 />
            </NavItem>
          </Nav>
        </HeaderBody>

        <HeaderBody right>
          <Nav>
            <NavItem>
              <NavItemLabel>Quero contratar</NavItemLabel>
            </NavItem>
            <NavItem active>
              <NavItemLabel>Acesse sua conta</NavItemLabel>
            </NavItem>
          </Nav>
        </HeaderBody>
      </HeaderMain>
    </HeaderRoot>
  );
}
