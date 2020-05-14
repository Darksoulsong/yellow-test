import styled from 'styled-components';

export const CommentSection = styled.div`
  display: flex;
  margin: ${({ theme }) => `${theme.spaces.sm} 0`};
  width: 100%;
`;

export const CommentPostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spaces.sm}`};
  border: ${({ theme }) => `1px solid ${theme.colors.grayLight}`};
`;
export const CommentPoster = styled.input`
  width: 80%;
`;
export const CommentButton = styled.div`
  width: 20%;
`;
export const CommentsContainer = styled.div``;
export const LikesSection = styled.div``;
