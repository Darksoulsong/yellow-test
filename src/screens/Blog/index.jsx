import React, { useEffect } from 'react';
import { uid } from 'react-uid';
import AOS from 'aos';

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

export const Blog = ({ posts, categories, featuredList }) => {
  const { isMedium } = useScreenWidth();
  const cards = !isMedium ? posts.slice(0, 8) : posts;
  const featuredPost = featuredList[0];

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
              mdWidth="100%"
              text={featuredPost.title}
              img={featuredPost.image}
              slug={featuredPost.slug}
            />
            <ColImgSVGContainer>
              <SVG name="three-line-thicker-icon" />
            </ColImgSVGContainer>
          </BlogColImage>
        </BlogTopContainer>

        <FilterContainer>
          <Carousel carouselNumberOfItems={categories.length}>
            {categories.map(category => (
              <CircledFilter key={uid(category)} text={category} />
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
              text={item.title}
              img={item.image}
              slug={item.slug}
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
