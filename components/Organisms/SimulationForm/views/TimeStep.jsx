import React from 'react';
import { useFormikContext } from 'formik';
import { DefaultCircledRowModal } from '../components/DefaultCircledRowModal';
import { CustomContainer } from '../styles';
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
export const TimeStep = () => {
  const { values, setFieldValue, submitForm } = useFormikContext();
  const handleChangeValue = async value => {
    await setFieldValue('timeOpen', value, false);
    submitForm();
  };

  return (
    <CustomContainer variant="md">
      <DefaultCircledRowModal
        list={list}
        active={values.timeOpen}
        setActive={handleChangeValue}
        title="Há quanto tempo vocês estão buscando por esse profissional?"
      />
    </CustomContainer>
  );
};
