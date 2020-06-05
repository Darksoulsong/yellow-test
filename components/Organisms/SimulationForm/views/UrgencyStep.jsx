import React from 'react';
import { useFormikContext } from 'formik';
import { DefaultCircledRowModal } from '../components/DefaultCircledRowModal';
import { CustomContainer } from '../styles';

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

export const UrgencyStep = () => {
  const { values, setFieldValue, submitForm } = useFormikContext();
  const handleChangeValue = async value => {
    await setFieldValue('urgencyLevel', value, false);
    submitForm();
  };
  return (
    <CustomContainer variant="md">
      <DefaultCircledRowModal
        list={list}
        active={values.urgencyLevel}
        setActive={handleChangeValue}
        title="Qual o nível de urgência para a contratação?"
      />
    </CustomContainer>
  );
};
