import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { uid } from 'react-uid';
import AOS from 'aos';
import { DocumentTitle } from '@components';

import {
  SVG,
  Card,
  LikesAndComments,
  Suscribe,
  DefaultLayout,
  SliderMultiple,
} from '@components';
import { useScreenWidth } from '@hooks';

import { spaces } from '@components/Organisms/Theme/sizes';
import { intBreakpoints } from '@components/Organisms/Theme/breakpoints';

import {
  BlogCol,
  BlogColImage,
  BlogLogo,
  BlogBack,
  BlogTopContainer,
  Circle,
  SliderContainer,
  ContainerWithPadding,
  Image,
  ContentContainer,
  CustomTitle,
  CustomText,
  LinkText,
} from './styles';

export const BlogArticle = ({ post, highlights, documentTitle }) => {
  const [cardsShownAtSlider, setCardsShownAtSlider] = useState(2);
  const { screenWidth } = useScreenWidth();

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    if (screenWidth > intBreakpoints.medium) {
      setCardsShownAtSlider(3);
    } else {
      setCardsShownAtSlider(2);
    }
  }, [screenWidth]);

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
          <BlogCol>
            <CustomTitle>{post.title}</CustomTitle>
            <CustomText margin={`${spaces.xsm} 0 0 0`}>
              {post.author}
            </CustomText>
          </BlogCol>
        </BlogTopContainer>

        <BlogColImage>
          <BlogBack>
            <Link href="/blog">
              <LinkText>VOLTAR PARA O FEED</LinkText>
            </Link>
          </BlogBack>
          <SVG name="three-line-thicker-icon" />
          <Image src={post.image} />
        </BlogColImage>

        <ContentContainer>{post.body}</ContentContainer>

        <LikesAndComments />

        <SliderContainer>
          <SliderMultiple
            itemsShowing={cardsShownAtSlider}
            specialLgMargin="0 -1%"
          >
            {highlights.map((item, index) => (
              <Card
                padding="0 1%"
                width="50%"
                mdWidth="33.33%"
                key={uid(item, index)}
                text={item.title}
                img={item.image}
                slug={item.slug}
              />
            ))}
          </SliderMultiple>
        </SliderContainer>

        <Suscribe padding={`${spaces.xlg} 0`} />
      </ContainerWithPadding>
    </DefaultLayout>
  );
};
