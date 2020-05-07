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
  AnimatedUnderline,
} from '@components';

import {
  listColumnNames,
  topHashtagSectionIcons,
  bottomHashtagSectionIcons,
} from './settings';

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
  PurposeSVGModifier,
  Root,
  HashtagSection,
  HashtagText,
  HashtagContainer,
  Hashtag,
  HashtagIcons,
  HashtagIcon,
  HowSection,
  HowSectionContent,
  HowItem,
  HowItemsContainer,
  HowItemText,
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
  Circle,
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
          <WhySectionColumn width="40%">
            <WhySectionTitle>
              <strong>POR QUE</strong> YELLOW?
            </WhySectionTitle>
          </WhySectionColumn>
          <WhySectionColumn desktopOnly>
            <SVG name="open-key" />
          </WhySectionColumn>
          <WhySectionColumn width="50%">
            <WhySectionText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
              atque, quia eos, enim aliquid modi distinctio perspiciatis
              provident similique fugit vitae autem dicta accusantium
              consectetur unde veniam minima? Vero, quibusdam?
            </WhySectionText>
          </WhySectionColumn>
        </WhySection>

        <PurposeSection>
          <PurposeSectionTitle>
            NOSSO PROPÓSITO É <strong>CONECTAR PESSOAS</strong>
          </PurposeSectionTitle>
          <PurposeSVGModifier>
            <SVG name="yw-icon" />
          </PurposeSVGModifier>
        </PurposeSection>

        <HowSection>
          <SectionTitle>
            COMO <strong>TRABALHAMOS</strong>
          </SectionTitle>
          <HowSectionContent>
            <SVG name="lines-circle-icon" />
            <HowItemsContainer>
              <HowItem align="flex-end" marginTop="-41vw" marginRight="10vw">
                <HowItemText>Processo simples</HowItemText>
              </HowItem>
              <HowItem marginTop="3.5vw" marginLeft="2vw">
                <HowItemText width="20vw">Experiência do candidato</HowItemText>
              </HowItem>
              <HowItem align="flex-end" marginTop="2vw">
                <HowItemText>Agilidade</HowItemText>
              </HowItem>
              <HowItem marginTop="5.5vw">
                <HowItemText>Tecnologia própria</HowItemText>
              </HowItem>
              <HowItem marginTop="7.5vw">
                <HowItemText>Precisão</HowItemText>
              </HowItem>
              <HowItem align="flex-end" marginTop="-2vw">
                <HowItemText width="15vw">Foco no sucesso</HowItemText>
              </HowItem>
            </HowItemsContainer>
          </HowSectionContent>
        </HowSection>

        <CasesSection>
          <SubHeading1 data-aos="fade-up" data-aos-offset="300">
            YELLOW <strong>CASES</strong>
          </SubHeading1>
          <ExperienceContent>
            <SpeechBubble>
              <Slider>
                <BubbleContent>
                  You think water moves fast? You should see ice. It moves like
                  it has a mind. Like it knows it killed the world once and got
                  a taste for murder. After the avalanche, it took us a week to
                  climb out.
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
          <HashtagIcons>
            {topHashtagSectionIcons.map(icon => (
              <HashtagIcon key={uid(icon)} {...icon}>
                <SVG name={icon.name} />
              </HashtagIcon>
            ))}
          </HashtagIcons>

          <Hashtag>
            <HashtagContainer>
              <HashtagText>
                #YELLOW<strong>WAY</strong>
              </HashtagText>

              <SVG name="three-line-icon" />
            </HashtagContainer>
            <SVGManipulator type="curved-line-icon">
              <SVG name="curved-line-icon" />
            </SVGManipulator>
          </Hashtag>

          <HashtagIcons>
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
