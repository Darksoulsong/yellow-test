import styled from 'styled-components';

export const YellowWayIntroImageRoot = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1160px;
  height: 630px;
`;

export const ImageHolder = styled.div`
  position: relative;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Item = styled.h3`
  position: absolute;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: 3.2rem;
  letter-spacing: 0.08rem;

  strong {
    font-weight: 800;
  }
`;
export const Item1 = styled(Item)`
  left: -39.4%;
  top: 1.9%;
`;
export const Item2 = styled(Item)`
  left: -57.9%;
  top: 53%;
`;
export const Item3 = styled(Item)`
  left: -55%;
  top: 90.9%;
`;
export const Item4 = styled(Item)`
  left: 65.6%;
  top: 94.1%;
`;
export const Item5 = styled(Item)`
  right: -49%;
  top: 13.6%;
`;
export const Item6 = styled(Item)`
  right: -70%;
  top: 70.7%;
`;

const Arrow = styled.span`
  position: absolute;

  svg {
    width: 80%;
  }
`;
export const Arrow1 = styled(Arrow)`
  left: -12%;
  top: 9%;
`;
export const Arrow2 = styled(Arrow)`
  left: -24.3%;
  top: 44.7%;
`;
export const Arrow3 = styled(Arrow)`
  left: -6.4%;
  top: 77.9%;
`;
export const Arrow4 = styled(Arrow)`
  right: -5.5%;
  top: 14.2%;
`;
export const Arrow5 = styled(Arrow)`
  right: -36%;
  top: 48.9%;
`;
export const Arrow6 = styled(Arrow)`
  left: 57.8%;
  top: 82%;
`;
