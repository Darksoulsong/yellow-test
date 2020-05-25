import React from 'react';
import { Button, Product } from '@components';
import { Root, ProductsActions } from './styles';

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
        <Button type="button" version="unstyled" onClick={() => toggle()}>
          <span>{active ? 'esconder' : 'ver'} todos</span>
        </Button>
      </ProductsActions>

      <Root>
        {items.map((item, index) => (
          <Product active={active} key={index} iconName={item.iconName}>
            {item.description}
          </Product>
        ))}
      </Root>
    </>
  );
}
