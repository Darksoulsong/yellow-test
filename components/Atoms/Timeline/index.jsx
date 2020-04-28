import React from 'react';
import { Root, Item, Circle, Label } from './styles';

export default function Timeline() {
  return (
    <Root>
      <Item className="first">
        <Label alignRight data-aos="fade-right">
          O salário de um profissional, pode ser o custo de um{' '}
          <strong>erro na contratação</strong>
        </Label>
      </Item>
      <Item className="has-line first">
        <Circle data-aos="fade-down">
          3<span>x</span>
        </Circle>
      </Item>
      <Item></Item>

      <Item>
        <Label></Label>
      </Item>
      <Item className="has-line">
        <Circle data-aos="fade-down">
          58<span>%</span>
        </Circle>
      </Item>
      <Item>
        <Label alignLeft data-aos="fade-left">
          das contratações <strong>terminam em demissões</strong>, por erros na
          seleção de candidatos
        </Label>
      </Item>

      <Item className="last">
        <Label alignRight data-aos="fade-right">
          dos profissionais <strong>desistem</strong> durante o processo de
          recrutamento
        </Label>
      </Item>
      <Item className="has-line last">
        <Circle data-aos="fade-down">
          88<span>%</span>
        </Circle>
      </Item>
      <Item></Item>
    </Root>
  );
}
