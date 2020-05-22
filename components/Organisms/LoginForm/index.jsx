import React from 'react';
import { SVG, Button } from '@components';
import {
  LoginFormRoot,
  FormControl,
  FormActions,
  AlternativeLogin,
  ForgotPassword,
  Field,
  FormButtonGray,
  FormButtonYellow,
  FieldIcon,
  ForgotPasswordLabel,
} from './styles';

export default function LoginForm({
  onCreateAccountButtonClick,
  onForgotPasswordButtonClick,
}) {
  return (
    <LoginFormRoot>
      <form autoComplete="off">
        <FormControl>
          <Field>
            <FieldIcon>@</FieldIcon>
            <input placeholder="seu email" name="email" />
          </Field>
        </FormControl>
        <FormControl>
          <Field>
            <FieldIcon>
              <SVG name="key-icon" />
            </FieldIcon>
            <input placeholder="sua senha" type="password" name="password" />
          </Field>
        </FormControl>
        <ForgotPassword>
          <Button
            type="button"
            version="unstyled"
            onClick={onForgotPasswordButtonClick}
          >
            <ForgotPasswordLabel>esqueceu sua senha?</ForgotPasswordLabel>
          </Button>
        </ForgotPassword>
        <AlternativeLogin>
          <div>ou entrar com</div>
          <a href="http://foo.com">
            <SVG name="linkedin-icon" />
          </a>
          <a href="http://foo.com">
            <SVG name="google-icon" />
          </a>
        </AlternativeLogin>
        <FormActions>
          <FormButtonGray type="button" onClick={onCreateAccountButtonClick}>
            Criar conta
          </FormButtonGray>
          <FormButtonYellow type="button">Continuar</FormButtonYellow>
        </FormActions>
      </form>
    </LoginFormRoot>
  );
}
