import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Yup } from '@components';
import { spaces } from '@components/Organisms/Theme/sizes';
import { useFormik } from 'formik';
import { fieldHasError } from '@utils';
import { schema, radioButtons, initialValues } from './settings';

import {
  DefaultLayout,
  Button,
  AnimatedManipulator,
  SVG,
  RadioButtons,
  Field,
  FormControl,
  Loader,
} from '@components';

import { postContactEmailCall } from '@services';

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
  const formRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ error: null, message: '' });

  const sendContact = async values => {
    setLoading(true);
    setResponse({ error: null, message: '' });
    const data = await postContactEmailCall(values);
    setLoading(false);
    if (data.error) {
      setResponse({ error: true, message: data.error });
      return;
    }
    setResponse({
      error: false,
      message: 'Obrigado pelo seu contato, iremos retornar em breve!',
    });
  };
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: Yup.object(schema),
    validateOnChange: false,
    validateOnBluresponser: true,
    onSubmit: async () => {
      await sendContact(values);
      if (!response.error) {
        resetForm();
      }
    },
  });

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
        <SimpleContainer
          margin={`${spaces.md} 0 ${spaces.lg}`}
          marginLg={`${spaces.lg} 0 ${spaces.lgh}`}
        >
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
              placeholder="telefone"
              name="telephone"
              mask="cellphone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.telephone}
              hasError={fieldHasError('telephone', touched, errors)}
              validationMessage={errors.telephone}
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
            setSelected={!loading ? handleChange : () => {}}
          />
          <SimpleContainer margin={`${spaces.sm} 0 0 0 `}>
            <Field
              disabled={loading}
              type="textarea"
              name="comment"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.comment}
              placeholder="Fale mais sobre o que você precisa"
            />
          </SimpleContainer>
          <SimpleContainer direction="column" margin={`${spaces.lg} 0 0 0`}>
            {loading ? (
              <Loader />
            ) : (
              <Button
                width="fit-content"
                type="submit"
                variant="black"
                fontSize="1em"
                height="40px"
              >
                ENVIAR
              </Button>
            )}

            {response.message && (
              <CustomText
                align="center"
                margin={`${spaces.sm} 0 0 0`}
                style={{ fontSize: '1.75rem', opacity: '0.75' }}
                error={response.error}
              >
                {response.message}
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
