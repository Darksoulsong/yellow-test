import React from 'react';
import Link from 'next/link';
import { Logo, SVG, ShowOnDesktop, ShowOnTabletOnly } from '@components';
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
            <Link href="/">
              <a>Produtos</a>
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </FooterItem>
        </FooterBlockCompanies>

        <FooterBlockPeople>
          <FooterItem>
            <FooterHeading>Para pessoas</FooterHeading>
          </FooterItem>
          <FooterItem>
            <Link href="/">
              <a>Nossas Vagas</a>
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href="/">
              <a>Dicas de Entrevista</a>
            </Link>
          </FooterItem>
        </FooterBlockPeople>

        <FooterBlockYellowWay>
          <FooterItem>
            <FooterHeading>Yellow way</FooterHeading>
          </FooterItem>
          <FooterItem>
            <Link href="/cultura">
              <a>Cultura</a>
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href="/quem-somos">
              <a>Quem somos</a>
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </FooterItem>
        </FooterBlockYellowWay>

        <ShowOnDesktop>
          <FooterBlockSocial>
            <FooterItem>
              <FooterHeading>Social</FooterHeading>
            </FooterItem>
            <FooterItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/28613312/"
              >
                <SVG name="linkedin-icon" />
              </a>
            </FooterItem>
            <FooterItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/yellow.rec/"
              >
                <SVG name="instagram-icon" />
              </a>
            </FooterItem>
            <FooterItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCUokCIPwOOqxRIIj-_ZCZQg"
              >
                <SVG name="youtube-icon" />
              </a>
            </FooterItem>
          </FooterBlockSocial>
        </ShowOnDesktop>
      </GrayedSection>

      <ShowOnTabletOnly screenSize="smallerThanDesktop">
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
      </ShowOnTabletOnly>
    </FooterRoot>
  );
}
