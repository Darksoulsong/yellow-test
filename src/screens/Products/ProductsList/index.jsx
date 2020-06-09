import React from 'react';
import { Text, SVG } from '@components';
import { ProductsListRoot, ProductsList, ProductsListItem } from './styles';

export default function ProductsListComponent() {
  return (
    <ProductsListRoot>
      <ProductsList>
        <ProductsListItem>
          <SVG name="plus-circle-icon" />
          <Text>
            Ações de marketing e <strong>impulsionamento</strong>
          </Text>
        </ProductsListItem>

        <ProductsListItem>
          <SVG name="plus-circle-icon" />
          <Text>
            Teste <strong>comportamental</strong>
          </Text>
        </ProductsListItem>

        <ProductsListItem>
          <SVG name="plus-circle-icon" />
          <Text>
            <strong>Testes técnicos</strong> customizáveis
          </Text>
        </ProductsListItem>

        <ProductsListItem>
          <SVG name="plus-circle-icon" />
          <Text>
            <strong>Diagnóstico</strong> de clima
          </Text>
        </ProductsListItem>
      </ProductsList>

      <ProductsList>
        <ProductsListItem>
          <SVG name="plus-circle-icon" />
          <Text>
            <strong>Entrevistas</strong> no Yellow Office
          </Text>
        </ProductsListItem>

        <ProductsListItem>
          <SVG name="plus-circle-icon" />
          <Text>
            <strong>Mapeamento</strong> de mercado
          </Text>
        </ProductsListItem>

        <ProductsListItem>
          <SVG name="plus-circle-icon" />
          <Text>
            <strong>Garantia</strong> estendida
          </Text>
        </ProductsListItem>

        <ProductsListItem>
          <SVG name="plus-circle-icon" />
          <Text>
            Teste de <strong>idiomas</strong>
          </Text>
        </ProductsListItem>
      </ProductsList>
    </ProductsListRoot>
  );
}
