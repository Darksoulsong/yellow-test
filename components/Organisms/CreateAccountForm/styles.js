import styled from 'styled-components';

export const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grayLightest};
  padding: 60px 120px;
  padding: 0 30px 20px;
  width: 600px;
  height: 463px;
`;

export const FormHeading = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spaces.lg};
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
  font-size: 1.8rem;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  letter-spacing: 0.039rem;
  line-height: 1.1rem;
  text-align: justify;

  small {
    display: block;
    letter-spacing: 0.095rem;
    font-size: 1rem;
  }
`;

export const FormHolder = styled.div`
  width: 305px;
  margin: 0 auto;
`;

export const FormIconHolder = styled.span`
  color: ${({ theme }) => theme.colors.grayDarker};
`;
