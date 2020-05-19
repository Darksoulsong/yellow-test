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
  width: 37.2vw;
  height: 42vw;
  margin: 0 auto;
  max-width: 538px;
  max-height: 612px;
`;

export const Image = styled.img`
  max-width: 540px;
  width: 100%;
  height: auto;
`;

export const ImageItem1 = styled.span`
  transition: 0.3s ease-in-out;
  transition-property: transform, z-index;
  position: absolute;
  left: 13.4%;
  top: 71.1%;
  width: 12.2vw;
  height: 15.7vw;
  overflow: hidden;
  max-width: 177px;
  max-height: 229px;
  z-index: 6;
  transform: scale(1);

  ${Image} {
    position: relative;
    top: 0;
    left: 0;
  }

  &:hover {
    z-index: 8;
    transform: scale(1.1);
  }
`;

export const ImageItem2 = styled(ImageItem1)`
  height: 12.7vw;
  top: 0;
  left: 18%;
  width: 18.9vw;
  max-width: 274px;
  max-height: 236px;

  ${Image} {
    top: 0;
    left: 0;
  }
`;

export const ImageItem3 = styled(ImageItem1)`
  left: 68.8%;
  top: 7.4%;
  width: 8vw;
  height: 8.3vw;
  max-width: 115px;
  max-height: 121px;

  ${Image} {
    top: 0;
    left: 0;
  }
`;

export const ImageItem4 = styled(ImageItem1)`
  left: 0vw;
  top: 30%;
  width: 17.2vw;
  height: 17.4vw;
  overflow: hidden;
  max-width: 251px;
  max-height: 253px;
  z-index: 5;
`;

export const ImageItem5 = styled(ImageItem1)`
  left: 46.1%;
  top: 27.1%;
  width: 20vw;
  height: 16.5vw;
  overflow: hidden;
  max-width: 288px;
  max-height: 237px;
`;

export const ImageItem6 = styled(ImageItem1)`
  left: 46.1%;
  top: 65.7%;
  width: 16.2vw;
  height: 9.5vw;
  overflow: hidden;
  max-width: 237px;
  max-height: 137px;
  z-index: 7;
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
    font-weight: 600;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largest}) {
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
    width: 6vw;
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
  top: 30%;

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
  width: 20.8vw;
  height: 6vw;
  top: 47%;
  left: -60%;
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
  top: 90.2%;
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
