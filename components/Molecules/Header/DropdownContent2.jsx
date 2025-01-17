import React from 'react';
import { Logo, SVG } from '@components';
import Link from 'next/link';
import {
  HeaderDropdown,
  HeaderDropdownBlock,
  HeaderHeading,
  HeaderIconHolder,
  HeaderText,
} from './styles';

export default function DropdownContent1({ onCreateAccountClick }) {
  return (
    <>
      <HeaderDropdown>
        <HeaderDropdownBlock>
          <HeaderHeading>Quem somos</HeaderHeading>
          <HeaderIconHolder className="logo">
            <Logo variant="transparent" />
          </HeaderIconHolder>
          <HeaderText>
            Conheça mais sobre nossa história, nosso time e a nossa forma de
            trabalho.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock>
          <a
            href="https://yellowrec.gupy.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <HeaderHeading>Vagas Abertas</HeaderHeading>
            <HeaderIconHolder className="open-positions">
              <SVG name="open-icon" />
            </HeaderIconHolder>
            <HeaderText>
              Clique, conheça mais sobre nossas vagas e se inscreva nos
              processos que te atraem.
            </HeaderText>
          </a>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock onClick={onCreateAccountClick}>
          <HeaderHeading>Crie sua conta</HeaderHeading>
          <HeaderIconHolder className="create-account">
            <SVG name="add-user-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Queremos muito ter você no nosso radar. Clique e faça sua conta no
            banco da Yellow.
          </HeaderText>
        </HeaderDropdownBlock>
        <Link href="/blog">
          <HeaderDropdownBlock>
            <HeaderHeading>Dicas para você</HeaderHeading>
            <HeaderIconHolder className="ideas">
              <SVG name="ideas-icon" />
            </HeaderIconHolder>
            <HeaderText>
              Acesse nosso blog para encontrar conteúdos relevantes para você
              chegar bem preparado nos processos seletivos.
            </HeaderText>
          </HeaderDropdownBlock>
        </Link>
        <HeaderDropdownBlock noHover></HeaderDropdownBlock>
      </HeaderDropdown>
    </>
  );
}
