import styled from 'styled-components';

export const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grayLightest};
  padding: 60px 120px;
  padding: 0 30px 20px;
  width: 100vw;
  min-height: 100vh;
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 600px;
    min-height: 295px;
  }
`;

export const FormHeading = styled.h2`
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spaces.sm};
`;

export const FormSubheading = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spaces.md};
`;

export const FormHolder = styled.div`
  width: 320px;
  height: 100%;
  margin: 0 auto;
`;

export const FormIconHolder = styled.span`
  color: ${({ theme }) => theme.colors.grayDarker};
`;

export const FormFooter = styled.div``;

export const FormMessage = styled.div`
  text-align: center;
  height: 55px;
`;
