import React from 'react';
import { FormControl, Field } from '@components';

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
      {/* <FormControl>
        <input type="checkbox" />
        li e entendi a{' '}
        <a href="/politica-de-privacidade">política de privacidade</a>
      </FormControl> */}
    </>
  );
}
