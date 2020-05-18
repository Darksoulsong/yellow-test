import React from 'react';
import { Collapsible } from '@components';
import {
  MobileMenuRoot,
  MobileMenuHeading,
  MobileMenuList,
  MobileMenuListItem,
} from './styles';

const menuItems = [
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
];

export default function MobileMenu({ open }) {
  return (
    <MobileMenuRoot open={open}>
      <Collapsible>
        {menuItems.map(item => (
          <>
            <Collapsible.Header>
              <MobileMenuHeading>{item.heading}</MobileMenuHeading>
            </Collapsible.Header>

            <Collapsible.Body>
              <MobileMenuList>
                {item.content.map(contentItem => (
                  <MobileMenuListItem key={contentItem.link}>
                    <a href={contentItem.link}>{contentItem.label}</a>
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
