import * as Yup from 'yup';
export const schema = {
  name: Yup.string().required('Informe o nome'),
  email: Yup.string().required('Informe o email'),
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
