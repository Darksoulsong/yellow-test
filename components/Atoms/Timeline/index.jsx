import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@components';
import { MediaQuery } from '@components';
import { TimelineRoot, Item, Circle, Label } from './styles';

export default function Timeline() {
  const desktopBreakpoint = +breakpoints.large.replace('px', '');
  const isDesktop = useMediaQuery({ minWidth: desktopBreakpoint });

  return (
    <TimelineRoot>
      <Item className="first">
        <Label alignRight>
          <span
            data-aos={isDesktop && 'fade-in'}
            data-aos-offset="50"
            data-aos-delay="100"
          >
            <MediaQuery screenSize="smallerThanDesktop">
              O salário de um <br />
              profissional, pode ser <br />
              o custo de um <br />
              <strong>erro na contratação</strong>
            </MediaQuery>

            <MediaQuery screenSize="desktop">
              O salário de um profissional, pode ser o custo de um{' '}
              <strong>erro na contratação</strong>
            </MediaQuery>
          </span>
        </Label>
      </Item>
      <Item
        data-aos={isDesktop && 'animate-line-down'}
        data-aos-offset="200"
        className="has-line first"
      >
        <Circle data-aos={isDesktop && 'fade-in'} data-aos-offset="100">
          3<span>x</span>
        </Circle>
      </Item>
      <Item />

      <Item>
        <Label />
      </Item>
      <Item
        data-aos={isDesktop && 'animate-line-down'}
        data-aos-offset="200"
        className="has-line"
      >
        <Circle data-aos={isDesktop && 'fade-in'} data-aos-offset="100">
          58<span>%</span>
        </Circle>
      </Item>
      <Item data-aos={isDesktop && 'fade-in'} data-aos-offset="200">
        <Label>
          <MediaQuery screenSize="smallerThanDesktop">
            das contratações <br />
            <strong>
              terminam em <br /> demissões
            </strong>
            , por <br />
            erros na seleção de <br />
            candidatos
          </MediaQuery>
          <MediaQuery screenSize="desktop">
            das contratações <strong>terminam em demissões</strong>, por erros
            na seleção de candidatos
          </MediaQuery>
        </Label>
      </Item>

      <Item
        data-aos={isDesktop && 'fade-in'}
        data-aos-offset="200"
        className="last"
      >
        <Label alignRight>
          <MediaQuery screenSize="smallerThanDesktop">
            dos profissionais <br />
            <strong>desistem</strong> durante o <br />
            processo de <br />
            recrutamento
          </MediaQuery>
          <MediaQuery screenSize="desktop">
            dos profissionais <strong>desistem</strong> durante o processo de
            recrutamento
          </MediaQuery>
        </Label>
      </Item>
      <Item
        data-aos={isDesktop && 'animate-line-down'}
        data-aos-offset="200"
        className="has-line last"
      >
        <Circle data-aos={isDesktop && 'fade-in'} data-aos-offset="150">
          88<span>%</span>
        </Circle>
      </Item>
      <Item />
    </TimelineRoot>
  );
}
