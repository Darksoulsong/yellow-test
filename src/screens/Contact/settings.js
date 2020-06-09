import { Yup } from '@components';

export const schema = {
  email: Yup.string().ensureEmailIsCorporate(
    'Informe um endereço de email empresarial'
  ),
  name: Yup.string().required('Informe o nome'),
  company: Yup.string().required('Informe a empresa'),
  telf: Yup.string().required('Informe o telefone'),
  product: Yup.string(),
  comment: Yup.string(),
};

export const initialValues = {
  name: '',
  email: '',
  company: '',
  telf: '',
  product: 'tech',
  comment: '',
};

export const radioButtons = [
  { label: 'Tech', value: 'tech' },
  { label: 'Exec', value: 'exec' },
  { label: 'Express', value: 'express' },
  { label: 'RPO', value: 'rpo' },
];
