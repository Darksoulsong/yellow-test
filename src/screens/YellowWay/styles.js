import styled from 'styled-components';

export const YellowWayRoot = styled.div``;

export const YellowWayIntro = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spaces.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.spaces.hg};
  }
`;

export const Subheading = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spaces.lg};

  strong {
    font-weight: 600;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 3.5rem;
  }
`;

export const HashtagHeading = styled(Subheading)`
  font-size: 3.5rem;
  margin-bottom: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 4rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 5rem;
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
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => theme.spaces.lgh};
  }
`;

export const YellowSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.yellowDarker};
  margin-bottom: ${({ theme }) => theme.spaces.hg};
  button {
    margin: ${({ theme }) => `${theme.spaces.md} 0`};
  }
`;

export const Box = styled.div`
  max-width: 336px;
  max-height: 438px;
  margin: 0 auto;
  padding: ${({ theme }) =>
    `${theme.spaces.sm} ${theme.spaces.sm} ${theme.spaces.lg} ${theme.spaces.sm}`};
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 50px;
`;

export const BoxFooter = styled.div`
  padding: ${({ theme }) => `${theme.spaces.sm} 0 0 ${theme.spaces.sm}`};
  text-align: left;
`;

export const Container = styled.div`
  margin: ${({ theme }) => theme.spaces.md};
  display: flex;
  justify-content: center;
  /* * {
    max-width: 500px;
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: ${({ theme }) => `${theme.spaces.xlg} 0`};
  }
`;

export const TextHolder = styled.div`
  width: 255px;

  p {
    /* font-family: 'Myriad Pro Regular', sans-serif; */
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
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
