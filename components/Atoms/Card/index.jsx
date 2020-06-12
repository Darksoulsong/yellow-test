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
const routeToContent = slug => {
  routeTo(`/blog/${slug}`);
};

export const Card = ({
  text,
  img,
  slug,
  width,
  mdWidth,
  likes = 0,
  comments = 0,
  padding,
  paddingDesktop,
}) => (
  <CardContainer
    padding={padding}
    paddingDesktop={paddingDesktop}
    width={width}
    mdWidth={mdWidth}
    onClick={() => routeToContent(slug)}
  >
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
