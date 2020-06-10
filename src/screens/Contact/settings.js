import * as Yup from 'yup';
export const schema = {
  name: Yup.string().required('Informe o nome'),
  email: Yup.string().required('Informe o email'),
  company: Yup.string().required('Informe a empresa'),
  telephone: Yup.string().required('Informe o telefone'),
  product: Yup.string(),
  comment: Yup.string(),
};

export const initialValues = {
  name: '',
  email: '',
  company: '',
  telephone: '',
  product: 'Tech',
  comment: '',
};

export const radioButtons = [
  { label: 'Tech', value: 'Tech' },
  { label: 'Exec', value: 'Exec' },
  { label: 'Express', value: 'Express' },
  { label: 'RPO', value: 'RPO' },
];
