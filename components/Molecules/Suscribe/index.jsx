import React from 'react';
import { Button, MediumTitle } from '@components';
import { CustomField, SuscribeHolder, SuscribeSection } from './styles';

export const Suscribe = ({ padding, placeholder }) => (
  <SuscribeSection padding={padding}>
    <MediumTitle align="center">
      QUER RECEBER <strong>MAIS CONTEÚDOS</strong>
    </MediumTitle>
    <SuscribeHolder>
      <CustomField placeholder={placeholder} />
      <Button>inscrever</Button>
    </SuscribeHolder>
  </SuscribeSection>
);
