import styled from 'styled-components';
import { Text } from '@components';

export const LikesAndCommentsContainer = styled.div`
  padding: ${({ theme }) => theme.spaces.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0;
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
  margin-bottom: ${({ theme }) => theme.spaces.md};
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
  max-height: 125px;
  overflow-y: auto;
  margin-bottom: ${({ theme }) => theme.spaces.lg};
`;

export const LikesSection = styled.div`
  margin: ${({ theme }) => `${theme.spaces.md} 0`};
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-right: ${({ theme }) => theme.spaces.sm};
  }
`;

export const LikesText = styled(Text)`
  font-weight: 700;
  margin: ${({ theme }) => `${theme.spaces.xsm} 0 0 0`};
`;

export const Comment = styled.div`
  display: flex;
  margin: ${({ theme }) => `0 0 ${theme.spaces.sm} 0`};
`;

export const CommentUser = styled.strong`
  margin-right: ${({ theme }) => theme.spaces.xsm};
  user-select: none;
`;
