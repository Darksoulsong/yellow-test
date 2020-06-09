import { Yup } from '@components';
import { default as PersonalInfoOne } from '../views/PersonalInfoOne';
import { default as CompanyInfoOne } from '../views/CompanyInfoOne';
import { default as PersonalInfoTwo } from '../views/PersonalInfoTwo';
import { default as AccountInfo } from '../views/AccountInfo';

export const stepsCandidate = [
  {
    id: 'PersonalInfoOne',
    component: PersonalInfoOne,
    initialValues: {
      email: '',
      fullname: '',
      birthDate: '',
      phone: '',
      state: '',
      city: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.mixed()
        .ensureEmailIsCorporate('Informe um endereço de email empresarial')
        .required('Campo obrigatório'),
      fullname: Yup.string().required('Campo obrigatório'),
      birthDate: Yup.string()
        .min(6)
        .required('Campo obrigatório'),
      phone: Yup.string().required('Campo obrigatório'),
      state: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
    }),
  },

  {
    id: 'PersonalInfoTwo',
    component: PersonalInfoTwo,
    initialValues: {
      lastCompany: '',
      lastOccupation: '',
      lastWage: '',
      linkedin: '',
      resume: '',
    },
    validationSchema: Yup.object().shape({
      lastCompany: Yup.string().required('Campo obrigatório'),
      lastOccupation: Yup.string().required('Campo obrigatório'),
      lastWage: Yup.string().required('Campo obrigatório'),
      linkedin: Yup.string().url(
        'Forneça um endereço válido (ex.: http://link.com.br)'
      ),
    }),
  },
  {
    id: 'AccountInfo',
    component: AccountInfo,
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Campo obrigatório'),
      password: Yup.string()
        .min(8, 'Mínimo de 8 caracteres')
        .required('Campo obrigatório'),
      confirmPassword: Yup.mixed()
        .test('match', 'As senhas não coincidem', function matchPassword(
          password
        ) {
          return password === this.parent.password;
        })
        .required('Confirme a senha'),
      terms: Yup.bool().oneOf([true], 'Campo obrigatório'),
    }),
  },
];

export const stepsCompany = [
  {
    id: 'CompanyInfoOne',
    component: CompanyInfoOne,
    initialValues: {
      email: '',
      fullname: '',
      company: '',
      position: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Endereço de email inválido')
        .required('Campo obrigatório'),
      fullname: Yup.string().required('Campo obrigatório'),
      company: Yup.string().required('Campo obrigatório'),
      position: Yup.string().required('Campo obrigatório'),
    }),
  },
  {
    id: 'AccountInfo',
    component: AccountInfo,
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Campo obrigatório'),
      password: Yup.string()
        .min(8, 'Mínimo de 8 caracteres')
        .required('Campo obrigatório'),
      confirmPassword: Yup.mixed()
        .test('match', 'As senhas não coincidem', function matchPassword(
          password
        ) {
          return password === this.parent.password;
        })
        .required('Confirme a senha'),
      terms: Yup.bool().oneOf([true], 'Campo obrigatório'),
    }),
  },
];
