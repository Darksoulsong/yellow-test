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
  const secondColumnFirstIndex = column1.length + 1;

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
          {column1.map((item, index) => (
            <CircleRow
              key={uid(item)}
              id={index + 1}
              active={values.area === item.text}
              text={item.text}
              onClick={() => handleChangeValue(item.text)}
              border={lastElementFirstColumnIndex !== index || !isLarge}
            />
          ))}
        </ResponsiveColumn>
        <ResponsiveColumn>
          {column2.map((item, index) => (
            <CircleRow
              key={uid(item)}
              id={secondColumnFirstIndex + index}
              active={values.area === item.text}
              text={item.text}
              onClick={() => handleChangeValue(item.text)}
              border={isLarge || lastElementSecondColumnIndex !== index}
            />
          ))}
        </ResponsiveColumn>
      </ResponsiveContainer>
    </CustomContainer>
  );
};
