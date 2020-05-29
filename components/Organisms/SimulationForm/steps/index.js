import * as Yup from 'yup';

import { default as LocationStep } from '../views/LocationStep';
import { default as InitialStep } from '../views/InitialStep';
import { default as InfoStep } from '../views/InfoStep';
import { default as InitialInfoStep } from '../views/InitialInfoStep';
import { FinalStep } from '../views/FinalStep';
import { OpeningStep } from '../views/OpeningStep';
import { UrgencyStep } from '../views/UrgencyStep';
import { TimeStep } from '../views/TimeStep';
import { AreaStep } from '../views/AreaStep';
import { LevelStep } from '../views/LevelStep';

export default [
  {
    id: 'InitialStep',
    component: InitialStep,
    removeControls: true,
  },
  {
    id: 'InitialInfoStep',
    component: InitialInfoStep,
    initialValues: {
      name: '',
      email: '',
      telephone: '',
      company: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Campo obrigatório'),
      email: Yup.string().required('Campo obrigatório'),
      telephone: Yup.string().required('Campo obrigatório'),
      company: Yup.string().required('Campo obrigatório'),
    }),
  },
  {
    id: 'OpeningStep',
    component: OpeningStep,
  },
  {
    id: 'LevelStep',
    component: LevelStep,
  },
  {
    id: 'AreaStep',
    component: AreaStep,
  },
  {
    id: 'UrgencyStep',
    component: UrgencyStep,
  },
  {
    id: 'LocationStep',
    component: LocationStep,
    initialValues: {
      city: '',
      neighborhood: '',
      street: '',
      work: '',
      clients: '',
    },
    validationSchema: Yup.object().shape({
      city: Yup.string().required('Campo obrigatório'),
      neighborhood: Yup.string().required('Campo obrigatório'),
      street: Yup.string().required('Campo obrigatório'),
    }),
  },
  {
    id: 'TimeStep',
    component: TimeStep,
  },
  {
    id: 'InfoStep',
    component: InfoStep,
    initialValues: {
      publicationTitle: '',
      upperLimit: '',
      lowerLimit: '',
    },
    validationSchema: Yup.object().shape({
      publicationTitle: Yup.string().required('Campo obrigatório'),
      upperLimit: Yup.string().required('Campo obrigatório'),
      lowerLimit: Yup.string().required('Campo obrigatório'),
    }),
  },
  {
    id: 'FinalStep',
    component: FinalStep,
    removeControls: true,
  },
];
