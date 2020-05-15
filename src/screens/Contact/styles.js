import styled from 'styled-components';
import { MediumTitle, Text, Button } from '@components';

export const CustomTitle = styled(MediumTitle)`
  font-size: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 3.5rem;
  }
`;

export const HugeTitle = styled(MediumTitle)`
  font-size: 3rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 4.5rem;
  }
`;

export const CustomText = styled(Text)`
  font-size: 1.75rem;
  margin: ${({ theme, margin }) => margin || theme.spaces.xsm};
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 2.5rem;
  }
`;

export const ArrowPositioner = styled.div`
  position: relative;
  width: 0;
  left: -25%;
`;

export const CustomField = styled.input`
  height: 45px;
  background: ${({ theme }) => theme.colors.grayLight};
  border: 0 none;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 300;
`;

export const CustomTextArea = styled.textarea`
  height: 150px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.grayLight};
  padding: ${({ theme }) => theme.spaces.sm};
  font-size: 1.8rem;
  font-weight: 300;
  resize: none;
  width: 100%;
  font-family: Roboto, sans-serif;
  margin-top: ${({ theme }) => theme.spaces.md};
`;

export const CustomRadio = styled.input``;

export const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  width: fit-content;
  border-radius: 7px;
`;

export const SimpleContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: center;
  margin: ${({ margin = '0' }) => margin};
`;

export const TitleContainer = styled.div`
  position: relative;
  display: flex;
`;

export const SVGManipulator = styled.div`
  position: absolute;
  top: -5%;
  right: -5%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const VacantSection = styled(Section)`
  margin: ${({ theme }) => theme.spaces.xlg};
  button {
    margin: ${({ theme }) => theme.spaces.lg};
    width: fit-content;
  }
`;

export const FormSection = styled(Section)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spaces.lg} ${theme.spaces.xsm}`};
  background: ${({ theme }) => theme.colors.grayLighter};
  font-weight: 300;
  font-size: 1.8rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => `0 ${theme.spaces.md}`};
  }
`;

export const FormQuestion = styled.div`
  margin: ${({ theme }) => `${theme.spaces.md} 0 ${theme.spaces.sm} 0`};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces.md};
  input {
    padding: ${({ theme }) => theme.spaces.sm};
    margin: 10px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 30%;
  }
`;

export const SimulationSection = styled(Section)`
  margin: ${({ theme }) => theme.spaces.lg};
`;
