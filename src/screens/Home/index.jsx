import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Container,
  Header,
  Button,
  Timeline,
  SVG,
  Logo,
  Products,
  SpeechBubble,
  Slider,
  AnimatedUnderline,
  AnimatedScratches,
  AnimatedArrow,
  IntroImage,
} from '@components';
import {
  Root,
  List,
  Video,
  Intro,
  Circle,
  Circles,
  Section,
  GrayedSection,
  TimelineSection,
  ListHolder,
  SubHeading1,
  MainHeading,
  IntroHolder,
  IntroFooter,
  HighlightBox,
  TimelineWrapper,
  SecondaryHeading,
  IntroFooterImage,
  HighlightsSection,
  ProductsSection,
  ProductsFooter,
  IntroFooterActions,
  TransparentLogoHolder,
  ProductsFloatingButton,
  ExperienceSection,
  ExperienceContent,
  ExperienceFooter,
  BubbleContent,
  Footer,
  FooterHeading,
  FooterItem,
  FooterBlock,
  FooterBlockSocial,
} from './styles';

const HomeScreen = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Container id="page-top" fluid padding="0" paddingOnLarge="0">
      <Root>
        <Header />

        <Intro>
          <IntroHolder>
            <MainHeading>
              <em>Olá,</em> Lorem ipsum dolor sit amet, adipiscing elit, sed
              diam nonummy nibh eusmod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </MainHeading>
            <SecondaryHeading>Yellow.</SecondaryHeading>
          </IntroHolder>

          <Video data-aos="fade-left" data-aos-delay="800">
            Vídeo
          </Video>

          <IntroFooter>
            <IntroFooterImage>
              <IntroImage />
            </IntroFooterImage>
            <IntroFooterActions>
              <Button variant="primary" type="button">
                Quero contratar
              </Button>
              <Button variant="primary" type="button">
                Busco uma vaga
              </Button>
            </IntroFooterActions>
          </IntroFooter>
        </Intro>

        <TimelineSection>
          <SubHeading1>
            Encontrar o <AnimatedUnderline>candidato ideal</AnimatedUnderline>{' '}
            não é fácil e <br />
            contratações erradas <strong>geram prejuízos</strong>
          </SubHeading1>

          <TimelineWrapper>
            <Timeline />
          </TimelineWrapper>

          <SubHeading1>
            Continue{' '}
            <AnimatedUnderline>focado em seu negócio</AnimatedUnderline>, <br />
            enquanto nós buscamos as <br /> <strong>pessoas certas</strong> para
            o seu time
          </SubHeading1>
        </TimelineSection>

        <HighlightsSection>
          <TransparentLogoHolder>
            <Logo variant="transparent" width="150px" />
          </TransparentLogoHolder>

          <HighlightBox>
            <SubHeading1>
              YELLOW <strong>DIFERENCIAL</strong>
              <AnimatedArrow />
            </SubHeading1>
            <Circles>
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle highlighted>
                <ListHolder data-aos="fade-up" data-aos-delay="1000">
                  <List>
                    <li data-aos="fade-right" data-aos-delay="1100">
                      Processos simples e ágeis
                    </li>
                    <li data-aos="fade-right" data-aos-delay="1200">
                      Precisão nas entregas
                    </li>
                    <li data-aos="fade-right" data-aos-delay="1300">
                      Equipe de especialistas
                    </li>
                    <li data-aos="fade-right" data-aos-delay="1400">
                      Tecnologia própria
                    </li>
                    <li data-aos="fade-right" data-aos-delay="1500">
                      + 50k pessoas conectadas
                    </li>
                  </List>

                  <div data-aos="fade-right">
                    <Button
                      type="button"
                      variant="default"
                      fontSize="2.2rem"
                      fontWeight="300"
                      padding="0px 23px"
                      height="72px"
                    >
                      Conheça melhor a Yellow
                    </Button>
                  </div>
                </ListHolder>
              </Circle>
              <Circle />
            </Circles>
          </HighlightBox>
        </HighlightsSection>

        <ProductsSection>
          <SubHeading1>
            YELLOW <strong>PRODUTOS</strong>
            <AnimatedScratches />
          </SubHeading1>

          <Products />

          <ProductsFooter data-aos="fade-up">
            <Button variant="primary" type="button">
              Simule sua vaga
            </Button>
            <ProductsFloatingButton>Entenda mais</ProductsFloatingButton>
          </ProductsFooter>
        </ProductsSection>

        <ExperienceSection>
          <SubHeading1 data-aos="fade-up" data-aos-offset="300">
            YELLOW <strong>EXPERIÊNCIA</strong>
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
          <ExperienceFooter>
            <img src="/images/testimony-image.png" alt="#Depoimentos" />
            <SVG name="bubbles-icon" />
          </ExperienceFooter>
        </ExperienceSection>

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

export { HomeScreen };
