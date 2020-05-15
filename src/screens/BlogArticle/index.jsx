import React, { useEffect } from 'react';
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
  Slider,
} from '@components';

import { articles, mockedHTML } from './mocked';
import { spaces } from '@components/Organisms/Theme/sizes';

import {
  BlogCol,
  BlogColImage,
  BlogLogo,
  BlogTopContainer,
  Circle,
  CardsContainer,
  ContainerWithPadding,
  Image,
  ContentContainer,
  SliderContainer,
} from './styles';

export const BlogArticle = () => {
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

        <LikesAndComments />

        <CardsContainer>
          {articles.map((item, index) => (
            <Card
              width="50%"
              mdWidth="33.33%"
              key={uid(item, index)}
              text={item.text}
              img={item.image}
            />
          ))}
        </CardsContainer>

        <Suscribe padding={`${spaces.xlg} 0`} />
      </ContainerWithPadding>
    </DefaultLayout>
  );
};
