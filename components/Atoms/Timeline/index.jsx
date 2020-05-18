import React from 'react';
import { Root, Item, Circle, Label } from './styles';

export default function Timeline() {
  return (
    <Root>
      <Item className="first">
        <Label alignRight>
          <span data-aos="fade-in" data-aos-offset="50" data-aos-delay="100">
            O salário de um profissional, pode ser o custo de um{' '}
            <strong>erro na contratação</strong>
          </span>
        </Label>
      </Item>
      <Item
        data-aos="animate-line-down"
        data-aos-offset="200"
        className="has-line first"
      >
        <Circle data-aos="fade-in" data-aos-offset="100">
          3<span>x</span>
        </Circle>
      </Item>
      <Item />

      <Item>
        <Label />
      </Item>
      <Item
        data-aos="animate-line-down"
        data-aos-offset="200"
        className="has-line"
      >
        <Circle data-aos="fade-in" data-aos-offset="100">
          58<span>%</span>
        </Circle>
      </Item>
      <Item data-aos="fade-in" data-aos-offset="200">
        <Label>
          das contratações <strong>terminam em demissões</strong>, por erros na
          seleção de candidatos
        </Label>
      </Item>

      <Item data-aos="fade-in" data-aos-offset="200" className="last">
        <Label alignRight>
          dos profissionais <strong>desistem</strong> durante o processo de
          recrutamento
        </Label>
      </Item>
      <Item
        data-aos="animate-line-down"
        data-aos-offset="200"
        className="has-line last"
      >
        <Circle data-aos="fade-in" data-aos-offset="150">
          88<span>%</span>
        </Circle>
      </Item>
      <Item />
    </Root>
  );
}
