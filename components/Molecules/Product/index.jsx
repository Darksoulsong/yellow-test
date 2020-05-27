import React from 'react';
import { HoverableProductIcon } from '@components';
import { ProductRoot, Item, Description } from './styles';

export default function Product({ iconName, active, children }) {
  return (
    <ProductRoot>
      <Item className={active ? 'active' : ''}>
        <HoverableProductIcon iconName={iconName} />
        <Description className="product-description">{children}</Description>
      </Item>
    </ProductRoot>
  );
}
