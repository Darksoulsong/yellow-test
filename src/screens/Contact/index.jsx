import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { spaces } from '@components/Organisms/Theme/sizes';

import {
  DefaultLayout,
  Button,
  AnimatedManipulator,
  SVG,
  Radio,
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

export const Contact = () => {
  const [radio, setRadio] = useState('');

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
            BUSQUE UMA VAGA
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
          <SimpleContainer>
            <Radio
              checked={radio}
              onChange={setRadio}
              label="Tech"
              type="radio"
              name="product"
              value="Tech"
            />
          </SimpleContainer>
          <SimpleContainer>
            <Radio
              checked={radio}
              onChange={setRadio}
              label="Exec"
              type="radio"
              name="product"
              value="Exec"
            />
          </SimpleContainer>
          <SimpleContainer>
            <Radio
              checked={radio}
              onChange={setRadio}
              label="Express"
              type="radio"
              name="product"
              value="Express"
            />
          </SimpleContainer>
          <SimpleContainer>
            <Radio
              checked={radio}
              onChange={setRadio}
              label="RPO"
              type="radio"
              name="product"
              value="RPO"
            />
          </SimpleContainer>
          <SimpleContainer>
            <CustomTextArea placeholder="Fale mais sobre o que você precisa" />
          </SimpleContainer>
          <SimpleContainer
            direction="column"
            margin={`${spaces.lg} 0 ${spaces.sm} 0`}
          >
            <CustomButton fontSize="1em" height="40px">
              ENVIAR
            </CustomButton>
            <CustomText
              align="center"
              margin={`${spaces.sm} 0`}
              style={{ fontSize: '1.75rem', opacity: '0.75' }}
            >
              Obrigado pelo seu contato, iremos retornar em breve!
            </CustomText>
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
