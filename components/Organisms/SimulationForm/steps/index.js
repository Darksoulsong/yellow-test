import * as Yup from 'yup';

import { default as LocationStep } from '../views/LocationStep';
import { InitialStep } from '../views/InitialStep';
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
    removeSteps: true,
    removeControls: true,
    justify: 'center',
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
    removeSteps: true,
    removeBackwards: true,
  },
  {
    id: 'OpeningStep',
    component: OpeningStep,
    initialValues: {
      reasonToOpen: '',
    },
    validationSchema: Yup.object().shape({
      reasonToOpen: Yup.string().required('Campo obrigatório'),
    }),
  },
  {
    id: 'LevelStep',
    component: LevelStep,
    initialValues: {
      seniorityLevel: '',
    },
    validationSchema: Yup.object().shape({
      seniorityLevel: Yup.string().required('Campo obrigatório'),
    }),
  },
  {
    id: 'AreaStep',
    component: AreaStep,
    initialValues: {
      area: '',
    },
    validationSchema: Yup.object().shape({
      area: Yup.string().required('Campo obrigatório'),
    }),
  },
  {
    id: 'UrgencyStep',
    component: UrgencyStep,
    initialValues: {
      urgencyLevel: '',
    },
    validationSchema: Yup.object().shape({
      urgencyLevel: Yup.string().required('Campo obrigatório'),
    }),
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
    initialValues: {
      timeOpen: '',
    },
    validationSchema: Yup.object().shape({
      timeOpen: Yup.string().required('Campo obrigatório'),
    }),
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
    removeForward: true,
  },
  {
    id: 'FinalStep',
    component: FinalStep,
    removeControls: true,
    removeSteps: true,
    justify: 'center',
  },
];
