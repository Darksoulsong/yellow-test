import styled from 'styled-components';
import { Text } from '@components';

export const LikesAndCommentsContainer = styled.div`
  padding: ${({ theme }) => theme.spaces.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => `0 ${theme.spaces.sm}`};
  }
`;

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
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
  width: fit-content;
  margin-left: 20px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
`;

export const CommentsContainer = styled.div`
  min-height: 50px;
  max-height: 200px;
  overflow-y: auto;
`;

export const LikesSection = styled.div`
  margin: ${({ theme }) => `${theme.spaces.sm} 0`};
`;

export const LikesText = styled(Text)`
  font-weight: 700;
`;

export const Comment = styled.div`
  display: flex;
  margin: ${({ theme }) => `${theme.spaces.sm} 0`};
`;

export const CommentUser = styled.strong`
  margin-right: ${({ theme }) => theme.spaces.xsm};
`;
