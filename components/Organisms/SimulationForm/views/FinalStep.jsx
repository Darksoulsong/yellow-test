import React from 'react';
import styled from 'styled-components';
import { SVG } from '@components';
import { FormHeading } from '../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spaces.lg}`};
`;

export const FinalStep = () => (
  <>
    <FormHeading style={{ fontSize: '2.4rem' }}>Obrigado!</FormHeading>
    <Container>
      <FormHeading style={{ fontWeight: '300' }}>
        Recebemos as informações sobre sua vaga e iremos entrar em contato o
        mais breve possível!
      </FormHeading>
      <FormHeading>
        <span style={{ fontWeight: '300' }}>#YELLOW</span>TEAM
      </FormHeading>
      <SVG />
    </Container>
  </>
);
