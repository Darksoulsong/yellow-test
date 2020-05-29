import React from 'react';
import { DefaultCircledRowModal } from '../components/DefaultCircledRowModal';

const list = [
  {
    text:
      'É uma substituição, o profissional que ocupava esta cadeira pediu demissão.',
  },
  {
    text:
      'É uma substituição, o profissional que ocupava esta cadeira foi promovido / transferido.',
  },
  {
    text:
      'É uma substituição, mas o profissional ainda não foi comunicado por isso precisamos de sigilo máximo.',
  },
  { text: 'Estamos crescendo nosso time!' },
  { text: 'Está é uma vaga recorrente.' },
];

export const OpeningStep = () => (
  <DefaultCircledRowModal
    list={list}
    title="Por que você está abrindo uma vaga?"
  />
);
