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
} from '@components';
import {
  Root,
  List,
  Video,
  Intro,
  Circle,
  Circles,
  Section,
  Section1,
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
    <Container fluid padding="0" paddingOnLarge="0">
      <Root>
        <Header />

        <Intro>
          <IntroHolder>
            <MainHeading data-aos="fade-down">
              <em>Olá,</em> Lorem ipsum dolor sit amet, adipiscing elit, sed
              diam nonummy nibh eusmod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </MainHeading>
            <SecondaryHeading data-aos="fade-right" data-aos-delay="500">
              Yellow.
            </SecondaryHeading>
          </IntroHolder>

          <Video data-aos="fade-left" data-aos-delay="800">
            Vídeo
          </Video>

          <IntroFooter>
            <IntroFooterImage data-aos="fade-right" data-aos-offset="150">
              <img
                alt="Busca de vagas e contratação"
                src="/images/intro-image.jpg"
              />
            </IntroFooterImage>
            <IntroFooterActions data-aos="fade-left" data-aos-offset="150">
              <Button variant="primary" type="button">
                Quero contratar
              </Button>
              <Button variant="primary" type="button">
                Busco uma vaga
              </Button>
            </IntroFooterActions>
          </IntroFooter>
        </Intro>

        <Section1>
          <SubHeading1>
            Encontrar o <AnimatedUnderline>candidato ideal</AnimatedUnderline>{' '}
            não é fácil e contratações erradas <strong>geram prejuízos</strong>
          </SubHeading1>

          <TimelineWrapper>
            <Timeline />
          </TimelineWrapper>

          <SubHeading1>
            Continue{' '}
            <AnimatedUnderline>focado em seu negócio</AnimatedUnderline>{' '}
            enquanto nós buscamos as <strong>pessoas certas</strong> para o seu
            time
          </SubHeading1>
        </Section1>

        <HighlightsSection>
          <TransparentLogoHolder data-aos="fade-down" data-aos-delay="2000">
            <Logo variant="transparent" width="180px" />
          </TransparentLogoHolder>

          <HighlightBox>
            <SubHeading1>
              <span data-aos="fade-up" data-aos-delay="100">
                YELLOW <strong>DIFERENCIAL</strong>
              </span>
              <SVG
                data-aos="fade-down"
                data-aos-delay="1500"
                name="handdrawn-arrow"
              />
            </SubHeading1>
            <Circles>
              <Circle data-aos="fade-right" data-aos-delay="100" />
              <Circle data-aos="fade-right" data-aos-delay="200" />
              <Circle data-aos="fade-right" data-aos-delay="300" />
              <Circle data-aos="fade-right" data-aos-delay="400" />
              <Circle data-aos="fade-right" data-aos-delay="500" />
              <Circle highlighted data-aos="fade-right" data-aos-delay="600">
                <ListHolder data-aos="fade-up" data-aos-delay="2000">
                  <List>
                    <li data-aos="fade-right" data-aos-delay="2100">
                      Processos simples e ágeis
                    </li>
                    <li data-aos="fade-right" data-aos-delay="2200">
                      Precisão nas entregas
                    </li>
                    <li data-aos="fade-right" data-aos-delay="2300">
                      Equipe de especialistas
                    </li>
                    <li data-aos="fade-right" data-aos-delay="2400">
                      Tecnologia própria
                    </li>
                    <li data-aos="fade-right" data-aos-delay="2500">
                      + 50k pessoas conectadas
                    </li>
                  </List>

                  <div data-aos="fade-right" data-aos-delay="3000">
                    <Button
                      type="button"
                      variant="default"
                      height="72px"
                      fontSize="2.2rem"
                      fontWeight="300"
                    >
                      Conheça melhor a Yellow
                    </Button>
                  </div>
                </ListHolder>
              </Circle>
              <Circle data-aos="fade-right" data-aos-delay="700" />
            </Circles>
          </HighlightBox>
        </HighlightsSection>

        <ProductsSection>
          <SubHeading1
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="100"
          >
            YELLOW <strong>PRODUTOS</strong>
            <SVG
              data-aos="fade-in"
              data-aos-delay="600"
              name="handdrawn-scratches"
            />
          </SubHeading1>

          <Products />

          <ProductsFooter data-aos="fade-up" data-aos-offset="300">
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

          <ExperienceContent data-aos="fade-up" data-aos-delay="600">
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
            <img
              data-aos="fade-up"
              data-aos-delay="500"
              src="/images/testimony-image.png"
              alt="#Depoimentos"
            />
            <div data-aos="zoom-in-up" data-aos-delay="800">
              <SVG name="bubbles-icon" />
            </div>
          </ExperienceFooter>
        </ExperienceSection>

        <Footer data-aos="fade-up" data-aos-delay="100" data-aos-offset="300">
          <Section>
            <Logo className="footer-logo" variant="alt" />
          </Section>
          <Section1>
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
          </Section1>
        </Footer>
      </Root>
    </Container>
  );
};

export { HomeScreen };
