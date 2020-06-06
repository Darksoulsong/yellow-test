import React from 'react';
import { useFormikContext } from 'formik';
import { fieldHasError } from '@utils';
import { FormControl, Field, FieldGroup } from '@components';
import { FormIconHolder, FormHolder } from '../styles';

export default function CompanyInfoOne() {
  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    values,
  } = useFormikContext();
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
        <Field
          placeholder="empresa"
          name="company"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.company}
          hasError={fieldHasError('company', touched, errors)}
          validationMessage={errors.company}
        />
      </FormControl>
      <FormControl>
        <Field
          placeholder="cargo"
          name="position"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.position}
          hasError={fieldHasError('position', touched, errors)}
          validationMessage={errors.position}
        />
      </FormControl>
    </FormHolder>
  );
}
