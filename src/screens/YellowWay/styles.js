import styled from 'styled-components';

export const YellowWayRoot = styled.div``;

export const YellowWayIntro = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

export const Subheading = styled.h2`
  font-size: 3.2rem;
  font-weight: 300;
  margin-bottom: 50px;

  strong {
    font-weight: 600;
  }
`;

export const HashtagHeading = styled(Subheading)`
  font-size: 5rem;
  margin-bottom: 0;
`;

export const Top = styled.div`
  svg path {
    fill: transparent;
  }
`;

export const Section = styled.section`
  text-align: center;
  padding: 68px;
  margin-bottom: 70px;
`;

export const YellowSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.yellowDarker};
  margin-bottom: 120px;
`;

export const Box = styled.div`
  width: 336px;
  height: 438px;
  margin: 0 auto;
  padding: 12px 14px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 50px;
`;

export const BoxFooter = styled.div`
  padding-top: 30px;
  padding-left: 24px;
  text-align: left;
`;
