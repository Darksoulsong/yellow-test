import styled from 'styled-components';

export const ProductsNetworkRoot = styled.div``;

export const ProductsNetworkHeading = styled.h2`
  font-weight: 300;
  font-size: 3rem;

  strong {
    font-weight: 600;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 4.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    font-size: 6.6rem;
  }
`;

export const ProductsNetworkHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('images/products-background-gradient.jpg') no-repeat -320px 0;
  background-size: cover;
  width: 100%;
  height: 260px;

  &:before,
  &:after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('images/products-background-detail.png') no-repeat 0 0;
    background-size: 100%;
  }

  &:before {
    content: '';
    left: 0;
    top: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    background-size: inherit;

    &:after {
      content: '';
      right: 0;
      top: 0;
      transform: scaleX(-1);
    }

    &:before,
    &:after {
      background-size: 42%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    background-position: center center;
    position: relative;
    width: calc(100% + 120px);
    left: -60px;
    height: 368px;

    &:before,
    &:after {
      background-size: 37%;
    }
  }
`;

export const ProductsNetworkContent = styled.div`
  width: 260px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spaces.lg} 0`};

  p {
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 86%;

    p {
      font-size: 3.1rem;
      line-height: 3.9rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    max-width: 1000px;

    padding: ${({ theme }) => `${theme.spaces.xlg} 0`};

    p {
      font-size: 4.1rem;
      line-height: 4.9rem;
    }
  }
`;

export const ProductsNetworkFooter = styled.div`
  display: flex;
  justify-content: center;
`;
