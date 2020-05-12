import React, { useEffect } from 'react';
import { uid } from 'react-uid';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Container,
  Header,
  SVG,
  Logo,
  MediumTitle,
  Text,
  Card,
  CircledFilter,
  Carousel,
  AnimatedManipulator,
} from '@components';

import { articles, filters } from './mocked';
import { spaces } from '@components/Organisms/Theme/sizes';

import {
  Root,
  GrayedSection,
  Footer,
  FooterHeading,
  FooterItem,
  FooterBlock,
  FooterBlockSocial,
  Section,
  BlogCol,
  BlogColImage,
  BlogLogo,
  BlogTopContainer,
  Circle,
  CardsContainer,
  SuscribeSection,
  FilterContainer,
  Underline,
  ContainerWithPadding,
} from './styles';

export const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <Container id="blog" fluid padding="0" paddingOnLarge="0">
      <Root>
        <Header />
        <ContainerWithPadding>
          <BlogTopContainer>
            <BlogLogo>
              <Circle>
                <SVG style={{ fill: 'black' }} name="logo" />
              </Circle>
            </BlogLogo>
            <BlogCol>
              <MediumTitle>
                YELLOW<strong>BLOG</strong>
              </MediumTitle>
              <Text margin={`${spaces.sm} 0 0 0`}>
                Bem vindo ao <Underline>Yellowblog</Underline>, ele foi feito
                com muito carinho para que você se sentisse em casa como em uma
                página do Instagram. relevante em textos pequenos e de fácil
                navegacão.
              </Text>
            </BlogCol>
            <BlogColImage
              style={{ position: 'relative', alignItems: 'flex-end' }}
            >
              <AnimatedManipulator
                dataAosOffset="100"
                name="three-line-icon"
                type="three-line-icon-yellow"
              />
              <Card
                width="100%"
                text="A dinâmica da comunicação"
                img="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"
              />
            </BlogColImage>
          </BlogTopContainer>

          <FilterContainer>
            <Carousel carouselNumberOfItems={filters.length}>
              {filters.map(filter => (
                <CircledFilter key={uid(filter)} text={filter.text} />
              ))}
            </Carousel>
          </FilterContainer>

          <CardsContainer>
            {articles.map((item, index) => (
              <Card key={uid(item, index)} text={item.text} img={item.image} />
            ))}
          </CardsContainer>

          <SuscribeSection>
            <MediumTitle>
              QUER RECEBER <strong>MAIS CONTEÚDOS</strong>
            </MediumTitle>
          </SuscribeSection>
        </ContainerWithPadding>
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
