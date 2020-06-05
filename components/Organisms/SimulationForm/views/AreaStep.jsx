import React from 'react';
import { uid } from 'react-uid';
import { useFormikContext } from 'formik';
import { CircleRow } from '@components';
import { useScreenWidth } from '@hooks';
import {
  FormHeading,
  ResponsiveContainer,
  ResponsiveColumn,
  CustomContainer,
} from '../styles';

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
  const { values, setFieldValue, submitForm } = useFormikContext();
  const { isLarge } = useScreenWidth();
  const lastElementFirstColumnIndex = column1.length - 1;
  const lastElementSecondColumnIndex = column2.length - 1;
  const handleChangeValue = async value => {
    await setFieldValue('area', value, false);
    submitForm();
  };
  return (
    <CustomContainer variant="md">
      <FormHeading>
        Esse profissional estará em qual área da empresa?
      </FormHeading>
      <ResponsiveContainer>
        <ResponsiveColumn>
          {column1.map((item, key) => (
            <CircleRow
              key={uid(item)}
              id={key + 1}
              active={values.area === item.text}
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
              active={values.area === item.text}
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
