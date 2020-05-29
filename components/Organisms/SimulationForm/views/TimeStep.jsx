import React from 'react';
import { DefaultCircledRowModal } from '../components/DefaultCircledRowModal';

const list = [
  {
    text: 'Vaga nova',
  },
  {
    text: 'Esta vaga já foi publicada e ainda não tivemos sucesso neste mês',
  },
  {
    text:
      'Já estamos buscando este profissional a meses, até agora não encontramos',
  },
];
export const TimeStep = () => (
  <DefaultCircledRowModal
    list={list}
    title="Há quanto tempo vocês estão buscando por esse profissional?"
  />
);
