import React from 'react';
import { Logo, SVG } from '@components';
import {
  HeaderDropdown,
  HeaderDropdownBlock,
  HeaderHeading,
  HeaderIconHolder,
  HeaderText,
} from './styles';

export default function DropdownContent1() {
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
          <HeaderHeading>Vagas Abertas</HeaderHeading>
          <HeaderIconHolder className="open-positions">
            <SVG name="open-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Clique, conheça mais sobre nossas vagas e se inscreva nos processos
            que te atraem.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock>
          <HeaderHeading>Crie sua conta</HeaderHeading>
          <HeaderIconHolder className="create-account">
            <SVG name="add-user-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Queremos muito ter você no nosso radar. Clique e faça sua conta no
            banco da Yellow.
          </HeaderText>
        </HeaderDropdownBlock>
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
      </HeaderDropdown>
    </>
  );
}
