import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@components';
import { IsTablet, IsMobile } from '@components';
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
            <IsMobile>
              O salário de um <br />
              profissional, pode ser <br />
              o custo de um <br />
              <strong>erro na contratação</strong>
            </IsMobile>
            <IsTablet>
              O salário de um profissional, pode ser o custo de um{' '}
              <strong>erro na contratação</strong>
            </IsTablet>
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
          <IsMobile>
            das contratações <br />
            <strong>
              terminam em <br /> demissões
            </strong>
            , por <br />
            erros na seleção de <br />
            candidatos
          </IsMobile>
          <IsTablet>
            das contratações <strong>terminam em demissões</strong>, por erros
            na seleção de candidatos
          </IsTablet>
        </Label>
      </Item>

      <Item
        data-aos={isDesktop && 'fade-in'}
        data-aos-offset="200"
        className="last"
      >
        <Label alignRight>
          <IsMobile>
            dos profissionais <br />
            <strong>desistem</strong> durante o <br />
            processo de <br />
            recrutamento
          </IsMobile>
          <IsTablet>
            dos profissionais <strong>desistem</strong> durante o processo de
            recrutamento
          </IsTablet>
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
