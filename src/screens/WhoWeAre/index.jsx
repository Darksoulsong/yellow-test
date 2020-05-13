import React from 'react';
import { uid } from 'react-uid';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Container,
  Header,
  SVG,
  Logo,
  SpeechBubble,
  Slider,
  Hashtag,
} from '@components';

import {
  listColumnNames,
  topHashtagSectionIcons,
  bottomHashtagSectionIcons,
} from './settings';

import { spaces } from '@components/Organisms/Theme/sizes';

import {
  Name,
  NameListColumn,
  NameListSection,
  WhySection,
  WhySectionText,
  WhySectionTitle,
  WhySectionColumn,
  PurposeSection,
  PurposeSectionTitle,
  PurposeColumn,
  Root,
  HashtagSection,
  HashtagIcons,
  HashtagIcon,
  HowSection,
  HowSectionContent,
  SVGManipulator,
  CasesSection,
  GrayedSection,
  SubHeading1,
  ExperienceContent,
  BubbleContent,
  Footer,
  FooterHeading,
  FooterItem,
  FooterBlock,
  FooterBlockSocial,
  Section,
  SectionTitle,
} from './styles';

const WhoWeAreScreen = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Container id="who-yellow" fluid padding="0" paddingOnLarge="0">
      <Root>
        <Header />

        <NameListSection>
          {listColumnNames.map((column, columnIndex) => (
            <NameListColumn key={columnIndex}>
              {column.map(element => (
                <Name
                  bold={element.bold}
                  key={uid(`${columnIndex}-${element.name}`)}
                >
                  {element.name}
                </Name>
              ))}
            </NameListColumn>
          ))}
        </NameListSection>

        <WhySection>
          <WhySectionColumn
            mobileOnly
            width="100%"
            style={{ marginBottom: spaces.md, marginRight: '0px' }}
          >
            <WhySectionTitle>
              <strong>POR QUE</strong> YELLOW?
            </WhySectionTitle>
          </WhySectionColumn>
          <WhySectionColumn
            desktopOnly
            width="fit-content"
            style={{ marginRight: spaces.md }}
          >
            <WhySectionTitle>
              <strong>POR QUE</strong>
            </WhySectionTitle>
            <WhySectionTitle>YELLOW?</WhySectionTitle>
          </WhySectionColumn>
          <WhySectionColumn width="fit-content" desktopOnly>
            <SVG name="open-key" />
          </WhySectionColumn>
          <WhySectionColumn style={{ flex: '1' }}>
            <WhySectionText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
              atque, quia eos, enim aliquid modi distinctio perspiciatis
              provident similique fugit vitae autem dicta accusantium
              consectetur unde veniam minima? Vero, quibusdam?
            </WhySectionText>
          </WhySectionColumn>
        </WhySection>

        <PurposeSection>
          <PurposeColumn align="center">
            <PurposeSectionTitle>
              NOSSO PROPÓSITO É <strong>CONECTAR PESSOAS</strong>
            </PurposeSectionTitle>
          </PurposeColumn>
          <PurposeColumn align="flex-end">
            <SVG name="yw-icon" />
          </PurposeColumn>
        </PurposeSection>

        <HowSection>
          <SectionTitle>
            COMO <strong>TRABALHAMOS</strong>
          </SectionTitle>
          <HowSectionContent>
            <SVGManipulator
              data-aos="animate-lines-circle"
              data-aos-offset="200"
              type="lines-circle-icon"
            >
              <SVG name="lines-circle-icon" />
            </SVGManipulator>
          </HowSectionContent>
        </HowSection>
        <CasesSection>
          <SectionTitle margin="0">
            YELLOW <strong>CASES</strong>
          </SectionTitle>
          <ExperienceContent>
            <SpeechBubble type="stars" iconsAlign="center" arrowAlign="center">
              <Slider>
                <BubbleContent>
                  <strong>O desafio:</strong> Mobilizar equipe de 12
                  engenheiros, geólogos e gestores para uma área remota em uma
                  planta de mineração, com um prazo reduzido e marcos
                  contratuais bem rígidos.
                  <br />
                  <strong>Fato consultivo:</strong> Um dos candidatos
                  apresentados como gerente da planta, respondendo ao diretor da
                  empresa, não havia sido pré- aprovado pelo cliente para fazer
                  as entrevistas. Nós chancelamos o perfil e as entrevistas
                  aconteceram. Além de contratado, o profissional foi promovido
                  a gerente geral após 6 meses na empresa devido ao seu
                  excelente resultado.
                </BubbleContent>
                <BubbleContent>
                  Now, I don't know exactly when we turned on each other, but I
                  know that seven of us survived the slide... and only five made
                  it out. Now we took an oath, that I'm breaking now. You don't
                  get sick, I do. That's also clear.
                </BubbleContent>
                <BubbleContent>
                  We said we'd say it was the snow that killed the other two,
                  but it wasn't. Nature is lethal but it doesn't hold a candle
                  to man. Your bones don't break, mine do. That's clear. Your
                  cells react to bacteria and viruses differently than mine.
                </BubbleContent>
              </Slider>
            </SpeechBubble>
          </ExperienceContent>
        </CasesSection>

        <HashtagSection>
          <HashtagIcons specialMargin={'0 0 -6.5vw 0'}>
            {topHashtagSectionIcons.map(icon => (
              <HashtagIcon key={uid(icon)} {...icon}>
                <SVG name={icon.name} />
              </HashtagIcon>
            ))}
          </HashtagIcons>
          <Hashtag />
          <HashtagIcons specialMargin={'-7vw 0 0 0'}>
            {bottomHashtagSectionIcons.map(icon => (
              <HashtagIcon key={uid(icon)} {...icon}>
                <SVG name={icon.name} />
              </HashtagIcon>
            ))}
          </HashtagIcons>
        </HashtagSection>

        <Footer>
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
        </Footer>
      </Root>
    </Container>
  );
};

export { WhoWeAreScreen };
