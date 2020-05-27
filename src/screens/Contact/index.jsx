import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { schema, radioButtons, initialValues } from './settings';
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
  ArrowPositioner,
} from './styles';

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  const router = useRouter();

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

  useEffect(() => {
    if (router.asPath.includes('#contratar') && formRef) {
      window.scrollTo(0, formRef.current.offsetWidth);
    }
  }, [formRef]);

  return (
    <DefaultLayout>
      <VacantSection>
        <CustomTitle align="center">
          <strong>SE VOCÊ É UM CANDIDATO,</strong>
        </CustomTitle>
        <CustomTitle align="center">CLIQUE PARA SE INSCREVER EM</CustomTitle>
        <CustomTitle align="center">UMA DE NOSSAS VAGAS</CustomTitle>
        <SimpleContainer margin={`${spaces.lg} 0`}>
          <ArrowPositioner>
            <SVG name="handdrawn-arrow7" />
          </ArrowPositioner>
          <a
            href="https://yellowrec.gupy.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="primary" height="70px" type="button">
              BUSCO UMA VAGA
            </Button>
          </a>
        </SimpleContainer>
      </VacantSection>

      <FormSection>
        <TitleContainer>
          <CustomTitle align="center" ref={formRef}>
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
            selected={values.product}
            setSelected={!sent ? handleChange : () => {}}
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
            <Button
              width="fit-content"
              type="submit"
              variant={sent ? 'primary' : 'black'}
              fontSize="1em"
              height="40px"
            >
              ENVIAR
            </Button>
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
