import React from 'react';
import { HoverableProductIcon } from '@components';
import { Root, Item, Description } from './styles';

export default function Products() {
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
          'Recrutamento especializado para a busca de profissionais de alta gerência e diretorias.',
      },
      {
        iconName: 'tech-icon',
        description:
          'Recrutamento especializado para a busca de profissionais de alta gerência e diretorias.',
      },
      {
        iconName: 'rpo-icon',
        description:
          'Recrutamento especializado para a busca de profissionais de alta gerência e diretorias.',
      },
    ];
  }, []);
  return (
    <Root>
      {items.map((item, index) => (
        <Item key={index}>
          <HoverableProductIcon iconName={item.iconName} />
          <Description>{item.description}</Description>
        </Item>
      ))}
    </Root>
  );
}
