import React from 'react';
import { routeTo } from '@utils';
import { SVG } from '@components';
import {
  CardContainer,
  CardInteractions,
  CardSquare,
  Image,
  CustomText,
  InteractionContainer,
  Interactions,
} from './styles';

// Temporary code
const routeToContent = () => routeTo('/blog-artigo');

export const Card = ({
  text,
  img,
  width,
  mdWidth,
  likes = 0,
  comments = 0,
}) => (
  <CardContainer width={width} mdWidth={mdWidth} onClick={routeToContent}>
    <CardSquare>
      <CardInteractions>
        <Interactions>
          <InteractionContainer>
            <SVG name="interact-like" />
            {likes}
          </InteractionContainer>
          <InteractionContainer>
            <SVG name="interact-comment" />
            {comments}
          </InteractionContainer>
        </Interactions>
      </CardInteractions>
      <Image alt={text} src={img} />
    </CardSquare>
    <CustomText>{text}</CustomText>
  </CardContainer>
);
