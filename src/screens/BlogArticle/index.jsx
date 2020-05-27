import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { uid } from 'react-uid';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  SVG,
  Card,
  LikesAndComments,
  Suscribe,
  DefaultLayout,
  SliderMultiple,
} from '@components';
import { useScreenWidth } from '@hooks';

import { articles, mockedHTML } from './mocked';
import { spaces } from '@components/Organisms/Theme/sizes';
import { breakpoints } from '@components/Organisms/Theme/breakpoints';

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

export const BlogArticle = () => {
  const [cardsShownAtSlider, setCardsShownAtSlider] = useState(2);
  const { screenWidth } = useScreenWidth();

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    const mediumResolution = breakpoints.medium.match(/\d+/)[0];
    if (screenWidth > mediumResolution) {
      setCardsShownAtSlider(3);
    } else {
      setCardsShownAtSlider(2);
    }
  }, [screenWidth]);

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
            <CustomTitle>
              A DINÂMICA DE <strong>COMUNICAÇÃO</strong>
            </CustomTitle>
            <CustomText margin={`${spaces.xsm} 0 0 0`}>
              Daniel Monteiro
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
          <Image src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
        </BlogColImage>

        <ContentContainer dangerouslySetInnerHTML={{ __html: mockedHTML }} />

        <LikesAndComments />

        <SliderContainer>
          <SliderMultiple
            itemsShowing={cardsShownAtSlider}
            specialLgMargin="0 -1%"
          >
            {articles.map((item, index) => (
              <Card
                padding="0 1%"
                width="50%"
                mdWidth="33.33%"
                key={uid(item, index)}
                text={item.text}
                img={item.image}
              />
            ))}
          </SliderMultiple>
        </SliderContainer>

        <Suscribe padding={`${spaces.xlg} 0`} />
      </ContainerWithPadding>
    </DefaultLayout>
  );
};
