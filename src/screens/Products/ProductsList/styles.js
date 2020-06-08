import styled from 'styled-components';

export const ProductsListRoot = styled.div`
  padding: ${({ theme }) => `0px ${theme.spaces.sm}`};
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 400px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
    flex-direction: row;
    justify-content: center;

    ul:first-of-type {
      margin-right: 45px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    width: 100%;

    ul:first-of-type {
      margin-right: 90px;
    }
  }
`;

export const ProductsList = styled.ul``;

export const ProductsListItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    width: 36px;
    margin-right: ${({ theme }) => theme.spaces.sm};
  }

  p {
    font-size: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-bottom: ${({ theme }) => theme.spaces.md};

    svg {
      width: 48px;
      height: 48px;
      /* margin-right: ${({ theme }) => theme.spaces.md}; */
    }

    p {
      font-size: 2.3rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    margin-bottom: ${({ theme }) => theme.spaces.md};

    svg {
      width: 72px;
      height: 72px;
      margin-right: ${({ theme }) => theme.spaces.md};
    }

    p {
      font-size: 2.8rem;
    }
  }
`;
