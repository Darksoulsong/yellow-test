import React from 'react';
import { useFormikContext } from 'formik';
import { FormControl, Field } from '@components';
import { fieldHasError } from '@utils';
import { FormHolder, FormHeading } from '../styles';

export default function InfoStep() {
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
        Em uma publicação, qual seria o título desta vaga?
      </FormHeading>
      <FormHolder>
        <FormControl>
          <Field
            autoComplete="off"
            type="text"
            placeholder="cargo"
            name="publicationTitle"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.publicationTitle}
            hasError={fieldHasError('publicationTitle', touched, errors)}
            validationMessage={errors.publicationTitle}
          />
        </FormControl>
      </FormHolder>
      <FormHeading>
        Qual a remuneração prevista para este profissional?
      </FormHeading>
      <FormHolder>
        <FormControl>
          <Field
            autoComplete="off"
            type="number"
            placeholder="de R$"
            name="lowerLimit"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lowerLimit}
            hasError={fieldHasError('lowerLimit', touched, errors)}
            validationMessage={errors.lowerLimit}
          />
        </FormControl>
        <FormControl>
          <Field
            autoComplete="off"
            type="number"
            placeholder="ate R$"
            name="upperLimit"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.upperLimit}
            hasError={fieldHasError('upperLimit', touched, errors)}
            validationMessage={errors.upperLimit}
          />
        </FormControl>
      </FormHolder>
    </>
  );
}
