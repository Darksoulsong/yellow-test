import styled from 'styled-components';

export const CommentSection = styled.div`
  display: flex;
  margin: ${({ theme }) => `${theme.spaces.sm} 0`};
  width: 100%;
`;

export const CommentPostContainer = styled.div`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => `${theme.spaces.sm}`};
  border: ${({ theme }) => `1px solid ${theme.colors.grayLight}`};
`;
export const CommentPoster = styled.input`
  width: 90%;
`;
export const CommentButton = styled.div`
  width: 10%;
  font-weight: 700;
  cursor: pointer;
`;
export const CommentsContainer = styled.div``;
export const LikesSection = styled.div``;
