import React, { useState } from 'react';
import { uid } from 'react-uid';
import { CircleRow } from '@components';
import { FormHeading, ResponsiveContainer, ResponsiveColumn } from '../styles';

const column1 = [
  {
    text: 'C-Level / Presidência',
  },
  {
    text: 'Diretoria',
  },
  {
    text: 'Gerência',
  },
  { text: 'Supervisão / Coordenação' },
  { text: 'Especialista' },
];
const column2 = [
  {
    text: 'Analista',
  },
  {
    text: 'Assistente',
  },
  {
    text: 'Estagiário',
  },
  { text: 'Outro:' },
];

export const LevelStep = () => {
  const [active, setActive] = useState(-1);
  return (
    <>
      <FormHeading>
        Qual o nível de senioridade mais adequado para posição
      </FormHeading>
      <ResponsiveContainer>
        <ResponsiveColumn>
          {column1.map((item, key) => (
            <CircleRow
              key={uid(item)}
              id={key + 1}
              active={active === key}
              text={item.text}
              onClick={() => setActive(key)}
            />
          ))}
        </ResponsiveColumn>
        <ResponsiveColumn>
          {column2.map((item, key) => (
            <CircleRow
              key={uid(item)}
              id={column1.length + key + 1}
              active={active === key + column1.length + 1}
              text={item.text}
              onClick={() => setActive(key + column1.length + 1)}
            />
          ))}
        </ResponsiveColumn>
      </ResponsiveContainer>
    </>
  );
};
