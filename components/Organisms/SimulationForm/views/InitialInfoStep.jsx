import React from 'react';
import { useFormikContext } from 'formik';
import { FormControl, Field } from '@components';
import { fieldHasError } from '@utils';
import { FormHolder, FormHeading } from '../styles';

export default function LocationStep() {
  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    values,
  } = useFormikContext();

  return (
    <>
      <FormHeading>
        Por favor, complete seus dados antes de iniciar a simulação
      </FormHeading>
      <FormHolder>
        <FormControl>
          <Field
            autoComplete="off"
            type="text"
            placeholder="nome"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            hasError={fieldHasError('name', touched, errors)}
            validationMessage={errors.name}
          />
        </FormControl>
        <FormControl>
          <Field
            autoComplete="off"
            type="email"
            placeholder="email"
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
            autoComplete="off"
            type="text"
            placeholder="telefone"
            name="telephone"
            mask="cellphone"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.telephone}
            hasError={fieldHasError('telephone', touched, errors)}
            validationMessage={errors.telephone}
          />
        </FormControl>
        <FormControl>
          <Field
            autoComplete="off"
            type="text"
            placeholder="empresa"
            name="company"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.company}
            hasError={fieldHasError('company', touched, errors)}
            validationMessage={errors.company}
          />
        </FormControl>
      </FormHolder>
    </>
  );
}
