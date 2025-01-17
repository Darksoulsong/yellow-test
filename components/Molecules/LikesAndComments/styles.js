import styled, { css } from 'styled-components';
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
  max-height: 90px;
  overflow-y: auto;
  -webkit-overflow-scrolling: auto !important;
  margin-bottom: ${({ theme }) => theme.spaces.lg};
`;

export const LikesSection = styled.div`
  margin-top: ${({ theme }) => theme.spaces.md};
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-right: ${({ theme }) => theme.spaces.sm};
    ${({ like }) =>
      like &&
      css`
        .heart-fill {
          fill: red;
        }
      `}
  }
`;

export const LikesText = styled(Text)`
  font-weight: 700;
  user-select: none;
  margin: ${({ theme }) => `${theme.spaces.xsm} 0 ${theme.spaces.md} 0`};
`;

export const Comment = styled.div`
  display: flex;
  margin: ${({ theme }) => `0 0 ${theme.spaces.sm} 0`};
`;

export const CommentUser = styled.strong`
  margin-right: ${({ theme }) => theme.spaces.xsm};
  user-select: none;
`;

export const SVGManipulator = styled.div`
  display: flex;
  svg {
    .a {
      fill: red;
    }
  }
`;
