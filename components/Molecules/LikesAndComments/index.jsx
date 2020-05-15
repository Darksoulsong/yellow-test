import React from 'react';
import { uid } from 'react-uid';
import { SVG } from '@components';
import {
  CommentSection,
  CommentPostContainer,
  CommentPoster,
  CommentButton,
  CommentsContainer,
  LikesSection,
  LikesAndCommentsContainer,
  LikesText,
  Comment,
  CommentUser,
} from './styles';

const mockedComments = [
  { user: 'matthias', comment: 'Gostei muito' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
  { user: 'gabriella', comment: 'Que legal' },
];

export const LikesAndComments = ({
  comments = mockedComments,
  likes = '200',
}) => (
  <LikesAndCommentsContainer>
    <LikesSection>
      <SVG name="interact-like" />
      <SVG name="interact-comment" />
      <SVG name="interact-share" />
      <LikesText>{likes} curtidas</LikesText>
    </LikesSection>
    <CommentSection>
      <CommentPostContainer>
        <CommentPoster placeholder="Adicione um comentário..." />
        <CommentButton>Publicar</CommentButton>
      </CommentPostContainer>
      <CommentsContainer>
        {comments.map((item, key) => (
          <Comment key={uid(key, item)}>
            <CommentUser>{item.user}</CommentUser>
            {item.comment}
          </Comment>
        ))}
      </CommentsContainer>
    </CommentSection>
  </LikesAndCommentsContainer>
);
