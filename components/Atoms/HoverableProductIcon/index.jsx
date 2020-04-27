import React from 'react';
import { SVG } from '@components';
import { Root } from './styles';

export default function HoverableProductIcon({ iconName }) {
  return (
    <Root className={iconName}>
      {/* <SVG className="product-icon" name={iconName} /> */}
      <img
        className="product-icon"
        src={`images/${iconName}.svg`}
        name={iconName}
      />
      <SVG className="hover-icon" name="handdrawn-circle" />
    </Root>
  );
}
