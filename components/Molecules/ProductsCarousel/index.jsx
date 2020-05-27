import React from 'react';
import { Product, Slider } from '@components';
import { ProductsCarouselRoot } from './styles';

export default function ProductsCarousel() {
  const items = React.useMemo(() => {
    return [
      {
        iconName: 'exec-icon',
        description:
          'Recrutamento especializado para a busca de profissionais de alta gerência e diretorias.',
      },
      {
        iconName: 'express-icon',
        description:
          'Processo inteligente para encontrar o candidato ideal em 72 horas.',
      },
      {
        iconName: 'tech-icon',
        description: 'Solução específica para vagas de tecnologia.',
      },
      {
        iconName: 'rpo-icon',
        description:
          'Terceirização completa ou parcial, para a captação e avaliação de equipes completas.',
      },
    ];
  }, []);

  return (
    <ProductsCarouselRoot>
      <Slider>
        {items.map(props => (
          <Product key={props.description} active {...props}>
            {props.description}
          </Product>
        ))}
      </Slider>
    </ProductsCarouselRoot>
  );
}
