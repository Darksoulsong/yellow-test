import styled from 'styled-components';

export const FormStep = styled.span`
  position: relative;
  height: 5px;
  width: 30px;
  display: flex;
  overflow: hidden;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.yellow : theme.colors.grayLightish};
`;

export const FormStepsRoot = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${FormStep} {
    margin: 0 2px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const FormStepsHolder = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const FormStepButtonHolder = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: 1;

  ${({ visible = true }) => !visible && `opacity: 0; pointer-events: none;`};
`;
