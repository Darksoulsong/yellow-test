import React from 'react';
import {
  SVG,
  Backdrop,
  Button,
  LoginForm,
  HamburgerButton,
  MobileMenu,
} from '@components';
import { useScrollPosition } from '@hooks';
import DropdownContent1 from './DropdownContent1';
import DropdownContent2 from './DropdownContent2';
import DropdownContent3 from './DropdownContent3';
import {
  HeaderRoot,
  HeaderContent,
  HeaderLogo,
  HeaderBodyLeft,
  HeaderBodyRight,
  HeaderBodyMobile,
  NavMain,
  NavSecondary,
  NavItem,
  Logo,
  HeaderMain,
  NavItemLabel,
  FormDropdown,
} from './styles';

export default function Header() {
  const ref = React.useRef(null);
  const [isSticky, setIsSticky] = React.useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);
  const navElementRef = React.useRef(null);
  const loginContainerRef = React.useRef(null);
  const [showBackdrop, setShowBackdrop] = React.useState(false);

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

  const handleMouseOver = React.useCallback(event => {
    const element = loginContainerRef.current;
    const label = event.currentTarget.getAttribute('data-item-label');

    element.classList.remove('active');

    if (label) {
      navElementRef.current.classList.remove(
        'businesses',
        'people',
        'yellow-way'
      );
      navElementRef.current.classList.add(label);
      setShowBackdrop(true);
    }
  }, []);

  const handleMouseOut = React.useCallback(e => {
    const label = e.currentTarget.getAttribute('data-item-label');
    const result = elementIsChildOfMainElement(label, e.target.className);

    if (!result) {
      navElementRef.current.classList.remove(
        'businesses',
        'people',
        'yellow-way'
      );

      setShowBackdrop(false);
    }
  }, []);

  const handleLoginToggle = React.useCallback(() => {
    const element = loginContainerRef.current;

    element.classList.toggle('active');
    setShowBackdrop(!showBackdrop);
  }, [showBackdrop]);

  const handleMobileMenuToggle = React.useCallback(() => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  }, [mobileMenuIsOpen]);

  useScrollPosition(
    {
      effect: ({ prevPos, currPos }) => {
        setIsSticky(currPos.y < 0 && prevPos.y > currPos.y);
      },
    },
    [isSticky]
  );

  const handleLogoClick = React.useCallback(() => {
    document
      .getElementById('page-top')
      ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, []);

  const onLogoMouseEnter = React.useCallback(() => {
    if (isSticky) {
      ref.current.classList.add('is-hovered');
    }
  }, [isSticky]);

  const onHeaderLeave = React.useCallback(() => {
    if (isSticky) {
      ref.current.classList.remove('is-hovered');
    }
  }, [isSticky]);

  React.useEffect(() => {
    if (window) {
      setIsSticky(window.scrollY > 0);
    }
  }, []);

  return (
    <HeaderRoot
      ref={ref}
      stickyPositioned={isSticky}
      onMouseLeave={onHeaderLeave}
    >
      <Backdrop active={showBackdrop} onClick={handleLoginToggle} />

      <HeaderMain>
        <HeaderLogo onMouseEnter={onLogoMouseEnter}>
          <Button
            type="button"
            variant="unstyled"
            onClick={e => handleLogoClick(e)}
          >
            <Logo>
              <SVG />
            </Logo>
          </Button>
        </HeaderLogo>

        <HeaderContent>
          <HeaderBodyLeft>
            <NavMain ref={navElementRef} onMouseLeave={handleMouseOut}>
              <NavItem
                data-item-label="businesses"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <NavItemLabel>Para Empresas</NavItemLabel>
                <DropdownContent1 />
              </NavItem>
              <NavItem
                data-item-label="people"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <NavItemLabel>Para Pessoas</NavItemLabel>
                <DropdownContent2 />
              </NavItem>
              <NavItem
                data-item-label="yellow-way"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <NavItemLabel>Yellow Way</NavItemLabel>
                <DropdownContent3 />
              </NavItem>
            </NavMain>
          </HeaderBodyLeft>

          <HeaderBodyRight>
            <NavSecondary>
              <NavItem>
                <NavItemLabel>Quero contratar</NavItemLabel>
              </NavItem>
              <NavItem ref={loginContainerRef} active data-item-label="login">
                <NavItemLabel onClick={e => handleLoginToggle(e)}>
                  Acesse sua conta
                </NavItemLabel>
                <FormDropdown>
                  <LoginForm />
                </FormDropdown>
              </NavItem>
            </NavSecondary>
          </HeaderBodyRight>

          <HeaderBodyMobile>
            <HamburgerButton onClick={() => handleMobileMenuToggle()} />
          </HeaderBodyMobile>
        </HeaderContent>
      </HeaderMain>

      <MobileMenu open={mobileMenuIsOpen} />
    </HeaderRoot>
  );
}
