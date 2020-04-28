import React from 'react';
import { SVG } from '@components';
import { Root } from './styles';

const getVariant = variant => {
  switch (variant) {
    case 'transparent':
      return 'logo-transparent-stroked';
    case 'alt':
      return 'logo-alt';
    case 'yellow':
    default:
      return 'logo';
  }
};

/**
 * @param {{variant: 'yellow' | 'transparent' | 'alt', width: string, height: string, className: string}} props
 */
export default function Logo({ variant, width, height, className }) {
  const name = getVariant(variant);

  return (
    <Root className={className} width={width} height={height}>
      <SVG name={name} />
    </Root>
  );
}
