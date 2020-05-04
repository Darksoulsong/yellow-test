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
          <HeaderHeading>Cultura</HeaderHeading>
          <HeaderIconHolder className="culture">
            <SVG name="umbrella-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Conheça mais do nosso jeito de pensar e a forma como enxergamos o
            mundo. Nosso #yellowway.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock>
          <HeaderHeading>Blog</HeaderHeading>
          <HeaderIconHolder className="blog">
            <SVG name="bubble-edit-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Clique e acesse conteúdos relevantes para você como candidato ou
            como recrutador.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock>
          <HeaderHeading>Entre para o time</HeaderHeading>
          <HeaderIconHolder className="team">
            <SVG name="team-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Se quiser trabalhar com a gente, clique e deixe seus dados.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock noHover></HeaderDropdownBlock>
      </HeaderDropdown>
    </>
  );
}
