import styled from 'styled-components';

export const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grayLightest};
  padding: 0 30px 50px;
  width: 100vw;
  height: 100vh;
  justify-content: ${({ justify = 'flex-start' }) => justify};
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0 30px 0px;
    justify-content: ${({ justify = 'space-between' }) => justify};
    /* min-height: 430px; */
    max-height: 455px;
    width: 600px;
  }
`;

export const FormHeading = styled.h2`
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spaces.md};
`;

export const FormStepsHolder = styled.div`
  display: flex;
  align-items: center;
`;

export const FormUploadWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;

export const FormUploadFieldLabel = styled.div`
  font-size: 1.7rem;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  letter-spacing: 0.039rem;
  line-height: 1rem;
  text-align: justify;

  small {
    display: block;
    letter-spacing: 0.07rem;
    font-size: 1rem;
  }
`;

export const FormHolder = styled.div`
  width: 320px;
  height: 100%;
  margin: 0 auto;
`;

export const FormIconHolder = styled.span`
  color: ${({ theme }) => theme.colors.grayDarker};
`;

export const CheckboxHolder = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  white-space: break-spaces;
  width: 270px;
  margin: 0 auto;

  a {
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.textColor};
      text-decoration: none;
    }
  }
`;

export const CheckboxLabel = styled.span`
  margin-left: 4px;
  white-space: nowrap;
`;

export const FormFooter = styled.div``;

export const CustomTitle = styled.div`
  font-size: 3.4rem;
  text-align: center;
  font-weight: 300;
  margin-bottom: 45px;
`;
