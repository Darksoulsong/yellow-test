import styled from 'styled-components';

export const Holder = styled.div`
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const HashtagText = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 8vw;
  font-weight: 300;
  letter-spacing: 2.19px;
  user-select: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 7vw;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 6vw;
  }
`;

export const HashtagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  svg {
    width: 3vw;
    height: auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 2vw;
    }
  }
`;
