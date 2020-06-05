import styled from 'styled-components';
import { FormActions } from '@components';

export const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify = 'flex-start' }) => justify};
  background-color: ${({ theme }) => theme.colors.grayLightest};
  padding: 0 30px 50px;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: relative;
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    justify-content: ${({ justify = 'space-between' }) => justify};
    min-height: 430px;
    max-height: 485px;
    width: 700px;
    padding: 0 30px 0px;
  }
`;

export const FormHeading = styled.h2`
  font-size: 2.2rem;
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
  height: fit-content;
  margin: 0 auto;
  /* @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 100%;
  } */
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

export const CheckboxCustomLabel = styled.span`
  margin-left: 5px;
  font-size: 1.5rem;
  font-weight: 300;
`;

export const FormFooter = styled.div``;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: ${({ theme }) => `0 ${theme.spaces.md}`}; */
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
  }
`;

export const ResponsiveColumn = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 47%;
  }
`;

export const CustomContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme, variant = 'default' }) =>
      variant === 'default'
        ? `0 ${theme.spaces.lgh}`
        : `0 ${theme.spaces[variant]}`};
  }
`;

export const CustomFormActions = styled(FormActions)`
  align-items: center;
  justify-content: center;
  margin: 0;
  button {
    width: fit-content;
  }
`;
