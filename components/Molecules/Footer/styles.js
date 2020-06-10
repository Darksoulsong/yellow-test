import styled from 'styled-components';

export const Section = styled.section`
  transition: 0.3s ease-in-out;
  transition-property: margin, padding;
`;

export const FooterTopSection = styled(Section)`
  margin: 0 16px 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0 85px 18px;
  }
`;

export const FooterHeading = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.6rem;
  }
`;

export const FooterBlock = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 33.33%;
    width: auto;
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 30%;
    justify-content: center;
  }
`;

export const GrayedSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.grayLighter};
  justify-content: space-between;
  display: flex;
  padding: 24px 16px 24px;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding-top: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 40px 85px;
  }
`;

export const FooterItem = styled.div`
  margin-bottom: 18px;
  font-size: 1.3rem;
  font-weight: 300;

  svg path {
    transition: fill 0.3s ease-in-out;
  }

  a {
    transition: color 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.highlightColor};

      svg path {
        fill: ${({ theme }) => theme.colors.highlightColor};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 28px;
    font-size: 1.6rem;
  }
`;

export const FooterBlockPeople = styled(FooterBlock)`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 31vw;
  }
`;

export const FooterBlockYellowWay = styled(FooterBlock)`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 25vw;
  }
`;

export const FooterBlockCompanies = styled(FooterBlock)`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 28vw;
  }
`;

export const FooterItemYoutube = styled(FooterItem)`
  margin: 0 34px;

  svg {
    width: 36px !important;
  }
`;

export const FooterBlockSocial = styled(FooterBlock)`
  text-align: center;

  svg {
    width: 28px;
    height: auto;
  }

  ${FooterItem} {
    margin-bottom: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 10vw;
  }
`;

export const FooterRoot = styled.div`
  .footer-logo svg {
    width: 110px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    .footer-logo svg {
      width: 140px;
    }
  }
`;

export const MobileGrayedSection = styled(GrayedSection)`
  background-color: ${({ theme }) => theme.colors.grayLighter};
  padding-top: 0;

  ${FooterBlockSocial} {
    flex: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding-top: 0;
  }
`;
