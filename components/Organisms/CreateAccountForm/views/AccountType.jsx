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

export default function AccountType({ onAccountTypeSelect }) {
  const handleClick = React.useCallback(type => {
    onAccountTypeSelect(type);
  }, []);

  return (
    <FormHolder>
      <FormHeading>Você é</FormHeading>
      <CustomFormActions direction="column" align="center">
        <Button
          type="button"
          onClick={() => handleClick('company')}
          variant="primary"
          version="rounded"
        >
          Empresa
        </Button>
        <CustomHeading>ou</CustomHeading>
        <Button
          type="button"
          onClick={() => handleClick('candidate')}
          variant="primary"
          version="rounded"
        >
          Candidato
        </Button>
      </CustomFormActions>
    </FormHolder>
  );
}
