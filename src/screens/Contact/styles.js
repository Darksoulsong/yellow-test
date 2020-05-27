import styled from 'styled-components';
import { MediumTitle, Text } from '@components';

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
  left: -55%;
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    display: block;
  }
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
  @media (min-width: ${({ theme }) => theme.breakpoints.largest}) {
    top: -30px;
    right: -50px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const VacantSection = styled(Section)`
  margin: ${({ theme }) =>
    `${theme.spaces.xlg} ${theme.spaces.md} ${theme.spaces.lg} ${theme.spaces.md}`};
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
  padding: ${({ theme }) => theme.spaces.sm};
  input {
    padding: ${({ theme }) => theme.spaces.sm};
    margin: 10px 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 30%;
  }
`;

export const SimulationSection = styled(Section)`
  margin: ${({ theme }) => `${theme.spaces.lg} ${theme.spaces.md}`};
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: ${({ theme }) => theme.spaces.lg};
  }
`;
