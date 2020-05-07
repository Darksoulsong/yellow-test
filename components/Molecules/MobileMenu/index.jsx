import React from 'react';
import { Logo, SVG } from '@components';
import {
  HeaderHeading,
  HeaderIconHolder,
} from '@components/Molecules/Header/styles';
import {
  MobileMenuRoot,
  MobileMenuItem,
  MobileMenuText,
  MobileMenuBox,
  MobileMenuHeading,
  MobileMenuIcon,
} from './styles';

export default function MobileMenu({ open }) {
  return <MobileMenuRoot open={open}>Mobile Menu</MobileMenuRoot>;
}
