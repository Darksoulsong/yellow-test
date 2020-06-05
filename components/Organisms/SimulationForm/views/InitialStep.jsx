import React from 'react';
import { Button } from '@components';
import {
  FormHeading,
  FormHolder,
  CustomContainer,
  CustomFormActions,
} from '../styles';

export const InitialStep = () => (
  <CustomContainer>
    <FormHeading style={{ fontWeight: '300', fontSize: '2.6rem' }}>
      Você <strong>precisa contratar</strong> um profissional para seu time?
      Disponibilizamos aqui a nossa metodologia de Job Description nesse
      <strong> simulador em 7 passos</strong>
    </FormHeading>
    <FormHolder>
      <CustomFormActions direction="column" align="center">
        <Button type="submit" variant="primary" version="rounded">
          Sim
        </Button>
      </CustomFormActions>
    </FormHolder>
  </CustomContainer>
);
