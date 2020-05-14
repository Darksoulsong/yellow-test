import React from 'react';
import { Button, MediumTitle } from '@components';
import { CustomField, SuscribeHolder, SuscribeSection } from './styles';

export const Suscribe = ({ padding }) => (
  <SuscribeSection padding={padding}>
    <MediumTitle align="center">
      QUER RECEBER <strong>MAIS CONTEÚDOS</strong>
    </MediumTitle>
    <SuscribeHolder>
      <CustomField />
      <Button>inscrever</Button>
    </SuscribeHolder>
  </SuscribeSection>
);
