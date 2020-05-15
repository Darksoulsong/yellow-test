import React from 'react';
import { FormControl, FormActions, Field, Button, Checkbox } from '@components';
import { CheckboxHolder, CheckboxLabel } from '../styles';

export default function AccountInfo() {
  return (
    <>
      <FormControl>
        <Field type="text" placeholder="usuário" name="username" />
      </FormControl>
      <FormControl>
        <Field placeholder="senha" name="password" />
      </FormControl>
      <FormControl>
        <Field placeholder="confirmar senha" name="confirmPassword" />
      </FormControl>
      <FormControl>
        <CheckboxHolder>
          <Checkbox id="terms" />
          <CheckboxLabel>
            li e entendi a{' '}
            <a href="/politica-de-privacidade">política de privacidade</a> e{' '}
            <a href="/termo-de-adesao">termo de adesão</a>
          </CheckboxLabel>
        </CheckboxHolder>
      </FormControl>
      <FormActions align="center">
        <Button variant="primary" version="rounded">
          Concluir
        </Button>
      </FormActions>

      {/* <FormControl>
        <input type="checkbox" />
        li e entendi a{' '}
        <a href="/politica-de-privacidade">política de privacidade</a>
      </FormControl> */}
    </>
  );
}
