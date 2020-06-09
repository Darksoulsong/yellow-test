import styled from 'styled-components';

export const ProductsRoot = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.lg};

  button {
    height: 32px;
    font-size: 0.9rem;
    letter-spacing: 0.08rem;
    padding: 0 20px;
    border-radius: 8px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    button {
      height: 87px;
      font-size: 2.1rem;
      padding: 0 40px;
      border-radius: 16px;
    }
  }
`;

export const Heading = styled.h2`
  font-weight: 300;
  text-align: center;
  font-size: 3.2rem;
  margin-bottom: ${({ theme }) => theme.spaces.lg};

  svg {
    width: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 4.9rem;
    margin-bottom: ${({ theme }) => theme.spaces.xlg};

    svg {
      width: 20px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 6.6rem;
  }
`;

export const YellowProductsHeading = styled(Heading)`
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    svg {
      position: relative;
      width: 25px;
      top: -15px;
      left: -5px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-bottom: -${({ theme }) => theme.spaces.md};

    svg {
      width: 40px;
      top: -25px;
    }
  }
`;

export const YellowPlusHeading = styled(Heading)`
  position: relative;
  margin: ${({ theme }) => `${theme.spaces.md} 0 ${theme.spaces.md}`};

  svg {
    position: absolute;
    width: 80px;
    height: 80px;
    transform: translate(-60px, -20px);

    path {
      stroke: none !important;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    svg {
      width: 150px;
      height: 150px;
      transform: translate(-108px, -50px);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    svg {
      width: 170px;
      height: 170px;
      transform: translate(-128px, -50px);
    }
  }
`;

export const ProductsSection = styled.section`
  padding: ${({ theme }) => theme.spaces.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => theme.spaces.lgh};
  }
`;

export const ProductsSectionMain = styled(ProductsSection)`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-top: ${({ theme }) => theme.spaces.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-direction: column-reverse;
    height: 75vw;
  }
`;
