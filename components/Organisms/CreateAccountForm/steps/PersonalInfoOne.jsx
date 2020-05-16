import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fieldHasError } from '@utils';
import { FormControl, Field, FieldGroup } from '@components';
import { FormIconHolder, FormHolder } from '../styles';

export default function PersonalInfoOne({
  values,
  errors,
  handleBlur,
  handleChange,
  touched,
}) {
  // const schema = {
  //   email: Yup.string()
  //     .email('Informe um endereço de email válido')
  //     .required('Campo obrigatório'),
  //   fullname: Yup.string().required('Campo obrigatório'),
  //   birthDate: Yup.string()
  //     .min(6)
  //     .required('Informe a data de nascimento'),
  //   phone: Yup.string().required('Campo obrigatório'),
  //   state: Yup.string().required('Campo obrigatório'),
  //   city: Yup.string().required('Campo obrigatório'),
  // };

  // const initialValues = {
  //   email: '',
  //   fullname: '',
  //   birthDate: '',
  //   phone: '',
  //   state: '',
  //   city: '',
  // };

  // const initialValues = {
  //   email: 'foo@mail.com',
  //   fullname: 'john doe',
  //   birthDate: '03/10/1982',
  //   phone: '41 9 88908102',
  //   state: 'PR',
  //   city: 'Curitiba',
  // };

  return (
    <FormHolder>
      <FormControl>
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
        />
      </FormControl>
      <FormControl>
        <Field
          placeholder="nome completo"
          name="fullname"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.fullname}
          hasError={fieldHasError('fullname', touched, errors)}
          validationMessage={errors.fullname}
        />
      </FormControl>
      <FormControl>
        <FieldGroup>
          <Field
            type="text"
            placeholder="nascimento"
            name="birthDate"
            width="135px"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.birthDate}
            hasError={fieldHasError('birthDate', touched, errors)}
            validationMessage={errors.birthDate}
            mask="date"
          />
          <Field
            type="tel"
            placeholder="telefone"
            name="phone"
            width="flex"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phone}
            hasError={fieldHasError('phone', touched, errors)}
            validationMessage={errors.phone}
            mask="cellphone"
          />
        </FieldGroup>
      </FormControl>
      <FormControl>
        <FieldGroup>
          <Field
            type="text"
            placeholder="UF"
            name="state"
            width="70px"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.state}
            hasError={fieldHasError('state', touched, errors)}
            validationMessage={errors.state}
          />
          <Field
            type="text"
            placeholder="cidade"
            name="city"
            width="flex"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
            hasError={fieldHasError('city', touched, errors)}
            validationMessage={errors.city}
          />
        </FieldGroup>
      </FormControl>
    </FormHolder>
  );
}
