import React from 'react';
import { Collapsible, Button, SVG } from '@components';
import {
  MobileMenuRoot,
  MobileMenuHeading,
  MobileMenuList,
  MobileMenuListItem,
  MobileMenuToggleIcon,
} from './styles';

export default function MobileMenu({
  open,
  onCreateAccountButtonClick,
  onLoginToggle,
}) {
  const menuItems = React.useMemo(() => {
    return [
      {
        heading: 'Para Empresas',
        content: [
          {
            link: '/quem-somos',
            label: 'Quem somos',
          },
          {
            link: '/produtos',
            label: 'Produtos',
          },
          {
            link: '/simule-sua-vaga',
            label: 'Simule sua vaga',
          },
          {
            link: '/contato',
            label: 'Contato',
          },
          {
            link: '/dicas-para-voce',
            label: 'Dicas para você',
          },
        ],
      },
      {
        heading: 'Para Candidatos',
        content: [
          {
            link: '/quem-somos',
            label: 'Quem somos',
          },
          {
            link: '/vagas-abertas',
            label: 'Vagas Abertas',
          },
          {
            link: '/crie-sua-conta',
            label: 'Crie sua conta',
            onClick: function() {
              event.preventDefault();
              onCreateAccountButtonClick();
            },
          },
          {
            link: '/dicas-para-voce',
            label: 'Dicas para você',
          },
        ],
      },
      {
        heading: 'Yellow Way',
        content: [
          {
            link: '/quem-somos',
            label: 'Quem somos',
          },
          {
            link: '/cultura',
            label: 'Cultura',
          },
          {
            link: '/blog',
            label: 'Blog',
          },
          {
            link: '/entre-para-o-time',
            label: 'Entre para o time',
          },
        ],
      },
      {
        heading: 'Quero Contratar',
      },
      {
        heading: 'Acesse sua conta',
        onClick: onLoginToggle,
      },
    ];
  }, []);

  const renderIcon = React.useCallback(isActive => {
    return (
      <MobileMenuToggleIcon active={isActive}>
        <SVG name="caret-icon" />
      </MobileMenuToggleIcon>
    );
  }, []);

  React.useEffect(() => {
    const method = open ? 'add' : 'remove';
    document.body.classList[method]('hide-body-overflow');
  }, [open]);

  return (
    <MobileMenuRoot open={open}>
      <Collapsible>
        {menuItems.map((item, index) => (
          <>
            {item.content && (
              <Collapsible.Toggle itemIndex={index} renderIcon={renderIcon}>
                <MobileMenuHeading>{item.heading}</MobileMenuHeading>
              </Collapsible.Toggle>
            )}

            {!item.content && (
              <Button
                version="unstyled"
                block
                onClick={typeof item.onClick === 'function' && item.onClick}
              >
                <MobileMenuHeading>{item.heading}</MobileMenuHeading>
              </Button>
            )}

            <Collapsible.Body>
              <MobileMenuList>
                {item.content &&
                  item.content.map(contentItem => (
                    <MobileMenuListItem key={contentItem.link}>
                      <a
                        onClick={
                          typeof contentItem.onClick === 'function' &&
                          contentItem.onClick
                        }
                        href={contentItem.link}
                      >
                        {contentItem.label}
                      </a>
                    </MobileMenuListItem>
                  ))}
              </MobileMenuList>
            </Collapsible.Body>
          </>
        ))}
      </Collapsible>
    </MobileMenuRoot>
  );
}
