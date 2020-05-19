import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { spaces } from '@components/Organisms/Theme/sizes';

import {
  DefaultLayout,
  Button,
  AnimatedManipulator,
  SVG,
  RadioButtons,
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
  CustomField,
  Form,
  FormQuestion,
  SimpleContainer,
  CustomTextArea,
  CustomButton,
  ArrowPositioner,
} from './styles';

const radioButtons = [
  { label: 'Tech', value: 'tech' },
  { label: 'Exec', value: 'exec' },
  { label: 'Express', value: 'express' },
  { label: 'RPO', value: 'rpo' },
];

export const Contact = () => {
  const [radio, setRadio] = useState('');
  const [send, setSend] = useState(false);

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
        <Form>
          <CustomField placeholder="nome" />
          <CustomField placeholder="email" />
          <CustomField placeholder="empresa" />
          <CustomField placeholder="telefone" />
          <FormQuestion>
            <CustomText>
              <strong> Qual produto</strong> nosso atende sua necessidade?
            </CustomText>
          </FormQuestion>
          <RadioButtons
            radioButtons={radioButtons}
            name="product"
            selected={radio}
            setSelected={setRadio}
          />

          <SimpleContainer>
            <CustomTextArea placeholder="Fale mais sobre o que você precisa" />
          </SimpleContainer>
        </Form>
        <SimpleContainer
          direction="column"
          margin={`${spaces.lg} 0 ${spaces.sm} 0`}
        >
          <CustomButton
            variant={send ? 'primary' : ''}
            fontSize="1em"
            height="40px"
          >
            ENVIAR
          </CustomButton>
          <CustomText
            onClick={() => setSend(true)}
            variant={send ? 'primary' : ''}
            align="center"
            margin={`${spaces.sm} 0`}
            style={{ fontSize: '1.75rem', opacity: '0.75' }}
          >
            Obrigado pelo seu contato, iremos retornar em breve!
          </CustomText>
        </SimpleContainer>
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
