import styled from 'styled-components';

export const ProductsIntroLineMobile = styled.div`
  svg {
    position: absolute;
    height: 109vw;
    width: 60vw;
    transform: translate(0vw, -6vw);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const ProductsIntroLine = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: block;
    position: relative;
    z-index: -1;

    svg {
      width: 100vw;
      height: 53vw;
      transform: translate(0vw, 10vw);
    }
  }
`;

export const ProductsIntroImageRoot = styled.div`
  position: relative;
  width: 70vw;
  margin: 0 auto ${({ theme }) => theme.spaces.md};
  transform: translate(3vw, 0vw);
  height: 105vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    transform: scale(0.7);
    transform-origin: left top;
    height: 78vw;
  }
`;

export const ProductsIntroImageHeading = styled.h2`
  position: absolute;
  font-size: 7vw;
  width: 40vw;
  font-weight: 300;
  transform: translate(2vw, 35vw);

  strong {
    font-weight: 600;
  }
`;

export const Block = styled.div`
  position: absolute;

  h2 {
    font-size: 2.5vw;
    letter-spacing: 0.4vw;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0.7vw;
  }

  p {
    font-size: 2.3vw;
    font-weight: 300;
    letter-spacing: 0.1vw;
  }

  svg {
    width: 8vw;
    height: 8vw;

    path {
      fill: ${({ theme }) => theme.colors.yellowDarker};
    }
  }
`;

export const BlockContent = styled.div``;

export const Block1 = styled(Block)`
  transform: translate(-5.2vw, -3.9vw);
  width: 12vw;

  svg {
    display: block;
    margin: 0 auto 5vw;
  }

  ${BlockContent} {
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    transform: translate(-5.2vw, 0.5vw);

    svg {
      width: 8vw;
      transform: translate(0vw, 0vw);
    }
  }
`;

export const Block2 = styled(Block)`
  transform: translate(13.5vw, 7vw);

  ${BlockContent} {
    margin-left: 15vw;
    width: 34vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    transform: translate(19.6vw, 0.3vw);
    display: flex;
    flex-direction: column-reverse;
    width: 22vw;

    svg {
      margin: 0 auto 5vw;
    }

    ${BlockContent} {
      margin-left: 0;
      width: 100%;
      text-align: center;
    }
  }
`;
export const Block3 = styled(Block)`
  transform: translate(0vw, 33vw);
  display: flex;
  width: 49vw;

  svg {
    width: 68px;
    height: 36px;
    margin-left: 2vw;

    path {
      fill: ${({ theme }) => theme.colors.yellowDarker};
      stroke: transparent;
    }
  }

  ${BlockContent} {
    width: 28vw;
    text-align: right;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    transform: translate(38.6vw, 17.3vw);
    display: flex;
    flex-direction: row-reverse;
    width: 50vw;

    h2 {
      margin-top: 0.7vw;
    }

    svg {
      margin: 0 auto 5vw;
      width: 10vw;
      height: 10vw;
    }

    ${BlockContent} {
      display: flex;
      flex-direction: column-reverse;
      transform: translate(-5vw, -14vw);
      text-align: left;
    }
  }
`;
export const Block4 = styled(Block)`
  display: flex;
  width: 53vw;
  transform: translate(18vw, 59vw);

  svg {
    width: 10vw;
    height: 10vw;
  }

  ${BlockContent} {
    width: 31vw;
    margin-left: 6vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    transform: translate(44.4vw, 40.3vw);
    width: 49vw;

    svg {
      margin: 0 auto 5vw;
      width: 10vw;
      height: 10vw;
    }

    ${BlockContent} {
      margin-left: 3vw;
    }
  }
`;
export const Block5 = styled(Block)`
  width: 25vw;
  transform: translate(47.5vw, 79.2vw);

  svg {
    display: block;
    margin: 0 auto;
    margin-bottom: 6vw;
  }

  ${BlockContent} {
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    transform: translate(86.5vw, 51.2vw);
  }
`;
