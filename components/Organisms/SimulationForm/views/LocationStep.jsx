import React from 'react';
import { useFormikContext } from 'formik';
import { FormControl, Field, Checkbox } from '@components';
import { fieldHasError } from '@utils';
import {
  FormHolder,
  CheckboxHolder,
  CheckboxCustomLabel,
  FormHeading,
} from '../styles';

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
        Onde será o local de trabalho desse profissional?
      </FormHeading>
      <FormHolder>
        <FormControl>
          <Field
            autoComplete="off"
            type="text"
            placeholder="cidade"
            name="city"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
            hasError={fieldHasError('city', touched, errors)}
            validationMessage={errors.city}
          />
        </FormControl>
        <FormControl>
          <Field
            autoComplete="off"
            placeholder="bairro"
            name="neighborhood"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.neighborhood}
            hasError={fieldHasError('neighborhood', touched, errors)}
            validationMessage={errors.neighborhood}
          />
        </FormControl>
        <FormControl>
          <Field
            autoComplete="off"
            type="text"
            placeholder="rua"
            name="street"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.street}
            hasError={fieldHasError('street', touched, errors)}
            validationMessage={errors.street}
          />
        </FormControl>
        <FormControl>
          <CheckboxHolder>
            <Checkbox
              proportion="big"
              id="work"
              name="work"
              onBlur={handleBlur}
              checked={values.work}
              onChange={handleChange}
              hasError={fieldHasError('work', touched, errors)}
              validationMessage={errors.work}
              // disabled={loading}
              renderLabel={() => (
                <CheckboxCustomLabel>Trabalho será remoto</CheckboxCustomLabel>
              )}
            />
          </CheckboxHolder>
        </FormControl>
        <FormControl>
          <CheckboxHolder>
            <Checkbox
              proportion="big"
              id="clients"
              name="clients"
              onBlur={handleBlur}
              checked={values.clients}
              onChange={handleChange}
              hasError={fieldHasError('clients', touched, errors)}
              validationMessage={errors.clients}
              // disabled={loading}
              renderLabel={() => (
                <CheckboxCustomLabel>
                  Este profissional será alocado em um de nossos clientes
                </CheckboxCustomLabel>
              )}
            />
          </CheckboxHolder>
        </FormControl>
      </FormHolder>
    </>
  );
}
