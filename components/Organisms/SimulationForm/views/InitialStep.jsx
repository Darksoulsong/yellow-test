import React from 'react';
import styled from 'styled-components';
import { FormActions, Button } from '@components';
import { FormHeading, FormHolder } from '../styles';

const CustomFormActions = styled(FormActions)`
  align-items: center;
  button {
    width: fit-content;
  }
`;

export default function InitialStep() {
  return (
    <>
      <FormHeading style={{ fontWeight: '300' }}>
        Você <strong>precisa contratar</strong> um profissional para seu time?
        Disponibilizamos aqui a nossa metodologia de Job Description nesse
        <strong> simulador em 8 passos</strong>
      </FormHeading>
      <FormHolder>
        <CustomFormActions direction="column" align="center">
          <Button
            type="submit"
            variant="primary"
            version="rounded"
            // disabled={loading}
          >
            Sim
          </Button>
        </CustomFormActions>
      </FormHolder>
    </>
  );
}
