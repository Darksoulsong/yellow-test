import React from 'react';
import { DefaultCircledRowModal } from '../components/DefaultCircledRowModal';
import { useFormikContext } from 'formik';
import { CustomContainer } from '../styles';
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
  { text: 'Esta é uma vaga recorrente.' },
];

export const OpeningStep = () => {
  const { values, setFieldValue, submitForm } = useFormikContext();
  const handleChangeValue = async value => {
    await setFieldValue('reasonToOpen', value);
    submitForm();
  };

  return (
    <CustomContainer variant="md">
      <DefaultCircledRowModal
        list={list}
        active={values.reasonToOpen}
        setActive={handleChangeValue}
        title="Por que você está abrindo uma vaga?"
      />
    </CustomContainer>
  );
};
