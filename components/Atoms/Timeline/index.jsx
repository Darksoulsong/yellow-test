import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints, ShowOnTabletOnly, ShowOnDesktop } from '@components';
import { TimelineRoot, Item, Circle, Label } from './styles';

export default function Timeline() {
  const desktopBreakpoint = +breakpoints.large.replace('px', '');
  const isDesktop = useMediaQuery({ minWidth: desktopBreakpoint });

  return (
    <TimelineRoot>
      <Item
        className="first"
        data-aos={isDesktop && 'fade-in'}
        data-aos-offset="200"
      >
        <Label alignRight>
          <ShowOnTabletOnly>
            O salário de um <br />
            profissional, pode ser <br />
            o custo de um <br />
            <strong>erro na contratação</strong>
          </ShowOnTabletOnly>

          <ShowOnDesktop>
            O salário de um profissional, pode ser o custo de um{' '}
            <strong>erro na contratação</strong>
          </ShowOnDesktop>
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
          <ShowOnTabletOnly>
            das contratações <br />
            <strong>
              terminam em <br /> demissões
            </strong>
            , por <br />
            erros na seleção de <br />
            candidatos
          </ShowOnTabletOnly>
          <ShowOnDesktop>
            das contratações <strong>terminam em demissões</strong>, por erros
            na seleção de candidatos
          </ShowOnDesktop>
        </Label>
      </Item>

      <Item
        data-aos={isDesktop && 'fade-in'}
        data-aos-offset="200"
        className="last"
      >
        <Label alignRight>
          <ShowOnTabletOnly>
            dos profissionais <br />
            <strong>desistem</strong> durante o <br />
            processo de <br />
            recrutamento
          </ShowOnTabletOnly>
          <ShowOnDesktop>
            dos profissionais <strong>desistem</strong> durante o processo de
            recrutamento
          </ShowOnDesktop>
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
