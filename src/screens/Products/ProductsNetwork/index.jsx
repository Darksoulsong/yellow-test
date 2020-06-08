import React from 'react';
import { Text, Button } from '@components';
import {
  ProductsNetworkRoot,
  ProductsNetworkHeader,
  ProductsNetworkContent,
  ProductsNetworkFooter,
  ProductsNetworkHeading,
} from './styles';

export default function ProductsNetwork() {
  return (
    <ProductsNetworkRoot>
      <ProductsNetworkHeader>
        <ProductsNetworkHeading>
          YELLOW <strong>NETWORK</strong>
        </ProductsNetworkHeading>
      </ProductsNetworkHeader>

      <ProductsNetworkContent>
        <Text>
          Milhares de <strong>profissionais altamente qualificados</strong>{' '}
          conectados à rede da Yellow. <br />
          Contrate com <strong>facilidade e precisão</strong> as pessoas certas
          para o seu time!
        </Text>
      </ProductsNetworkContent>

      <ProductsNetworkFooter>
        <Button variant="primary">QUERO CONTRATAR</Button>
      </ProductsNetworkFooter>
    </ProductsNetworkRoot>
  );
}
