import React from 'react';
import Carousel from 'nuka-carousel';
import { Product, SVG, intBreakpoints } from '@components';
import { useMediaQuery } from 'react-responsive';
import { ProductsCarouselRoot, ControlLeft, ControlRight } from './styles';

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

  const isTablet = useMediaQuery({ minWidth: intBreakpoints.medium });

  const getControlsContainerStyles = React.useCallback(
    key => {
      switch (key) {
        case 'CenterLeft':
          return {
            top: isTablet ? '40%' : '40%',
            left: isTablet ? '-24%' : '-38%',
          };
        default:
          return {
            top: isTablet ? '40%' : '40%',
            right: isTablet ? '-24%' : '-38%',
          };
      }
    },
    [isTablet]
  );

  const renderCenterLeftControls = React.useCallback(({ previousSlide }) => {
    return (
      <ControlLeft
        type="button"
        version="unstyled"
        onClick={previousSlide}
        show={true}
      >
        <SVG name="arrow-icon" />
      </ControlLeft>
    );
  }, []);

  const renderCenterRightControls = React.useCallback(({ nextSlide }) => {
    return (
      <ControlRight
        type="button"
        version="unstyled"
        onClick={nextSlide}
        show={true}
      >
        <SVG name="arrow-icon" />
      </ControlRight>
    );
  }, []);

  return (
    <ProductsCarouselRoot>
      <Carousel
        slideIndex={0}
        wrapAround
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        getControlsContainerStyles={getControlsContainerStyles}
        defaultControlsConfig={{
          pagingDotsStyle: {
            display: 'none',
          },
        }}
      >
        {items.map(props => (
          <Product key={props.description} active {...props}>
            {props.description}
          </Product>
        ))}
      </Carousel>
    </ProductsCarouselRoot>
  );
}
