import React, { useEffect } from 'react';
import { uid } from 'react-uid';
import AOS from 'aos';
import { PAGINATION_ITEMS_PER_PAGE } from '@config';
import { DocumentTitle } from '@components';
import { routeTo } from '@utils';

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

export const Blog = ({
  posts,
  totalPosts,
  categories,
  featuredList,
  documentTitle,
  pageNumber,
  categorySlug,
}) => {
  const { isMedium } = useScreenWidth();
  const cards = !isMedium ? posts.slice(0, 8) : posts;
  const featuredPost = featuredList && featuredList[0];

  const onPaginationClick = nextPage => {
    let route = '/blog';
    if (categorySlug) {
      route += `/${categorySlug}/${nextPage}`;
    } else {
      route += `/${nextPage}`;
    }

    if (nextPage !== pageNumber) {
      routeTo(route);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <DefaultLayout>
      <DocumentTitle>{documentTitle}</DocumentTitle>
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
            {featuredPost && (
              <>
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
              </>
            )}
          </BlogColImage>
        </BlogTopContainer>

        {categories && (
          <FilterContainer>
            <Carousel carouselNumberOfItems={categories.length}>
              {categories.map(category => (
                <CircledFilter
                  key={uid(category)}
                  text={category.category}
                  slug={category.categorySlug}
                />
              ))}
            </Carousel>
          </FilterContainer>
        )}

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
          pages={Math.ceil(totalPosts / PAGINATION_ITEMS_PER_PAGE)}
          currentPage={+pageNumber}
          onClick={onPaginationClick}
          setCurrentPage={() => {}}
        />

        <Suscribe padding={`${spaces.sm} 0 ${spaces.md} 0`} />
      </ContainerWithPadding>
    </DefaultLayout>
  );
};

Blog.defaultProps = {
  documentTitle: 'Blog',
};
