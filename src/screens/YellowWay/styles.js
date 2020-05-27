import styled from 'styled-components';

const getDesktopFirstMediaQuery = mediaQueryString => {
  const toNumber = +mediaQueryString.replace('px', '') - 1;
  return toNumber + 'px';
};

export const YellowWayRoot = styled.div``;

export const YellowWayIntro = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spaces.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: ${({ theme }) => theme.spaces.hg};
  }
`;

export const Subheading = styled.h2`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 25px;

  strong {
    font-weight: 600;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 3.5rem;
    margin-bottom: ${({ theme }) => theme.spaces.lg};
  }
`;

export const HashtagHeading = styled(Subheading)`
  font-size: 3.2rem;
  margin-bottom: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 5rem;
    margin-bottom: 50px;
  }
`;

export const Top = styled.div`
  svg path {
    fill: transparent;
  }
`;

export const Section = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spaces.md};
  padding-top: ${({ theme }) => theme.spaces.sm};
  padding-bottom: ${({ theme }) => theme.spaces.lg};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => theme.spaces.lgh};
  }
`;

export const YellowSection = styled(Section)`
  padding-top: ${({ theme }) => theme.spaces.lg};
  background-color: ${({ theme }) => theme.colors.yellow};
  margin: ${({ theme }) => theme.spaces.sm};
  margin-bottom: ${({ theme }) => theme.spaces.lgh};

  @media (max-width: ${({ theme }) =>
      getDesktopFirstMediaQuery(theme.breakpoints.large)}) {
    button {
      margin-bottom: 0;
      height: 40px;
      font-size: 1.1rem;
      padding: 0 15px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 0;
    margin: ${({ theme }) => theme.spaces.md};
    margin-bottom: ${({ theme }) => theme.spaces.xlg};

    button {
      margin: ${({ theme }) => `${theme.spaces.md} 0`};
    }
  }
`;

export const Box = styled.div`
  width: 170px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 25px;
  padding: 8px 8px 25px 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) =>
      `${theme.spaces.sm} ${theme.spaces.sm} ${theme.spaces.lg} ${theme.spaces.sm}`};
    width: 336px;
    margin-bottom: 50px;
    max-height: 438px;
    max-width: 336px;
  }
`;

export const BoxFooter = styled.div`
  text-align: left;
  padding: 8px;

  svg {
    width: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => `${theme.spaces.sm} 0 0 ${theme.spaces.sm}`};
    svg {
      width: auto;
    }
  }
`;

export const Container = styled.div`
  margin: ${({ theme }) => theme.spaces.md};
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => `${theme.spaces.xlg} 0`};
  }
`;

export const TextHolder = styled.div`
  width: 290px;
  margin: 25px 0;

  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 390px;

    p {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;

    p {
      font-size: 2.9rem;
      line-height: 3.7rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 808px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    width: 1085px;

    p {
      font-size: 3.9rem;
      line-height: 4.7rem;
    }
  }
`;
