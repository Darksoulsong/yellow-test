import React from 'react';
import { Logo, SVG, IsDesktop } from '@components';
import {
  FooterRoot,
  FooterItem,
  FooterBlockPeople,
  FooterBlockYellowWay,
  FooterBlockCompanies,
  FooterItemYoutube,
  GrayedSection,
  MobileGrayedSection,
  FooterBlockSocial,
  FooterHeading,
  FooterTopSection,
} from './styles';

export default function Footer() {
  return (
    <FooterRoot>
      <FooterTopSection>
        <Logo className="footer-logo" variant="alt" />
      </FooterTopSection>
      <GrayedSection>
        <FooterBlockCompanies>
          <FooterItem>
            <FooterHeading>Para empresas</FooterHeading>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Produtos</a>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Contato</a>
          </FooterItem>
        </FooterBlockCompanies>

        <FooterBlockPeople>
          <FooterItem>
            <FooterHeading>Para pessoas</FooterHeading>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Nossas Vagas</a>
          </FooterItem>
          <FooterItem>
            <a href="http://foo.com">Dicas de Entrevista</a>
          </FooterItem>
        </FooterBlockPeople>

        <FooterBlockYellowWay>
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
        </FooterBlockYellowWay>

        <IsDesktop>
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
        </IsDesktop>
      </GrayedSection>

      <IsDesktop invert>
        <MobileGrayedSection>
          <FooterBlockSocial>
            <FooterItem>
              <a href="http://foo.com">
                <SVG name="linkedin-icon" />
              </a>
            </FooterItem>
            <FooterItemYoutube>
              <a href="http://foo.com">
                <SVG name="youtube-icon" />
              </a>
            </FooterItemYoutube>
            <FooterItem>
              <a href="http://foo.com">
                <SVG name="instagram-icon" />
              </a>
            </FooterItem>
          </FooterBlockSocial>
        </MobileGrayedSection>
      </IsDesktop>
    </FooterRoot>
  );
}
