import React from 'react';
import { HoverableProductIcon } from '@components';
import { Root, Item, Description } from './styles';

export default function Products() {
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
          'Recrutamento \n especializado para a \n busca de profissionais \n de alta gerência e \n diretorias.',
      },
      {
        iconName: 'tech-icon',
        description:
          'Recrutamento \n especializado para a \n busca de profissionais \n de alta gerência e \n diretorias.',
      },
      {
        iconName: 'rpo-icon',
        description:
          'Recrutamento \n especializado para a \n busca de profissionais \n de alta gerência e \n diretorias.',
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
