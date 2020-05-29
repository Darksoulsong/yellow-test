import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
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
  DefaultLayout,
  MediaQuery,
  ProductsCarousel,
} from '@components';
import {
  List,
  Video,
  Intro,
  Circle,
  Circles,
  TimelineSection,
  ListHolder,
  SubHeading1,
  MainHeading,
  IntroHolder,
  IntroHolderContent,
  IntroHolderBlock,
  IntroFooter,
  HighlightBox,
  TimelineWrapper,
  IntroFooterImage,
  HighlightsSection,
  ProductsSection,
  ProductsFooter,
  IntroFooterActions,
  TransparentLogoHolder,
  ProductsAnchor,
  ExperienceSection,
  ExperienceContent,
  ExperienceFooter,
  BubbleContent,
  HomeRoot,
  CirclesContainer,
  HighlightsMobileArrowHolder,
  ProductsMobileCarouselHolder,
  ProductsDesktopHolder,
  IntroFooterImageDesktop,
  IntroFooterImageSmallerThanDesktop,
} from './styles';

const HomeScreen = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <DefaultLayout>
      <HomeRoot>
        <Intro>
          <IntroHolder>
            <IntroHolderContent>
              <IntroHolderBlock>
                <div>
                  <MediaQuery screenSize="smallerThanDesktop">
                    <MainHeading>
                      <em>Olá,</em>
                      <br />
                      Lorem ipsum dolor sit <br />
                      amet, adipiscing elit, <br />
                      sed diam nonummy <br />
                      nibh eusmod <br />
                      tincidunt ut laoreet <br />
                      dolore magna <br />
                      aliquam erat volutpat. <br />
                      <strong>Yellow.</strong>
                    </MainHeading>
                  </MediaQuery>

                  <MediaQuery screenSize="desktop">
                    <MainHeading>
                      <em>Olá,</em>
                      Lorem ipsum <br />
                      dolor sit amet, adipiscing <br />
                      elit, sed diam nonummy <br />
                      nibh eusmod tincidunt ut <br />
                      laoreet dolore magna <br />
                      aliquam erat volutpat. <br />
                      <strong>Yellow.</strong>
                    </MainHeading>
                  </MediaQuery>
                </div>
              </IntroHolderBlock>
              <IntroHolderBlock>
                <IntroFooterImageSmallerThanDesktop>
                  <IntroImage />
                </IntroFooterImageSmallerThanDesktop>
              </IntroHolderBlock>
            </IntroHolderContent>
          </IntroHolder>

          <Video>
            <video autoPlay loop muted src="/videos/yellow-video.mp4" />
          </Video>

          <IntroFooter>
            <IntroFooterImageDesktop>
              <IntroFooterImage>
                <IntroImage />
              </IntroFooterImage>
            </IntroFooterImageDesktop>

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
            <MediaQuery screenSize="mobile">
              Encontrar o <AnimatedUnderline>candidato ideal</AnimatedUnderline>{' '}
              não é <br /> fácil e contratações erradas <br />
              <strong>geram prejuízos</strong>
            </MediaQuery>

            <MediaQuery screenSize="tablet">
              Encontrar o <AnimatedUnderline>candidato ideal</AnimatedUnderline>{' '}
              não é fácil e <br />
              contratações erradas <strong>geram prejuízos</strong>
            </MediaQuery>
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
          <MediaQuery screenSize="desktop">
            <TransparentLogoHolder>
              <Logo variant="transparent" width="150px" />
            </TransparentLogoHolder>
          </MediaQuery>

          <HighlightBox>
            <SubHeading1>
              YELLOW <strong>DIFERENCIAL</strong>
              <MediaQuery screenSize="desktop">
                <AnimatedArrow />
              </MediaQuery>
            </SubHeading1>

            <HighlightsMobileArrowHolder>
              <AnimatedArrow />
            </HighlightsMobileArrowHolder>

            <CirclesContainer>
              <Circles>
                <MediaQuery screenSize="desktop">
                  <Circle />
                  <Circle />
                  <Circle />
                </MediaQuery>

                <Circle />
                <Circle />
                <Circle highlighted>
                  <MediaQuery screenSize="desktop">
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

                      <div data-aos="fade-right" data-aos-offset="-100">
                        <Button type="button" variant="primary" height="72px">
                          Conheça a Yellow
                        </Button>
                      </div>
                    </ListHolder>
                  </MediaQuery>
                </Circle>
                <Circle />
              </Circles>
            </CirclesContainer>

            <MediaQuery screenSize="smallerThanDesktop">
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

                <div data-aos="fade-right" data-aos-offset="-100">
                  <Button type="button" variant="primary" height="72px">
                    Conheça a Yellow
                  </Button>
                </div>
              </ListHolder>
            </MediaQuery>
          </HighlightBox>
        </HighlightsSection>

        <ProductsSection>
          <SubHeading1>
            YELLOW <strong>PRODUTOS</strong>
            <AnimatedScratches />
          </SubHeading1>

          <ProductsDesktopHolder>
            <Products />
          </ProductsDesktopHolder>

          <ProductsMobileCarouselHolder>
            <ProductsCarousel />
          </ProductsMobileCarouselHolder>

          <ProductsAnchor>
            <a href="/link">Entenda mais os produtos</a>
          </ProductsAnchor>

          <ProductsFooter>
            <Button variant="primary" type="button">
              Simule sua vaga
            </Button>
          </ProductsFooter>
        </ProductsSection>

        <ExperienceSection>
          <SubHeading1>
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
      </HomeRoot>
    </DefaultLayout>
  );
};

export { HomeScreen };
