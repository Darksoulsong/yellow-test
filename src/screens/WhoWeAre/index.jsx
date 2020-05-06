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

import { listColumnNames } from './settings';

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
  Root,
  HashtagSection,
  Hashtag,
  HashtagIcons,
  HashtagIcon,
  HowSection,
  HowItems,
  HowSectionText,
  HowCircleContainer,
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
        </PurposeSection>

        <HowSection>
          <SectionTitle>
            COMO <strong>TRABALHAMOS</strong>
          </SectionTitle>
          <HowItems>
            <HowSectionText marginLeft="55%">Processo simples</HowSectionText>
            <HowSectionText marginLeft="5%">
              Experiência do candidato
            </HowSectionText>
            <HowSectionText marginLeft="75%">Agilidade</HowSectionText>
            <HowCircleContainer>
              <Circle highlighted />
            </HowCircleContainer>
            <HowSectionText>Tecnologia própria</HowSectionText>
            <HowSectionText marginLeft="5%">Precisão</HowSectionText>
            <HowSectionText marginLeft="70%">Foco no sucesso</HowSectionText>
          </HowItems>
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
            <HashtagIcon marginTop="5%">
              <SVG name="heart-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="10%">
              <SVG name="plane-icon" />
            </HashtagIcon>
            <HashtagIcon>
              <SVG name="bulletlist-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="12%">
              <SVG name="suitcase-icon" />
            </HashtagIcon>
            <HashtagIcon marginLeft="5%" marginTop="7%">
              <SVG name="lightbulb-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="15%">
              <SVG name="clock-icon" />
            </HashtagIcon>
            <HashtagIcon>
              <SVG name="cloud-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="5%">
              <SVG name="coffee-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="10%">
              <SVG name="target-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="1%">
              <SVG name="planet-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="15%">
              <SVG name="chart-icon" />
            </HashtagIcon>
          </HashtagIcons>
          <Hashtag>
            #YELLOW<strong>WAY</strong>
          </Hashtag>
          <HashtagIcons>
            <HashtagIcon>
              <SVG name="house-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="-7%">
              <SVG name="letter-icon" />
            </HashtagIcon>
            <HashtagIcon marginLeft="0" marginTop="10%">
              <SVG name="darkumbrella-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="15%">
              <SVG name="telephone-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="3%">
              <SVG name="calculator-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="20%">
              <SVG name="camera-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="2%">
              <SVG name="star-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="10%">
              <SVG name="monitor-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="5%">
              <SVG name="pig-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="12%">
              <SVG name="bag-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="3%">
              <SVG name="headphones-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="-5%">
              <SVG name="bike-icon" />
            </HashtagIcon>
            <HashtagIcon marginTop="10%" marginLeft="-5%">
              <SVG name="lens-icon" />
            </HashtagIcon>
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
