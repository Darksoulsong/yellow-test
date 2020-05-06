import styled, { css } from 'styled-components';

const RoundElementBase = css`
  display: flex;
  align-items: center;
  height: 54px;
  border-radius: 27px;
  padding: 0 45px;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background-color: #58595b;
  color: #a6a8ab;
`;

export const LoginFormRoot = styled.div`
  padding: 56px 50px 45px;
  color: #a6a8ab;
  font-weight: 300;

  a {
    color: #a6a8ab;
    text-decoration: underline;
    font-weight: 300;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Field = styled.div`
  ${RoundElementBase};

  input {
    color: #a6a8ab;
    border: 0 none;
    background-color: transparent;
    width: 300%;
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    &::placeholder {
      color: #a6a8ab;
      opacity: 1; /* Firefox */
    }
  }

  svg path {
    stroke: transparent;
  }
`;

export const FieldIcon = styled.span`
  font-weight: 800;
  color: #a6a8ab;
  margin-left: -27px;
  margin-right: 8px;
  height: 18px;
`;

export const FormControl = styled.div`
  margin-bottom: 16px;
`;

export const FormActions = styled(FormControl)`
  display: flex;
  justify-content: space-between;
  margin-top: 43px;
`;

export const ForgotPassword = styled(FormControl)`
  text-align: center;
`;

export const AlternativeLogin = styled(FormControl)`
  text-align: center;
  margin-top: 43px;

  div {
    margin-bottom: 12px;
  }

  svg {
    width: 26px;
    height: 26px;

    &:nth-child(1) {
      margin: 0 8px;
    }

    &:hover path {
      fill: ${({ theme }) => theme.colors.yellow};
    }
  }

  path {
    transition: fill 0.3s ease-in-out;
    stroke: transparent;
    fill: #a6a8ab;
  }
`;

export const CreateAccount = styled.span``;

export const FormButton = styled.button`
  ${RoundElementBase};

  transition: transform 0.1s ease-in-out;
  padding: 0 26px;
  width: 154px;
  justify-content: center;
  transform: scale(1);
  cursor: pointer;

  &:hover {
    transform: scale(1.05) !important;
  }

  &:active {
    transform: scale(1.01) !important;
  }
`;

export const FormButtonGray = styled(FormButton)``;

export const FormButtonYellow = styled(FormButton)`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
`;