import React from 'react';
import { Logo, SVG, MediaQuery } from '@components';
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

        <MediaQuery screenSize="desktop">
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
        </MediaQuery>
      </GrayedSection>

      <MediaQuery screenSize="smallerThanDesktop">
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
      </MediaQuery>
    </FooterRoot>
  );
}
