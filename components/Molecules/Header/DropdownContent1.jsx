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
          <HeaderHeading>Conheça melhor a Yellow</HeaderHeading>
          <HeaderIconHolder className="logo">
            <Logo variant="transparent" />
          </HeaderIconHolder>
          <HeaderText>
            Conheça mais sobre nossa história, nosso time e a nossa forma de
            trabalho.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock>
          <HeaderHeading>Produtos</HeaderHeading>
          <HeaderIconHolder className="products">
            <SVG name="box-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Entenda melhor nossos produtos e como podemos te atender da melhor
            forma.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock>
          <HeaderHeading>Simule sua Vaga</HeaderHeading>
          <HeaderIconHolder className="simulate">
            <SVG name="magnifier-user-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Você está precisando recrutar com precisão e velocidade? Clique e
            simule como seria contratar a Yellow.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock>
          <HeaderHeading>Contato</HeaderHeading>
          <HeaderIconHolder className="contact">
            <SVG name="phone-email-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Clique e deixe o seu nome com a gente! Nosso time comercial entrará
            em contato com você.
          </HeaderText>
        </HeaderDropdownBlock>
        <HeaderDropdownBlock>
          <HeaderHeading>Dicas para você</HeaderHeading>
          <HeaderIconHolder className="ideas ">
            <SVG name="ideas-icon" />
          </HeaderIconHolder>
          <HeaderText>
            Acesse nosso blog para encontrar conteúdos relevantes para você
            conduzir seu processo de recrutamento.
          </HeaderText>
        </HeaderDropdownBlock>
      </HeaderDropdown>
    </>
  );
}
