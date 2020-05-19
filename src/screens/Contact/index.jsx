import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { fieldHasError } from '@utils';
import { spaces } from '@components/Organisms/Theme/sizes';

import {
  DefaultLayout,
  Button,
  AnimatedManipulator,
  SVG,
  RadioButtons,
  Field,
  FormControl,
} from '@components';

import {
  VacantSection,
  FormSection,
  SimulationSection,
  CustomTitle,
  CustomText,
  HugeTitle,
  TitleContainer,
  SVGManipulator,
  Form,
  FormQuestion,
  SimpleContainer,
  CustomButton,
  ArrowPositioner,
} from './styles';

const schema = {
  name: Yup.string().required('Informe o nome'),
  email: Yup.string().required('Informe o email'),
  company: Yup.string().required('Informe a empresa'),
  telf: Yup.string().required('Informe o telefone'),
  product: Yup.string(),
  comment: Yup.string(),
};

const radioButtons = [
  { label: 'Tech', value: 'tech' },
  { label: 'Exec', value: 'exec' },
  { label: 'Express', value: 'express' },
  { label: 'RPO', value: 'rpo' },
];

export const Contact = () => {
  const [radio, setRadio] = useState('tech');
  const [sent, setSent] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    company: '',
    telf: '',
    product: '',
    comment: '',
  };

  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: Yup.object(schema),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: () => {
      setSent(true);
    },
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <DefaultLayout>
      <VacantSection>
        <CustomTitle align="center">
          <strong>SE VOCÊ É UM CANDIDATO,</strong> <br />
          CLIQUE PARA SE INSCREVER EM <br />
          UMA DE NOSSAS VAGAS
        </CustomTitle>
        <SimpleContainer>
          <ArrowPositioner>
            <SVG name="handdrawn-arrow7" />
          </ArrowPositioner>
          <Button variant="primary" height="70px" type="button">
            BUSCO UMA VAGA
          </Button>
        </SimpleContainer>
      </VacantSection>
      <FormSection>
        <TitleContainer>
          <CustomTitle align="center">
            <strong>
              SE VOCÊ QUER CONTRATAR A
              <br />
              YELLOW PARA SUA EMPRESA,
            </strong>
            <br />
            DEIXE SEUS DADOS E<br />
            ENTRAREMOS EM CONTATO
            <br />
          </CustomTitle>
          <SVGManipulator>
            <AnimatedManipulator
              dataAosOffset="100"
              name="three-line-icon"
              type="three-line-icon-yellow"
            />
          </SVGManipulator>
        </TitleContainer>
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <Field
              disabled={sent}
              variant="normal"
              placeholder="nome"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              hasError={fieldHasError('name', touched, errors)}
              validationMessage={errors.name}
            />
          </FormControl>
          <FormControl>
            <Field
              disabled={sent}
              variant="normal"
              placeholder="email"
              name="email"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              hasError={fieldHasError('email', touched, errors)}
              validationMessage={errors.email}
            />
          </FormControl>
          <FormControl>
            <Field
              disabled={sent}
              variant="normal"
              placeholder="empresa"
              name="company"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.company}
              hasError={fieldHasError('company', touched, errors)}
              validationMessage={errors.company}
            />
          </FormControl>
          <FormControl>
            <Field
              disabled={sent}
              variant="normal"
              placeholder="telefone"
              name="telf"
              mask="cellphone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.telf}
              hasError={fieldHasError('telf', touched, errors)}
              validationMessage={errors.telf}
            />
          </FormControl>
          <FormQuestion>
            <CustomText>
              <strong> Qual produto</strong> nosso atende sua necessidade?
            </CustomText>
          </FormQuestion>
          <RadioButtons
            radioButtons={radioButtons}
            name="product"
            selected={radio}
            setSelected={!sent ? setRadio : () => {}}
          />
          <SimpleContainer margin={`${spaces.sm} 0 0 0 `}>
            <Field
              disabled={sent}
              type="textarea"
              name="comment"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.comment}
              placeholder="Fale mais sobre o que você precisa"
            />
          </SimpleContainer>
          <SimpleContainer
            direction="column"
            margin={`${spaces.lg} 0 ${spaces.sm} 0`}
          >
            <CustomButton
              type="submit"
              variant={sent ? 'primary' : 'black'}
              fontSize="1em"
              height="40px"
            >
              ENVIAR
            </CustomButton>
            {sent && (
              <CustomText
                align="center"
                margin={`${spaces.sm} 0`}
                style={{ fontSize: '1.75rem', opacity: '0.75' }}
              >
                Obrigado pelo seu contato, iremos retornar em breve!
              </CustomText>
            )}
          </SimpleContainer>
        </Form>
      </FormSection>
      <SimulationSection>
        <HugeTitle weight="700" align="center">
          FAÇA SUA SIMULAÇÃO
        </HugeTitle>
        <CustomText align="center">
          Clique abaixo e saiba mais como funciona nosso processo
        </CustomText>
        <SimpleContainer margin={`${spaces.sm} 0`}>
          <SVG name="handdrawn-arrow8" />
        </SimpleContainer>
        <Button variant="primary" height="70px" type="button">
          SIMULE SUA VAGA
        </Button>
      </SimulationSection>
    </DefaultLayout>
  );
};
