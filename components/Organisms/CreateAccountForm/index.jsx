import React from 'react';
import { SVG, FormControl, FormActions, Field, FieldGroup } from '@components';

import {
  CreateAccountFormRoot,
  FormHeading,
  // FormButtonGray,
  // FormButtonYellow,
  // FieldIcon,
} from './styles';

export default function LoginForm() {
  return (
    <CreateAccountFormRoot>
      <FormHeading>Criar sua conta</FormHeading>

      <form autoComplete="off">
        <FormControl>
          <Field
            renderIcon={() => '@'}
            type="email"
            placeholder="seu email"
            name="email"
          />
        </FormControl>
        <FormControl>
          <Field placeholder="nome completo" name="fullname" />
        </FormControl>
        <FormControl>
          <FieldGroup>
            <Field
              type="text"
              placeholder="nascimento"
              name="birthDate"
              width="135px"
            />
            <Field
              type="tel"
              placeholder="telefone"
              name="phone"
              width="flex"
            />
          </FieldGroup>
        </FormControl>
        <FormControl>
          <FieldGroup>
            <Field type="text" placeholder="UF" name="state" width="70px" />
            <Field type="text" placeholder="cidade" name="city" width="flex" />
          </FieldGroup>
        </FormControl>
        {/* <FormActions>
          <FormButtonGray>Criar conta</FormButtonGray>
          <FormButtonYellow>Continuar</FormButtonYellow>
        </FormActions> */}
      </form>
    </CreateAccountFormRoot>
  );
}
