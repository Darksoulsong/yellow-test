import React from 'react';
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
  Heading,
  YellowProductsHeading,
  YellowPlusHeading,
  ProductsSection,
  ProductsSectionMain,
} from './styles';

export const Products = () => {
  return (
    <DefaultLayout>
      <ProductsRoot>
        <ProductsSectionMain>
          <YellowProductsHeading>
            YELLOW <strong>PRODUTOS</strong>
            <AnimatedScratches />
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
