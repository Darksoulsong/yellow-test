import React from 'react';
import { Root, Item, Circle, Label } from './styles';

export default function Timeline() {
  return (
    <Root>
      <Item
        data-aos="fade-in"
        data-aos-offset="300"
        data-aos-delay="600"
        className="first"
      >
        <Label alignRight>
          O salário de um profissional, pode ser o custo de um{' '}
          <strong>erro na contratação</strong>
        </Label>
      </Item>
      <Item data-aos="fade-up" data-aos-offset="300" className="has-line first">
        <Circle data-aos="fade-in" data-aos-delay="600">
          3<span>x</span>
        </Circle>
      </Item>
      <Item></Item>

      <Item>
        <Label></Label>
      </Item>
      <Item data-aos="fade-down" data-aos-offset="300" className="has-line">
        <Circle data-aos="fade-in" data-aos-delay="600">
          58<span>%</span>
        </Circle>
      </Item>
      <Item data-aos="fade-in" data-aos-offset="300" data-aos-delay="600">
        <Label>
          das contratações <strong>terminam em demissões</strong>, por erros na
          seleção de candidatos
        </Label>
      </Item>

      <Item
        data-aos="fade-in"
        data-aos-offset="300"
        data-aos-delay="600"
        className="last"
      >
        <Label alignRight>
          dos profissionais <strong>desistem</strong> durante o processo de
          recrutamento
        </Label>
      </Item>
      <Item
        data-aos="fade-down"
        data-aos-offset="300"
        className="has-line last"
      >
        <Circle data-aos="fade-in" data-aos-delay="600">
          88<span>%</span>
        </Circle>
      </Item>
      <Item></Item>
    </Root>
  );
}
