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
  AnimatedManipulator,
  Pagination,
  Suscribe,
  DefaultLayout,
} from '@components';

import { articles, filters } from './mocked';
import { spaces } from '@components/Organisms/Theme/sizes';

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
            <ColImgSVGContainer>
              <AnimatedManipulator
                dataAosOffset="100"
                name="three-line-icon"
                type="three-line-icon-yellow"
              />
            </ColImgSVGContainer>
            <Card
              width="65%"
              mdWidth="90%"
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
              width="50%"
              mdWidth="33.33%"
              padding={`${spaces.xsm} 1%`}
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

        <Suscribe
          placeholder="email"
          padding={`${spaces.sm} 0 ${spaces.md} 0`}
        />
      </ContainerWithPadding>
    </DefaultLayout>
  );
};
