import React from 'react';
import styled from 'styled-components';
import { FormActions, Button } from '@components';
import { FormHeading, FormHolder } from '../styles';

const CustomHeading = styled.h2`
  font-size: 2.6rem;
  text-align: center;
  margin: ${({ theme }) => `${theme.spaces.md} 0`};
`;

const CustomFormActions = styled(FormActions)`
  align-items: center;
  button {
    width: fit-content;
  }
`;

export default function AccountInfo() {
  return (
    <FormHolder>
      <FormHeading>Vôce é</FormHeading>
      <CustomFormActions direction="column" align="center">
        <Button
          type="submit"
          variant="primary"
          version="rounded"
          // disabled={loading}
        >
          Empresa
        </Button>
        <CustomHeading>ou</CustomHeading>
        <Button
          type="submit"
          variant="primary"
          version="rounded"
          // disabled={loading}
        >
          Candidato
        </Button>
      </CustomFormActions>
    </FormHolder>
  );
}
