import React, { useEffect } from 'react';
import { uid } from 'react-uid';
import { useRouter } from 'next/router';
import AOS from 'aos';
import { PAGINATION_ITEMS_PER_PAGE } from '@config';
import { DocumentTitle, Button } from '@components';
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

const sortCategories = (list, categorySlug) => {
  if (!list.length) {
    return [];
  }

  let sortedList = list.sort((a, b) => {
    if (a.categorySlug < b.categorySlug) {
      return -1;
    }
    if (a.categorySlug > b.categorySlug) {
      return 1;
    }
    return 0;
  });

  if (categorySlug) {
    const activeCategory = list.find(
      item => item.categorySlug === categorySlug
    );
    sortedList = list.filter(item => item.categorySlug !== categorySlug);
    sortedList.unshift(activeCategory);
  }

  return sortedList;
};

export const Blog = ({
  totalPosts,
  categories,
  features,
  posts,
  documentTitle,
  pageNumber,
  categorySlug,
}) => {
  const router = useRouter();
  const { isMedium } = useScreenWidth();
  const cards = !isMedium ? posts.slice(0, 8) : posts;
  const featuresPost = features && features[0];
  const paginationTotalPages = Math.ceil(
    totalPosts / PAGINATION_ITEMS_PER_PAGE
  );
  const sortedCategories = sortCategories(categories, categorySlug);

  const onPaginationClick = nextPage => {
    let route = '/blog';
    if (categorySlug) {
      route += `/categorias/${categorySlug}/${nextPage}`;
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
    <DefaultLayout isLoading={router.isFallback}>
      <DocumentTitle>{documentTitle}</DocumentTitle>
      <ContainerWithPadding>
        <BlogTopContainer>
          <Button version="unstyled" onClick={() => routeTo('/blog')}>
            <BlogLogo title="Voltar para o feed">
              <Circle>
                <SVG style={{ fill: 'black' }} name="logo" />
              </Circle>
            </BlogLogo>
          </Button>
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
            {featuresPost && (
              <>
                <Card
                  width="100%"
                  mdWidth="100%"
                  text={featuresPost.title}
                  img={featuresPost.image}
                  slug={featuresPost.slug}
                />

                <ColImgSVGContainer>
                  <SVG name="three-line-thicker-icon" />
                </ColImgSVGContainer>
              </>
            )}
          </BlogColImage>
        </BlogTopContainer>

        {sortedCategories && (
          <FilterContainer>
            <Carousel carouselNumberOfItems={sortedCategories.length}>
              {sortedCategories.map(item => (
                <CircledFilter
                  key={uid(item)}
                  text={item.category}
                  slug={item.categorySlug}
                  active={categorySlug === item.categorySlug}
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

        {paginationTotalPages > 1 && (
          <Pagination
            pages={paginationTotalPages}
            currentPage={+pageNumber}
            onClick={onPaginationClick}
            setCurrentPage={() => {}}
          />
        )}

        <Suscribe padding={`${spaces.xlg} 0`} />
      </ContainerWithPadding>
    </DefaultLayout>
  );
};

Blog.defaultProps = {
  posts: [],
  totalPosts: 0,
  categories: [],
  features: [],
  highlights: [],
  documentTitle: 'Blog',
  pageNumber: 1,
  categorySlug: null,
};
