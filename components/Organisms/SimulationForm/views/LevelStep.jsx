import React from 'react';
import { useFormikContext } from 'formik';
import { uid } from 'react-uid';
import { useScreenWidth } from '@hooks';
import { CircleRow } from '@components';
import {
  FormHeading,
  ResponsiveContainer,
  ResponsiveColumn,
  CustomContainer,
} from '../styles';

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
  const { values, setFieldValue, submitForm } = useFormikContext();
  const { isLarge } = useScreenWidth();
  const handleChangeValue = async value => {
    await setFieldValue('seniorityLevel', value);
    submitForm();
  };
  const lastElementFirstColumnIndex = column1.length - 1;
  const lastElementSecondColumnIndex = column2.length - 1;
  return (
    <CustomContainer variant="md">
      <FormHeading>
        Qual o nível de senioridade mais adequado para posição
      </FormHeading>
      <ResponsiveContainer>
        <ResponsiveColumn>
          {column1.map((item, key) => (
            <CircleRow
              key={uid(item)}
              id={key + 1}
              active={values.seniorityLevel === item.text}
              text={item.text}
              onClick={() => handleChangeValue(item.text)}
              border={lastElementFirstColumnIndex !== key || !isLarge}
            />
          ))}
        </ResponsiveColumn>
        <ResponsiveColumn>
          {column2.map((item, key) => (
            <CircleRow
              key={uid(item)}
              id={column1.length + key + 1}
              active={values.seniorityLevel === item.text}
              text={item.text}
              onClick={() => handleChangeValue(item.text)}
              border={isLarge || lastElementSecondColumnIndex !== key}
            />
          ))}
        </ResponsiveColumn>
      </ResponsiveContainer>
    </CustomContainer>
  );
};
