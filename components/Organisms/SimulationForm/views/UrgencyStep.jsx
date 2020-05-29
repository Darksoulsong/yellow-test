import React from 'react';
import { DefaultCircledRowModal } from '../components/DefaultCircledRowModal';

const list = [
  {
    text: 'Precisamos desse profissional para ontem!',
  },
  {
    text: '1 semana é adequado, mas precisamos ser rápidos',
  },
  {
    text: 'Podemos esperar até 15 dias, nada além disso',
  },
  { text: 'Ainda não definimos a data de entrada' },
];

export const UrgencyStep = () => (
  <DefaultCircledRowModal
    list={list}
    title="Qual o nível de urgência para a contratação?"
  />
);
