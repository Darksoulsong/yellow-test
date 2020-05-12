import React from 'react';
import { HoverableProductIcon, Button } from '@components';
import { Root, Item, Description, ProductsActions } from './styles';

export default function Products() {
  const [active, setActive] = React.useState(false);

  const toggle = React.useCallback(() => {
    setActive(!active);
  }, [active]);

  const items = React.useMemo(() => {
    return [
      {
        iconName: 'exec-icon',
        description:
          'Recrutamento \n especializado para a \n busca de profissionais \n de alta gerência e \n diretorias.',
      },
      {
        iconName: 'express-icon',
        description:
          'Processo inteligente \n para encontrar o \n candidato ideal em \n 72 horas.',
      },
      {
        iconName: 'tech-icon',
        description: 'Solução específica \n para vagas de \n tecnologia.',
      },
      {
        iconName: 'rpo-icon',
        description:
          'Terceirização \n completa ou parcial, \n para a captação e \n avaliação de equipes \n completas.',
      },
    ];
  }, []);

  return (
    <>
      <ProductsActions>
        <Button type="button" variant="unstyled" onClick={() => toggle()}>
          <span>{active ? 'esconder' : 'ver'} todos</span>
        </Button>
      </ProductsActions>

      <Root>
        {items.map((item, index) => (
          <Item className={active ? 'active' : ''} key={index}>
            <HoverableProductIcon iconName={item.iconName} />
            <Description>{item.description}</Description>
          </Item>
        ))}
      </Root>
    </>
  );
}
