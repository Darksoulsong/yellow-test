import React from 'react';
import { uid } from 'react-uid';
import { routeTo } from '@utils';
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
            link: '/blog',
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
            link: 'https://yellowrec.gupy.io/',
            external: true,
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
            link: '/blog',
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
            link: '/yellow-way',
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
        onClick: () => routeTo('/contato#contratar'),
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

  const getButtonProps = React.useCallback(item => {
    const props = {
      version: 'unstyled',
      block: true,
    };

    if (typeof item.onClick === 'function') {
      props.onClick = item.onClick;
    }

    return props;
  }, []);

  return (
    <MobileMenuRoot open={open}>
      <Collapsible>
        {menuItems.map((item, index) => (
          <React.Fragment key={uid(item, index)}>
            {item.content && (
              <Collapsible.Toggle itemIndex={index} renderIcon={renderIcon}>
                <MobileMenuHeading>{item.heading}</MobileMenuHeading>
              </Collapsible.Toggle>
            )}

            {!item.content && (
              <Button {...getButtonProps(item)}>
                <MobileMenuHeading>{item.heading}</MobileMenuHeading>
              </Button>
            )}

            <Collapsible.Body>
              <MobileMenuList>
                {item.content &&
                  item.content.map(contentItem => (
                    <MobileMenuListItem key={uid(contentItem.link)}>
                      <a
                        onClick={
                          typeof contentItem.onClick === 'function'
                            ? contentItem.onClick
                            : undefined
                        }
                        href={contentItem.link}
                        rel={contentItem.external ? 'noopener noreferrer' : ''}
                        target={contentItem.external ? '_blank' : '_self'}
                      >
                        {contentItem.label}
                      </a>
                    </MobileMenuListItem>
                  ))}
              </MobileMenuList>
            </Collapsible.Body>
          </React.Fragment>
        ))}
      </Collapsible>
    </MobileMenuRoot>
  );
}
