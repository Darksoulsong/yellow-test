import React from 'react';
import * as Yup from 'yup';
import { FormActions, FormSteps, FormWizard } from '@components';
import { FormDataProvider, useFormData } from '@hooks';
import { PersonalInfoOne, PersonalInfoTwo, AccountInfo } from './steps';
import { FormRoot, FormHeading } from './styles';

export default function CreateAccountForm() {
  const personalInfoOneValidationSchema = {
    email: Yup.string()
      .email('Informe um endereço de email válido')
      .required('Campo obrigatório'),
    fullname: Yup.string().required('Campo obrigatório'),
    birthDate: Yup.string()
      .min(6)
      .required('Informe a data de nascimento'),
    phone: Yup.string().required('Campo obrigatório'),
    state: Yup.string().required('Campo obrigatório'),
    city: Yup.string().required('Campo obrigatório'),
  };

  const personalInfoTwoValidationSchema = {
    lastCompany: Yup.string().required('Campo obrigatório'),
    lastOccupation: Yup.string().required('Campo obrigatório'),
    lastWage: Yup.string().required('Campo obrigatório'),
    resume: Yup.object().shape({
      lastModified: Yup.number(),
      lastModifiedDate: Yup.date(),
      name: Yup.string(),
      size: Yup.number(),
      type: Yup.string(),
      webkitRelativePath: Yup.string(),
      username: Yup.string().required('Campo obrigatório'),
      password: Yup.string()
        .min(8, 'Mínimo de 8 caracteres')
        .required('Campo obrigatório'),
      confirmPassword: Yup.mixed()
        .test('match', 'As senhas não coincidem', function matchPassword(
          password
        ) {
          return password === this.parent.password;
        })
        .required('Confirme a senha'),
    }),
  };

  const accountInfoValidationSchema = {
    username: Yup.string().required('Campo obrigatório'),
    password: Yup.string()
      .min(8, 'Mínimo de 8 caracteres')
      .required('Campo obrigatório'),
    confirmPassword: Yup.mixed()
      .test('match', 'As senhas não coincidem', function matchPassword(
        password
      ) {
        return password === this.parent.password;
      })
      .required('Confirme a senha'),
    terms: Yup.bool().oneOf([true], 'Campo obrigatório'),
  };

  const initialValues = {
    email: 'foo@mail.com',
    fullname: 'john doe',
    birthDate: '03/10/1982',
    phone: '41 9 88908102',
    state: 'PR',
    city: 'Curitiba',
    lastCompany: 'Foo Inc.',
    lastOccupation: 'Programmer',
    lastWage: '123456',
    linkedin: 'https://linked.in/john-doe',
    resume: '',
    username: 'darksoulsong',
    password: '',
    confirmPassword: '',
    terms: false,
  };

  const onSubmit = (values, actions) => {
    console.log({ values });
    console.log({ actions });
    debugger;
  };

  const renderStepper = ({ page, previous, next, isSubmitting }) => {
    const handleStepChange = nextIndex => {
      const goingNext = nextIndex > page;

      if (goingNext) {
        next();
      } else {
        previous();
      }

      return true;
    };

    return (
      <FormActions style={{ marginTop: 'auto' }}>
        <FormSteps
          activeStep={0}
          totalItems={3}
          onStepChange={handleStepChange}
        />
      </FormActions>
    );
  };

  const formWizardProps = {
    onSubmit,
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    renderStepper,
  };

  return (
    <FormRoot>
      <FormHeading>Criar sua conta</FormHeading>
      <FormWizard {...formWizardProps}>
        <PersonalInfoOne validationSchema={personalInfoOneValidationSchema} />
        <PersonalInfoTwo validationSchema={personalInfoTwoValidationSchema} />
        <AccountInfo validationSchema={accountInfoValidationSchema} />
      </FormWizard>
    </FormRoot>
  );
}
