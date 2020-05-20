import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { uid } from 'react-uid';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  SVG,
  MediumTitle,
  Text,
  Card,
  AnimatedManipulator,
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
            <MediumTitle>
              YELLOW<strong>BLOG</strong>
            </MediumTitle>
            <Text margin={`${spaces.xsm} 0 0 0`}>Daniel Monteiro</Text>
          </BlogCol>
          <Link href="/blog">
            <BlogBack>VOLTAR PARA O FEED</BlogBack>
          </Link>
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
