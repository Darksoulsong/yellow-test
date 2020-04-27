import React from 'react';
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

const IndexPage = () => (
  <Container padding="0" paddingOnLarge="0">
    <Root>
      <Header />

      <Intro>
        <IntroHolder>
          <MainHeading>
            <em>Olá,</em> Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Fuga quis facere ut odio ducimus ab nihil.
          </MainHeading>
          <SecondaryHeading>Yellow.</SecondaryHeading>
        </IntroHolder>

        <Video>Vídeo</Video>

        <IntroFooter>
          <IntroFooterImage>
            <img
              alt="Busca de vagas e contratação"
              src="/images/intro-image.jpg"
            />
          </IntroFooterImage>
          <IntroFooterActions>
            <Button type="button">Quero contratar</Button>
            <Button type="button">Busco uma vaga</Button>
          </IntroFooterActions>
        </IntroFooter>
      </Intro>

      <Section1>
        <SubHeading1>
          Encontrar o <em>candidato ideal</em> não é fácil e contratações
          erradas <strong>geram prejuízos</strong>
        </SubHeading1>

        <TimelineWrapper>
          <Timeline />
        </TimelineWrapper>

        <SubHeading1>
          Continue <em>focado em seu negócio</em> enquanto nós buscamos as{' '}
          <strong>pessoas certas</strong> para o seu time
        </SubHeading1>
      </Section1>

      <HighlightsSection>
        <TransparentLogoHolder>
          <Logo variant="transparent" width="145px" />
        </TransparentLogoHolder>

        <HighlightBox>
          <SubHeading1>
            YELLOW <strong>DIFERENCIAL</strong>
            <SVG name="handdrawn-arrow" />
          </SubHeading1>
          <Circles>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle highlighted>
              <ListHolder>
                <List>
                  <li>Processos simples e ágeis</li>
                  <li>Precisão nas entregas</li>
                  <li>Equipe de especialistas</li>
                  <li>Tecnologia própria</li>
                  <li>+ 50k pessoas conectadas</li>
                </List>

                <Button>Conheça mais a Yellow</Button>
              </ListHolder>
            </Circle>
            <Circle />
          </Circles>
        </HighlightBox>
      </HighlightsSection>

      <ProductsSection>
        <SubHeading1>
          YELLOW <strong>PRODUTOS</strong>
          <SVG name="handdrawn-scratches" />
        </SubHeading1>

        <Products />

        <ProductsFooter>
          <Button type="button">Simule sua vaga</Button>
          <ProductsFloatingButton>Entenda mais</ProductsFloatingButton>
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
                You think water moves fast? You should see ice. It moves like it
                has a mind. Like it knows it killed the world once and got a
                taste for murder. After the avalanche, it took us a week to
                climb out.
              </BubbleContent>

              <BubbleContent>
                Now, I don't know exactly when we turned on each other, but I
                know that seven of us survived the slide... and only five made
                it out. Now we took an oath, that I'm breaking now. You don't
                get sick, I do. That's also clear.
              </BubbleContent>

              <BubbleContent>
                We said we'd say it was the snow that killed the other two, but
                it wasn't. Nature is lethal but it doesn't hold a candle to man.
                Your bones don't break, mine do. That's clear. Your cells react
                to bacteria and viruses differently than mine.
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
          <Logo variant="alt" />
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

export default IndexPage;
