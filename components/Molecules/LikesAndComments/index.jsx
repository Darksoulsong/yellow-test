import React, { useState, useEffect, useRef } from 'react';
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
}) => {
  const inputRef = useRef(null);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const enableComment = () => {
    setShowCommentInput(true);
  };

  useEffect(() => {
    if (showCommentInput) {
      inputRef.current.focus();
    }
  }, [showCommentInput]);

  return (
    <LikesAndCommentsContainer>
      <LikesSection>
        <SVG name="interact-like" />
        <SVG name="interact-comment" onClick={enableComment} />
        <SVG name="interact-share" />
        <LikesText>{likes} curtidas</LikesText>
      </LikesSection>
      <CommentSection>
        {showCommentInput && (
          <CommentPostContainer>
            <CommentPoster
              ref={inputRef}
              placeholder="Adicione um comentário..."
            />
            <CommentButton>Publicar</CommentButton>
          </CommentPostContainer>
        )}
        <CommentsContainer>
          {comments.map((item, index) => (
            <Comment key={uid(index, item.user)}>
              <CommentUser>{item.user}</CommentUser>
              {item.comment}
            </Comment>
          ))}
        </CommentsContainer>
      </CommentSection>
    </LikesAndCommentsContainer>
  );
};
