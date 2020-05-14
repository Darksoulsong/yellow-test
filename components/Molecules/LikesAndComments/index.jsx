import React from 'react';
import { Button, Text } from '@components';
import {
  CommentSection,
  CommentPostContainer,
  CommentPoster,
  CommentButton,
  CommentsContainer,
  LikesSection,
} from './styles';

export const LikesAndComments = () => (
  <>
    <LikesSection>
      {}
      <Text>200 curtidas</Text>
    </LikesSection>
    <CommentSection>
      <CommentPostContainer>
        <CommentPoster />
        <CommentButton>Publicar</CommentButton>
      </CommentPostContainer>
      <CommentsContainer></CommentsContainer>
    </CommentSection>
  </>
);
