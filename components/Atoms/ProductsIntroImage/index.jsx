import React from 'react';
import { SVG } from '@components';
import ProductsIntroLineSVGMobile from '../../../public/images/products-intro-line-mobile.svg';
import ProductsIntroLineSVG from '../../../public/images/products-intro-line3.svg';
import {
  ProductsIntroImageRoot,
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  BlockContent,
  ProductsIntroLineMobile,
  ProductsIntroLine,
  ProductsIntroImageHeading,
} from './styles';

export default function ProductsIntroImageCOmpnent() {
  return (
    <ProductsIntroImageRoot>
      <Block1>
        <SVG name="turn-on-icon" />
        <BlockContent>
          <h2>Início</h2>
          <p>Aceite da Proposta</p>
        </BlockContent>
      </Block1>

      <Block2>
        <BlockContent>
          <h2>Kick Off</h2>
          <p>Estratégia de recrutamento e Job Description</p>
        </BlockContent>
        <SVG name="team2-icon" />
      </Block2>

      <Block3>
        <BlockContent>
          <h2>Hunting</h2>
          <p>Atração e qualificação de candidatos ideais</p>
        </BlockContent>
        <SVG name="magnifier-user-icon" />
      </Block3>

      <Block4>
        <SVG name="delivery-icon" />
        <BlockContent>
          <h2>Delivery</h2>
          <p>Apresentação dos candidatos para entrevistas na empresa</p>
        </BlockContent>
      </Block4>

      <Block5>
        <SVG name="document-icon" />
        <BlockContent>
          <h2>Placement</h2>
          <p>Negociação salarial e contratação</p>
        </BlockContent>
      </Block5>

      <ProductsIntroLineMobile>
        <ProductsIntroLineSVGMobile />
      </ProductsIntroLineMobile>

      <ProductsIntroLine>
        <ProductsIntroImageHeading>
          <strong>PROCESSO</strong> YELLOW
        </ProductsIntroImageHeading>
        <ProductsIntroLineSVG />
      </ProductsIntroLine>
    </ProductsIntroImageRoot>
  );
}
