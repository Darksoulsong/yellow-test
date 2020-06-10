import React from 'react';
import AOS from 'aos';
import {
  DefaultLayout,
  ProductsIntroImage,
  AnimatedScratches,
  SVG,
} from '@components';
import ProductsTabs from './ProductsTabs';
import ProductsList from './ProductsList';
import ProductsNetwork from './ProductsNetwork';
import {
  ProductsRoot,
  YellowProductsHeading,
  YellowPlusHeading,
  ProductsSection,
  ProductsSectionMain,
} from './styles';

export const Products = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <DefaultLayout>
      <ProductsRoot>
        <ProductsSectionMain>
          <YellowProductsHeading>
            YELLOW <strong>PRODUTOS</strong>
            <AnimatedScratches animationOffset={100} strokeColor="#000" />
          </YellowProductsHeading>

          <ProductsIntroImage />
        </ProductsSectionMain>

        <ProductsSection>
          <ProductsTabs />
        </ProductsSection>

        <ProductsSection>
          <YellowPlusHeading>
            YELLOW <strong>PLUS</strong>
            <SVG name="plus-signals-icon" />
          </YellowPlusHeading>

          <ProductsList />
        </ProductsSection>

        <ProductsSection>
          <ProductsNetwork />
        </ProductsSection>
      </ProductsRoot>
    </DefaultLayout>
  );
};
