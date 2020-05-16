import React from 'react';
import { fieldHasError } from '@utils';
import { FormControl, Field, FieldGroup } from '@components';
import { FormIconHolder, FormHolder } from '../styles';

export default function PersonalInfoOne({
  values,
  errors,
  handleBlur,
  handleChange,
  touched,
  loading,
}) {
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
          isLoading={loading}
          disabled={loading}
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
          isLoading={loading}
          disabled={loading}
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
            isLoading={loading}
            disabled={loading}
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
            isLoading={loading}
            disabled={loading}
          />
        </FieldGroup>
      </FormControl>
      <FormControl>
        <FieldGroup>
          <Field
            type="select"
            placeholder="UF"
            name="state"
            width="80px"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.state}
            hasError={fieldHasError('state', touched, errors)}
            validationMessage={errors.state}
            options={[
              { value: 'PR', label: 'PR' },
              { value: 'MG', label: 'MG' },
              { value: 'SC', label: 'SC' },
            ]}
            isLoading={loading}
            disabled={loading}
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
            isLoading={loading}
            disabled={loading}
          />
        </FieldGroup>
      </FormControl>
    </FormHolder>
  );
}
