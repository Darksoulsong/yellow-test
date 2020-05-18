import React from 'react';
import { useFormik } from 'formik';
import { fieldHasError } from '@utils';
import { useHandleForgotPassword } from '@hooks';
import * as Yup from 'yup';
import { FormControl, Field, FormActions, Button } from '@components';
import {
  FormRoot,
  FormHeading,
  FormSubheading,
  FormIconHolder,
  FormHolder,
  FormMessage,
} from './styles';

const ForgotPassword = ({ onForgotPasswordOkButtonClick }) => {
  const {
    isLoading,
    success,
    requestPasswordChange,
  } = useHandleForgotPassword();

  const initialValues = {
    email: '',
  };

  const schema = {
    email: Yup.string()
      .email()
      .required('Campo obrigatório'),
  };

  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    values,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: Yup.object(schema),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async formValues => {
      requestPasswordChange(formValues.email);
    },
  });

  const buttonProps = {
    variant: 'primary',
    version: 'rounded',
    disabled: isLoading,
    type: success ? 'text' : 'submit',
  };

  if (success) {
    buttonProps.onClick = onForgotPasswordOkButtonClick;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRoot>
        <FormHeading>Esqueci minha senha</FormHeading>
        <FormSubheading>Preencha o campo abaixo</FormSubheading>
        <FormHolder>
          <FormControl>
            {!success && (
              <Field
                renderIcon={() => <FormIconHolder>@</FormIconHolder>}
                type="email"
                placeholder="seu email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                hasError={fieldHasError('email', touched, errors)}
                validationMessage={errors.email}
                isLoading={isLoading}
                disabled={isLoading}
              />
            )}

            {success && (
              <FormMessage>
                Sucesso! Dentro de instantes, acesse seu e-mail e clique no link
                para redefinir sua senha
              </FormMessage>
            )}
          </FormControl>
          <FormActions align="center">
            <Button {...buttonProps}>
              {!success && 'Enviar'}
              {success && 'OK'}
            </Button>
          </FormActions>
        </FormHolder>
      </FormRoot>
    </form>
  );
};

export default React.memo(ForgotPassword);
