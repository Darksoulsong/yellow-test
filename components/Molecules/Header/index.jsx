import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useScrollPosition, useScreenWidth } from '@hooks';
import { useUserData } from '@providers/User';
import { useFormModal } from '@providers/FormModal';
import {
  SVG,
  useBackdrop,
  Button,
  LoginForm,
  HamburgerButton,
  MobileMenu,
} from '@components';
import { intBreakpoints } from '@components/Organisms/Theme/breakpoints';
import UserLoggedContent from './UserLoggedContent';
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
  const { openFormModal, activeFormModal } = useFormModal();
  const headerRootRef = React.useRef(null);
  const { screenWidth } = useScreenWidth();
  const { handleUserLogin, data, userLogged } = useUserData();
  const [isSticky, setIsSticky] = React.useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);
  const navElementRef = React.useRef(null);
  const loginContainerRef = React.useRef(null);
  const createAccountRef = React.useRef(null);
  const {
    isActive: showBackdrop,
    setIsActive: setShowBackdrop,
    setOnClickCallback: setBackdropOnClick,
  } = useBackdrop();

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

  const handleMouseOver = event => {
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
  };

  const handleMouseOut = React.useCallback(
    e => {
      const label = e.currentTarget.getAttribute('data-item-label');
      const result = elementIsChildOfMainElement(label, e.target.className);

      if (!result) {
        navElementRef.current.classList.remove(
          'businesses',
          'people',
          'yellow-way'
        );

        if (activeFormModal === '') {
          setShowBackdrop(false);
        }
      }
    },
    [activeFormModal]
  );

  const handleLoginToggle = React.useCallback(
    showBackdrop => {
      const element = loginContainerRef.current;

      element.classList.toggle('active');

      setShowBackdrop(!showBackdrop);
    },
    [showBackdrop]
  );

  const handleMobileMenuToggle = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  useScrollPosition(
    {
      effect: ({ prevPos, currPos }) => {
        setIsSticky(currPos.y < 0 && prevPos.y > currPos.y);
      },
    },
    [isSticky]
  );

  const handleCreateAccountButtonClick = () => {
    openFormModal('create');
    handleLoginToggle(showBackdrop);
    setMobileMenuIsOpen(false);
  };

  const handleResponsiveLoginAccountButtonClick = () => {
    setMobileMenuIsOpen(false);
    openFormModal('login');
  };

  const handleForgotPasswordButtonClick = () => {
    openFormModal('forgot');
    handleLoginToggle(showBackdrop);
    setMobileMenuIsOpen(false);
  };

  const handleCreateAccountItemClick = () => {
    openFormModal('create');
  };

  const handleCreateSimulation = () => {
    openFormModal('simulate');
    setMobileMenuIsOpen(false);
  };

  const onLogoMouseEnter = React.useCallback(() => {
    if (isSticky) {
      headerRootRef.current.classList.add('is-hovered');
    }
  }, [isSticky]);

  const onHeaderLeave = React.useCallback(() => {
    if (isSticky) {
      headerRootRef.current.classList.remove('is-hovered');
    }
  }, [isSticky]);

  React.useEffect(() => {
    if (window) {
      setIsSticky(window.scrollY > 0);
      setBackdropOnClick({ loginToggle: handleLoginToggle });

      Router.events.on('routeChangeComplete', () => {
        setShowBackdrop(false);
      });
    }
  }, []);

  return (
    <HeaderRoot
      ref={headerRootRef}
      stickyPositioned={isSticky}
      onMouseLeave={onHeaderLeave}
    >
      <HeaderMain>
        <HeaderLogo onMouseEnter={onLogoMouseEnter} stickyPositioned={isSticky}>
          <Link href="/">
            <Button type="button" version="unstyled">
              <Logo>
                <SVG />
              </Logo>
            </Button>
          </Link>
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
                <DropdownContent1 onCreateSimulation={handleCreateSimulation} />
              </NavItem>
              <NavItem
                data-item-label="people"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <NavItemLabel>Para Candidatos</NavItemLabel>
                <DropdownContent2
                  onCreateAccountClick={handleCreateAccountItemClick}
                />
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
              <Link href="/contato#contratar">
                <NavItem ref={createAccountRef}>
                  <NavItemLabel>Quero contratar</NavItemLabel>
                </NavItem>
              </Link>
              <NavItem ref={loginContainerRef} active data-item-label="login">
                {!userLogged ? (
                  <>
                    <NavItemLabel
                      onClick={() => handleLoginToggle(showBackdrop)}
                    >
                      Acesse sua conta
                    </NavItemLabel>
                    <FormDropdown>
                      <LoginForm
                        loading={data.loading}
                        onCreateAccountButtonClick={
                          handleCreateAccountButtonClick
                        }
                        onForgotPasswordButtonClick={
                          handleForgotPasswordButtonClick
                        }
                        onLoginButtonClick={({ email, password }) => {
                          handleLoginToggle(showBackdrop);
                          handleUserLogin({ email, password });
                          // Temporary code
                        }}
                      />
                    </FormDropdown>
                  </>
                ) : (
                  <UserLoggedContent
                    onClick={() => handleLoginToggle(showBackdrop)}
                  />
                )}
              </NavItem>
            </NavSecondary>
          </HeaderBodyRight>

          {screenWidth < intBreakpoints.large && (
            <HeaderBodyMobile>
              <HamburgerButton
                active={mobileMenuIsOpen}
                onClick={handleMobileMenuToggle}
              />
            </HeaderBodyMobile>
          )}
        </HeaderContent>
      </HeaderMain>

      {screenWidth < intBreakpoints.large && (
        <MobileMenu
          open={mobileMenuIsOpen}
          onCreateAccountButtonClick={handleCreateAccountButtonClick}
          onCreateSimulation={handleCreateSimulation}
          onForgotPasswordButtonClick={handleForgotPasswordButtonClick}
          showModalLogin={handleResponsiveLoginAccountButtonClick}
        />
      )}
    </HeaderRoot>
  );
}
