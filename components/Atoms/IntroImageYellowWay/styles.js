import styled from 'styled-components';

export const YellowWayIntroImageRoot = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 630px;
  max-width: 1033px;
`;

export const ImageHolder = styled.div`
  position: relative;
  width: 37vw;
  margin: 0 auto;
  max-width: 538px;
`;

export const Image = styled.img`
  max-width: 540px;
  width: 100%;
  height: auto;
`;

const Item = styled.h3`
  position: absolute;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  /* font-size: 3.2rem; */
  /* font-size: 2.7vw; */
  font-size: 2.2vw;
  letter-spacing: 0.08rem;

  strong {
    font-weight: 800;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    font-size: 3.2rem;
  }
`;
export const Item1 = styled(Item)`
  left: 0.7%;
  top: 2.3%;
`;
export const Item2 = styled(Item)`
  left: 0%;
  top: 56%;
`;
export const Item3 = styled(Item)`
  left: 0%;
  top: 63.7%;
`;
export const Item4 = styled(Item)`
  left: 12%;
  top: 67.7%;
`;
export const Item5 = styled(Item)`
  top: 9%;
  left: 23.9%;
`;
export const Item6 = styled(Item)`
  left: 0.4%;
  top: 76%;
`;

const Arrow = styled.span`
  position: absolute;

  svg {
    width: 10vw;
    height: auto;
  }
`;
export const Arrow1 = styled(Arrow)`
  left: 51.4%;
  top: 45.8%;

  svg {
    max-width: 118px;
    width: 8.6vw;
  }
`;
export const Arrow2 = styled(Arrow)`
  right: 0%;

  svg {
    width: 8.2vw;
    max-width: 97px;
  }
`;
export const Arrow3 = styled(Arrow)`
  right: 0%;
  top: -1.4%;

  svg {
    width: 4.3vw;
    max-width: 65px;
  }
`;
export const Arrow4 = styled(Arrow)`
  left: 0;
  top: 0;

  svg {
    width: 7.9vw;
    max-width: 94px;
  }
`;
export const Arrow5 = styled(Arrow)`
  left: 0;
  top: 14.5%;

  svg {
    width: 3.8vw;
    max-width: 52px;
  }
`;
export const Arrow6 = styled(Arrow)`
  left: 4%;
  top: 0%;

  svg {
    width: 10vw;
    max-width: 148px;
  }
`;

const BlockItem = styled.div`
  position: absolute;
`;

export const BlockItem1 = styled(BlockItem)`
  width: 21.3vw;
  height: 7.3vw;
  top: 2.4%;
  left: -44.2%;
  max-width: 320px;
  max-height: 123px;
`;

export const BlockItem2 = styled(BlockItem)`
  width: 20.1vw;
  height: 6vw;
  top: 47%;
  left: -57.5%;
  max-width: 320px;
  max-height: 130px;
`;

export const BlockItem3 = styled(BlockItem)`
  width: 22.8vw;
  height: 7.5vw;
  top: 82.1%;
  left: -53.6%;
  max-width: 353px;
  max-height: 104px;
`;

export const BlockItem4 = styled(BlockItem)`
  width: 16.5vw;
  height: 7.1vw;
  top: 85.2%;
  right: -11.4%;
  max-width: 204px;
  max-height: 108px;
`;

export const BlockItem5 = styled(BlockItem)`
  width: 20vw;
  height: 4.1vw;
  top: 14.2%;
  right: -48.5%;
  max-width: 296px;
  max-height: 50px;
`;

export const BlockItem6 = styled(BlockItem)`
  width: 25vw;
  height: 11.2vw;
  top: 52.9%;
  right: -68.5%;
  max-width: 395px;
  max-height: 168px;
`;
