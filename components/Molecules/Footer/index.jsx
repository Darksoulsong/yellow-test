import React from 'react';
import { Logo, SVG } from '@components';
import {
  FooterRoot,
  FooterBlock,
  FooterItem,
  GrayedSection,
  FooterBlockSocial,
  FooterHeading,
  Section,
} from './styles';

export default function Footer() {
  return (
    <FooterRoot>
      <Section>
        <Logo className="footer-logo" variant="alt" />
      </Section>
      <GrayedSection>
        <FooterBlock>
          <FooterItem>
            <FooterHeading>Para empresas</FooterHeading>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Produtos</a>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Contato</a>
          </FooterItem>
        </FooterBlock>

        <FooterBlock>
          <FooterItem>
            <FooterHeading>Para pessoas</FooterHeading>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Nossas Vagas</a>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Dicas de Entrevista</a>
          </FooterItem>
        </FooterBlock>

        <FooterBlock>
          <FooterItem>
            <FooterHeading>Yellow way</FooterHeading>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Cultura</a>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Quem somos</a>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Blog</a>
          </FooterItem>
        </FooterBlock>

        <FooterBlockSocial>
          <FooterItem>
            <FooterHeading>Social</FooterHeading>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">
              <SVG name="linkedin-icon" />
            </a>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">
              <SVG name="instagram-icon" />
            </a>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">
              <SVG name="youtube-icon" />
            </a>
          </FooterItem>
        </FooterBlockSocial>
      </GrayedSection>
    </FooterRoot>
  );
}
