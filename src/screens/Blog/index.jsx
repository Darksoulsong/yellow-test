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
  Button,
  Pagination,
  DefaultLayout,
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
  CustomField,
  SuscribeHolder,
} from './styles';

export const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <DefaultLayout>
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
              Bem vindo ao <Underline>Yellowblog</Underline>, ele foi feito com
              muito carinho para que você se sentisse em casa como em uma página
              do Instagram. relevante em textos pequenos e de fácil navegacão.
            </Text>
          </BlogCol>
          <BlogColImage>
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
            <Card
              styling={{ padding: `0 ${spaces.sm}` }}
              key={uid(item, index)}
              text={item.text}
              img={item.image}
            />
          ))}
        </CardsContainer>

        <Pagination
          pages={10}
          currentPage={1}
          onClick={() => {}}
          setCurrentPage={() => {}}
        />

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
    </DefaultLayout>
  );
};
