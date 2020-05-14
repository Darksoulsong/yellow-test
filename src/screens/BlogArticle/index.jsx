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
  AnimatedManipulator,
  Button,
  LikesAndComments,
} from '@components';

import { articles, mockedHTML } from './mocked';
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
  ContainerWithPadding,
  CustomField,
  SuscribeHolder,
  Image,
  ContentContainer,
  InteractSection,
} from './styles';

export const BlogArticle = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Container fluid padding="0" paddingOnLarge="0">
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
              <Text margin={`${spaces.xsm} 0 0 0`}>Daniel Monteiro</Text>
            </BlogCol>
          </BlogTopContainer>

          <BlogColImage>
            <AnimatedManipulator
              dataAosOffset="100"
              name="three-line-icon"
              type="three-line-icon-yellow"
            />
            <Image src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
          </BlogColImage>

          <ContentContainer dangerouslySetInnerHTML={{ __html: mockedHTML }} />

          <InteractSection>
            <LikesAndComments />
          </InteractSection>

          <CardsContainer>
            {articles.map((item, index) => (
              <Card
                styling={{ padding: `0 ${spaces.sm}` }}
                key={uid(item, index)}
                text={item.text}
                img={item.image}
              />
            ))}
          </CardsContainer>

          <SuscribeSection>
            <MediumTitle align="center">
              QUER RECEBER <strong>MAIS CONTEÚDOS</strong>
            </MediumTitle>
            <SuscribeHolder>
              <CustomField />
              <Button>inscrever</Button>
            </SuscribeHolder>
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
