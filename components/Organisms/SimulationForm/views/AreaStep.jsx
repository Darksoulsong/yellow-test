import React, { useState } from 'react';
import { uid } from 'react-uid';
import { CircleRow } from '@components';
import { FormHeading, ResponsiveContainer, ResponsiveColumn } from '../styles';

const column1 = [
  {
    text: 'Tecnologia e desenvolvimento',
  },
  {
    text: 'Engenharia e áreas técnicas',
  },
  {
    text: 'Comunicação e Marketing',
  },
  { text: 'Finanças, administração e contabilidade' },
  { text: 'Comercial e vendas' },
];
const column2 = [
  {
    text: 'Saúde e bem-estar',
  },
  {
    text: 'Jurídico',
  },
  {
    text: 'Recursos Humanos',
  },
  { text: 'Outro' },
];

export const AreaStep = () => {
  const [active, setActive] = useState(-1);
  return (
    <>
      <FormHeading>
        Esse profissional estará em qual área da empresa?
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
