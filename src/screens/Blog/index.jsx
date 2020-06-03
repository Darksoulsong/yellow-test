import React, { useEffect } from 'react';
import { uid } from 'react-uid';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  SVG,
  MediumTitle,
  Card,
  CircledFilter,
  Carousel,
  Pagination,
  Suscribe,
  DefaultLayout,
} from '@components';

import { articles, filters } from './mocked';
import { spaces } from '@components/Organisms/Theme/sizes';
import { useScreenWidth } from '@hooks';

import {
  BlogColText,
  BlogColResponsive,
  BlogColImage,
  BlogLogo,
  BlogTopContainer,
  Circle,
  CardsContainer,
  FilterContainer,
  Underline,
  ContainerWithPadding,
  CustomText,
  ColImgSVGContainer,
} from './styles';

export const Blog = () => {
  const { isMedium } = useScreenWidth();
  const cards = !isMedium ? articles.slice(0, 8) : articles;
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
          <BlogColResponsive>
            <MediumTitle>
              YELLOW<strong>BLOG</strong>
            </MediumTitle>
          </BlogColResponsive>
          <BlogColResponsive width="100%">
            <CustomText margin={`${spaces.sm} 0 0 0`}>
              <strong>Bem vindo</strong> ao <Underline>Yellowblog</Underline>,
              ele foi feito com muito carinho para que você se sentisse em casa
              como em uma página do Instagram. Conteúdo relevante em textos
              pequenos e de fácil navegacão.
            </CustomText>
          </BlogColResponsive>
          <BlogColText>
            <MediumTitle>
              YELLOW<strong>BLOG</strong>
            </MediumTitle>
            <CustomText margin={`${spaces.sm} 0 0 0`}>
              <strong>Bem vindo</strong> ao <Underline>Yellowblog</Underline>,
              ele foi feito com muito carinho para que você se sentisse em casa
              como em uma página do Instagram.
              <br />
              Conteúdo relevante em textos pequenos e de fácil navegacão.
            </CustomText>
          </BlogColText>
          <BlogColImage>
            <Card
              width="100%"
              mdWidth="80%"
              text="A dinâmica de comunicação"
              img="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"
            />
            <ColImgSVGContainer>
              <SVG name="three-line-thicker-icon" />
            </ColImgSVGContainer>
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
          {cards.map((item, index) => (
            <Card
              width="50%"
              mdWidth="33.33%"
              padding={`${spaces.xsm}`}
              paddingDesktop={`${spaces.xsm} 1%`}
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

        <Suscribe padding={`${spaces.sm} 0 ${spaces.md} 0`} />
      </ContainerWithPadding>
    </DefaultLayout>
  );
};
