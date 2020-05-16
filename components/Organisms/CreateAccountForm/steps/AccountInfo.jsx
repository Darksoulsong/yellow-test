import React from 'react';
import { FormControl, FormActions, Field, Button, Checkbox } from '@components';
import { fieldHasError } from '@utils';
import { CheckboxHolder, CheckboxLabel, FormHolder } from '../styles';

export default function AccountInfo({
  values,
  errors,
  handleBlur,
  handleChange,
  touched,
}) {
  console.log({ errors });
  console.log({ values });

  return (
    <FormHolder>
      <FormControl>
        <Field
          type="text"
          placeholder="usuário"
          name="username"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.username}
          hasError={fieldHasError('username', touched, errors)}
          validationMessage={errors.username}
        />
      </FormControl>
      <FormControl>
        <Field
          placeholder="senha"
          name="password"
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          hasError={fieldHasError('password', touched, errors)}
          validationMessage={errors.password}
        />
      </FormControl>
      <FormControl>
        <Field
          placeholder="confirmar senha"
          name="confirmPassword"
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.confirmPassword}
          hasError={fieldHasError('confirmPassword', touched, errors)}
          validationMessage={errors.confirmPassword}
        />
      </FormControl>
      <FormControl>
        <CheckboxHolder>
          <Checkbox
            id="terms"
            name="terms"
            onBlur={handleBlur}
            checked={values.terms}
            onChange={handleChange}
            hasError={fieldHasError('terms', touched, errors)}
            validationMessage={errors.terms}
            renderLabel={() => (
              <CheckboxLabel>
                li e entendi a{' '}
                <a href="/politica-de-privacidade">política de privacidade</a> e{' '}
                <a href="/termo-de-adesao">termo de adesão</a>
              </CheckboxLabel>
            )}
          />
        </CheckboxHolder>
      </FormControl>
      <FormActions align="center">
        <Button type="submit" variant="primary" version="rounded">
          Concluir
        </Button>
      </FormActions>
    </FormHolder>
  );
}
