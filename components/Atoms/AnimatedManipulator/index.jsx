import React from 'react';
import { SVG } from '@components';
import { SVGManipulator } from './styles';

export const AnimatedManipulator = ({ dataAosOffset, name, type = '' }) => (
  <SVGManipulator
    data-aos={type || name}
    data-aos-offset={dataAosOffset}
    type={type || name}
  >
    <SVG name={name} />
  </SVGManipulator>
);
